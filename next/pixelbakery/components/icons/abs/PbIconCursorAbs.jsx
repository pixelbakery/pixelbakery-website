import * as React from "react";

function SvgPbIconCursorAbs({ title, titleId, ...props }) {
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
        d="M132.6 255.2a10 10 0 006.7-6.1l29.4-79.3a15.6 15.6 0 019.5-9.3l83.2-29.5c8.2-2.5 9-14.7 1.2-18.3L42.1 1a9.8 9.8 0 00-9.4.4L6.9 15.9a10 10 0 00-4.2 12.3l92.4 235.6c1.8 5 7.7 7.4 12.8 5.6.3-.3 24.4-13.9 24.7-14.2zm-9.3-1.1l-18.5 10.6a4.3 4.3 0 01-5.4-2.6L7 26.5a4.3 4.3 0 011.8-5.4l18-10.3a9.1 9.1 0 00.6 3.2l92.4 235.6a10.4 10.4 0 003.5 4.5zm135.4-127.9l-83.2 29.4a21.2 21.2 0 00-12.8 12.7l-29.4 79.2a4.5 4.5 0 01-4.2 2.9 4 4 0 01-4.1-2.8L32.6 12a4.6 4.6 0 011.1-5 5 5 0 013-1.1c3-.3 219.9 111.6 222.5 112.1s3.2 7.1-.5 8.2z"
        fill="#606060"
      />
    </svg>
  );
}

export default SvgPbIconCursorAbs;
