import * as React from "react";

function SvgPbIconPencilRel({ title, titleId, ...props }) {
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
        d="M136.4 198.8c.3-2.2 2.4-11.5 2.3-13.5V73.7a3.3 3.3 0 00-1.1-2.6 3.7 3.7 0 00-6.3 2.6v111.7a11.8 11.8 0 00.2 2.6l2 10.8a1.5 1.5 0 002.9 0zM135 71.1a2.6 2.6 0 012.6 2.6v7.4h-5.2v-7.4a2.6 2.6 0 012.6-2.6zm2.6 11.1v3.3h-5.2v-3.3zm-5.2 103.2V86.6h5.2v98.7c.1 1.8-.9 5.5-1.1 7.3h-3c-.3-1.7-1.2-5.5-1.1-7.2zm2.5 13.5c-.1 0-.3 0-.3-.3l-.9-4.9h2.5l-.9 4.9a.4.4 0 01-.4.3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPbIconPencilRel;
