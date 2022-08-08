export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
//pulled from https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics

//morganfeeney.com/how-to/integrate-google-tag-manager-with-next-js
export const gtmVirtualPageView = (rest) => {
  window.dataLayer?.push({
    event: 'VirtualPageView',
    ...rest,
  })
}

export const sendToGoogleAnalytics = ({ name, delta, value, id }) => {
  // Assumes the global `gtag()` function exists, see:
  // https://developers.google.com/analytics/devguides/collection/ga4
  window.gtag('event', name, {
    // Built-in params:
    value: delta, // Use `delta` so the value can be summed.
    // Custom params:
    metric_id: id, // Needed to aggregate events.
    metric_value: value, // Optional.
    metric_delta: delta, // Optional.

    // OPTIONAL: any additional params or debug info here.
    // See: https://web.dev/debug-web-vitals-in-the-field/
    // metric_rating: 'good' | 'ni' | 'poor',
    // debug_info: '...',
    // ...
  })
}
