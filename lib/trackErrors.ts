// trackErrors.ts
import { usePlausible } from 'next-plausible'

/**
 * Enumerates the different categories of custom Plausible errors you might track.
 * For example: 'video-error', 'form-error', 'onboarding-error', etc.
 */
export type ErrorCategory =
  | 'video-error'
  | 'form-error'
  | 'api-error'
  | 'site-error'
  | 'component-error'

// Optional: Define stricter types for `info` based on `category`
interface VideoErrorInfo {
  videoUrl: string
  message?: string
}
interface FormErrorInfo {
  formId: string
  errorDetails?: string
}
interface ComponentError {
  component: string
  errorDetails?: string
}
interface GeneralErrorInfo {
  [key: string]: unknown
}

// Union of all possible info types
type ErrorInfo = VideoErrorInfo | FormErrorInfo | GeneralErrorInfo | ComponentError

// List of valid categories for runtime validation
const validCategories: ErrorCategory[] = [
  'video-error',
  'form-error',
  'api-error',
  'site-error',
  'component-error',
]

/**
 * This hook returns a function, trackError, which lets you
 * send a custom event to Plausible with a structured category and errorName.
 */
export function useTrackError() {
  const plausible = usePlausible()

  /**
   * Sends a Plausible event for the specified error category and details.
   * Tracks both the specific category and an overarching `site-errors` category.
   *
   * @param category  Specific error category (e.g., 'video-error', 'form-error').
   * @param errorName Descriptive short name for the error (e.g., 'video-failed-to-load').
   * @param info      Optional additional context (e.g., file name, user ID).
   */
  function trackError(category: ErrorCategory, errorName: string, info?: ErrorInfo) {
    if (!validCategories.includes(category)) {
      console.warn(`Invalid error category: ${category}. Defaulting to 'site-error'.`)
      category = 'site-error'
    }

    // Track the error under the specific category
    plausible(category, {
      props: {
        errorName,
        ...info,
      },
    })

    // Track the error under the overarching `site-errors` category
    plausible('site-errors', {
      props: {
        category,
        errorName,
        ...info,
      },
    })
  }

  return { trackError }
}

/**
 * 
 * Example Usage – Form Error
 * 
import { useTrackError } from '@lib/trackErrors'
function MyForm() {
  const { trackError } = useTrackError()

  async function handleSubmit() {
    try {
      // ...some fetch or API call...
    } catch (err) {
      trackError('form-error', 'submission-failed', {
        formId: 'contact-form',
        errorDetails: String(err),
      })
    }
  }

  return <button onClick={handleSubmit}>Submit</button>
}
 */

/**
 * Example Usage – Video Error
 * 
import { useTrackError } from '@lib/trackErrors'

function Video() {
  const { trackError } = useTrackError()

  function handleVideoError(err: any) {
    trackError('video-error', 'video-load-failed', {
      videoUrl: 'https://mysite.com/video.mp4',
      message: String(err),
    })
  }

  return (
    <ReactPlayer
      url="https://mysite.com/video.mp4"
      onError={handleVideoError}
    />
  )
}
 */
