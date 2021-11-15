import * as React from "react";

function SvgPbIconSpatulaRel({ title, titleId, ...props }) {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 270 270"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M134.8 132.7l1 46.9a.5.5 0 00.7.3c.4-.2-1-46.9-.8-47.2s-.9-.5-.9 0zM133.2 186.4a3.2 3.2 0 103.1-3.3 3.3 3.3 0 00-3.1 3.3zm5.5-.1a2.4 2.4 0 01-4.7.1 2.4 2.4 0 014.7-.1z"
        fill="currentColor"
      />
      <path
        d="M131.9 77.5l-8.1.2a2.9 2.9 0 00-2.1.9 3 3 0 00-.8 2l.9 41a3 3 0 003 2.9l5.7-.2v62.4a5.9 5.9 0 005.9 5.8 5.8 5.8 0 005.7-6l-2.5-62.3 6.5-.2a3 3 0 002.9-2.9l-.6-27.7c.1-8.7-7.8-16.3-16.5-15.9zm9.4 109a5 5 0 01-8.4 3.8 5.3 5.3 0 01-1.5-3.6v-62.4h7.5zm6.3-93.1l.6 27.7a2 2 0 01-2 2.1l-21.5.4a2 2 0 01-2.1-2l-.8-41a2 2 0 01.6-1.5 2 2 0 011.4-.6l8.2-.2a15.5 15.5 0 0115.6 15.1z"
        fill="currentColor"
      />
      <path
        d="M136.7 80.8a.4.4 0 00-.4.8 16.1 16.1 0 018.4 13.8.5.5 0 00.7.3c.4-6.1-3.5-12-8.7-14.9z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPbIconSpatulaRel;
