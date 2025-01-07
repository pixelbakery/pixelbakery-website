/**
 * Props for the Video component.
 */
export interface BaseVideoProps {
  /** URL of the video (e.g., YouTube, Vimeo, or direct link). */
  url: string
  /** Should the video play automatically? Default is `false`. */
  autoPlay?: boolean
  /** URL of the poster image to show before the video plays. */
  poster?: string
  /**
   * If `true`, the poster is only used as a loading placeholder while the video loads
   * and is not passed to the video player's `poster` prop.
   */
  posterAsPlaceholderOnly?: boolean
  /** Should the video loop when it ends? Default is `false`. */
  loop?: boolean
  /** Should the video start muted? Default is `true`. */
  muted?: boolean
  /** Should the video play inline on mobile? Default is `true`. */
  playsInline?: boolean
  /** Should player controls be displayed? Default is `true`. */
  controls?: boolean
  /** Optional caption to display below the video. */
  caption?: string
  /** Use a light preview mode for the video. */
  light?: boolean
  /** Additional CSS classes for the video container. */
  className?: string
  /** Enable Plausible tracking for video events. */
  enableTracking?: boolean
  /**
   * Name of the event to track. Required if `enableTracking` is `true`.
   * Example: `case-study-video-play`.
   */
  eventName?: string
  /**
   * If `true`, prefixes the video URL with a custom CDN path.
   * If a string is provided, it is used as the custom prefix.
   */
  useCDN?: boolean
  /** Enable dummy mode for testing; no real video is loaded. */
  dummy?: boolean
  /**
   * Title of the video, used for tracking events.
   * Required if `enableTracking` is `true`.
   */
  title?: string
  
  /**
   * If `true`, a caption will be displayed below the video
   *
   * @type {?boolean}
   */
  enableCaption?: boolean
  /**
   * If `true`, add a title above the video. Defaults to false.
   */
  enableVideoTitle?: boolean
}
