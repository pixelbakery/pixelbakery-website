import * as React from "react";

function SvgPbIconCursorRel({ title, titleId, ...props }) {
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
        d="M134.6 153a1.2 1.2 0 001-.9l4.5-11.9a2.4 2.4 0 011.4-1.4l12.5-4.4a1.5 1.5 0 00.1-2.7l-33-16.8a1.4 1.4 0 00-1.4.1l-3.9 2.1a1.5 1.5 0 00-.6 1.9l13.8 35.3a1.6 1.6 0 001.9.9zm-1.4-.1l-2.7 1.6c-.3 0-.7-.1-.8-.4l-13.9-35.4a.7.7 0 01.3-.8l2.7-1.5a.6.6 0 00.1.4l13.8 35.4a1.8 1.8 0 00.5.7zm20.4-19.2l-12.5 4.4a3.4 3.4 0 00-2 1.9l-4.4 11.9a.6.6 0 01-1.2 0l-13.9-35.4a.7.7 0 01.2-.7c.1 0 .2-.2.5-.2s32.9 16.8 33.3 16.9a.6.6 0 010 1.2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPbIconCursorRel;
