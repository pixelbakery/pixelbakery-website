// components/parts/Video.tsx
/**
 * @module Video
 * @description
 * Renders a video player with optional event tracking and customizable behaviors.
 * Supports a range of video sources and integrates with Plausible analytics for user interaction tracking.
 */

import dynamic from 'next/dynamic'
import Image from 'next/image'
import cn from 'classnames'
import { usePlausible } from 'next-plausible'
import { Lead } from '@typography'
import { Loading } from '@utility'
import { useTrackError } from '@lib/trackErrors'
import type {BaseVideoProps} from '@/types/video'

//  ––––––––––––––––––––––––––––––––––––––––––
//               PROP DEFINITIONS
//  ––––––––––––––––––––––––––––––––––––––––––

/**
 * Props when tracking is disabled.
 */
interface TrackingDisabled {
  enableTracking?: false
  title?: string
  eventName?: never
}

/**
 * Props when tracking is enabled.
 */
interface TrackingEnabled {
  enableTracking: true
  title: string
  eventName?: string
}

// /**
//  * Base video props.
//  */
// interface BaseVideoProps {
//   url: string
//   autoPlay?: boolean
//   poster?: string
//   posterAsPlaceholderOnly?: boolean
//   loop?: boolean
//   muted?: boolean
//   playsInline?: boolean
//   controls?: boolean
//   caption?: string
//   light?: boolean
//   className?: string
//   dummy?: boolean
//   useCDN?: boolean | string
// }

/**
 * Combined props for the Video component.
 */
type VideoProps = BaseVideoProps & (TrackingDisabled | TrackingEnabled)

//  ––––––––––––––––––––––––––––––––––––––––––
//                MAIN COMPONENT
//  ––––––––––––––––––––––––––––––––––––––––––
/**
 * Video Component
 * Renders a customizable video player with optional Plausible analytics tracking.
 * Supports a range of video sources and integrates user interaction tracking.
 *
 * @param {Object} props - Component props.
 * @param {string} props.url - The URL of the video source (e.g., YouTube, Vimeo, or direct link). **Required**.
 * @param {boolean} [props.autoPlay=false] - If `true`, the video will start playing automatically.
 * @param {string} [props.poster] - Image URL to display before the video starts playing.
 * @param {boolean} [props.posterAsPlaceholderOnly=false] - If `true`, the poster is used only while loading.
 * @param {boolean} [props.loop=false] - If `true`, the video loops continuously.
 * @param {boolean} [props.muted=true] - If `true`, the video is muted by default.
 * @param {boolean} [props.playsInline=true] - If `true`, the video plays inline on mobile devices.
 * @param {boolean} [props.controls=true] - If `true`, playback controls are displayed.
 * @param {string} [props.caption] - A caption displayed below the video for context or accessibility.
 * @param {boolean} [props.light] - Enables light mode for the video player.
 * @param {string} [props.className] - Additional CSS classes for styling the video container.
 * @param {boolean} [props.dummy=false] - If `true`, renders a placeholder for testing/debugging.
 * @param {boolean} [props.enableCaption=false] - If `true`, a caption will be displayed below the video
 * @param {boolean|string} [props.useCDN] - If `true`, prefixes the video URL with a CDN path; custom string for custom prefixes.
 * @param {boolean} [props.enableTracking=false] - If `true`, tracks video interactions via Plausible analytics.
 * @param {boolean} [props.enableVideoTitle=false] - If `true`, add a title above the video. Defaults to false.
 * @param {string} [props.title] - Title of the video, required when `enableTracking` is `true`.
 * @param {string} [props.eventName] - Custom event name for tracking, applicable when `enableTracking` is `true`.
 *
 * @returns {JSX.Element} The rendered video component.
 *
 * @example
 * <Video
 *   url="https://example.com/video.mp4"
 *   autoPlay
 *   poster="/images/poster.jpg"
 *   posterAsPlaceholderOnly
 *   enableTracking
 *   title="Demo Video"
 *   eventName="video_play"
 *   className="custom-class"
 * />
 */
export default function Video({
  url,
  autoPlay = false,
  poster,
  posterAsPlaceholderOnly = false,
  loop = false,
  muted = true,
  playsInline = true,
  controls = true,
  caption,
  light,
  className,
  enableTracking = false,
  eventName,
  useCDN,
  enableCaption,
  enableVideoTitle,
  dummy = false,
  title,
}: VideoProps) {
  const { trackError } = useTrackError()
  const plausible = usePlausible()

  // Determine video title for tracking
  const videoTitle = enableTracking ? title : title || ''

  // Prepare poster for loading placeholder
  const placeholderPoster = posterAsPlaceholderOnly && poster ? poster : null

  // Poster for ReactPlayer
  const finalPoster = !posterAsPlaceholderOnly && poster ? poster : ''

  // Lazy load ReactPlayer with custom error/loading handling
  const ReactPlayer = dynamic(() => import('react-player/lazy'), {
    ssr: false,
    loading: ({ error, isLoading, pastDelay }) => {
      if (error) {
        trackError('component-error', 'react-player-load-failed', { url, message: error.message })
        return <p className='text-wine'>Failed to load video component.</p>
      }
      if (isLoading && pastDelay && placeholderPoster) {
        return (
          <div className='relative w-full bg-black aspect-video'>
            <Image
              src={placeholderPoster}
              alt={caption || 'video loading placeholder'}
              fill
              className='object-cover'
            />
          </div>
        )
      }
      return <Loading />
    },
  })

  /**
   * Tracks video events and sends data to Plausible analytics.
   * @param {string} action - The action performed on the video (e.g., 'start', 'pause').
   * @param {Record<string, unknown>} [extraProps] - Additional properties for the event.
   */
  const trackEvent = (action: string, extraProps?: Record<string, unknown>) => {
    if (!enableTracking || !eventName) return
    plausible(eventName, {
      props: {
        action,
        title: videoTitle,
        url: useCDN ? `${process.env.NEXT_PUBLIC_IMG_PREFIX}${url}` : url,
        ...extraProps,
      },
    })
  }

  // Event Handlers
  const handleStart = () => trackEvent('start')
  const handlePause = () => trackEvent('pause')
  const handleSeek = (seconds: number) => trackEvent('seek', { position: seconds })
  const handleEnded = () => trackEvent('ended')
  const handleError = (error: any) => {
    trackError('video-error', 'playback-failed', { url, message: error.message })
    trackEvent('error', { errorMessage: String(error) })
  }

  // Dummy Mode
  if (dummy) {
    return (
      <div className='flex items-center justify-center bg-wine-100 aspect-video'>
        <p>Dummy Video Mode</p>
      </div>
    )
  }

  // Render Component
  return (
    <>
      {title && enableVideoTitle && (
        <div className='w-full h-full'>
          <div className='mt-12'>
            <Lead color='blue-dark' noMargins className='pb-2 mb-2'>
              {videoTitle}
            </Lead>
          </div>
        </div>
      )}
      <div className={cn('w-full aspect-video', className)}>
        <ReactPlayer
          url={useCDN ? `${process.env.NEXT_PUBLIC_IMG_PREFIX}${url}` : url}
          playing={autoPlay}
          autoPlay={autoPlay}
          poster={finalPoster}
          light={light}
          width='100%'
          height='100%'
          loop={loop}
          muted={muted}
          playsinline={playsInline}
          controls={controls}
          className='w-full videoWrapper'
          onStart={handleStart}
          onPause={handlePause}
          onSeek={handleSeek}
          onEnded={handleEnded}
          onError={handleError}
        />
        {caption && enableCaption && (
          <em className='max-w-md pt-1 mx-auto text-sm font-medium leading-none -mt-7 mb-14 text-blue-dark'>
            {caption}
          </em>
        )}
      </div>
    </>
  )
}
