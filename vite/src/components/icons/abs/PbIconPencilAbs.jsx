import * as React from "react";

function SvgPbIconPencilAbs({ title, titleId, ...props }) {
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
        d="M137.8 267.6c.8-4.6 5.2-23.9 5-28.1V7.7a7.8 7.8 0 00-2.3-5.5C135.9-2.6 127 1 127.2 7.7v231.9a31.9 31.9 0 00.5 5.4l4.2 22.5c.5 3.3 5.4 3.4 5.9.1zM135 2.3a5.5 5.5 0 015.5 5.4V23h-11V7.7a5.5 5.5 0 015.5-5.4zm5.5 23v6.9h-11v-6.9zm-11 214.3V34.5h11v205c.1 3.7-1.9 11.5-2.5 15.2h-6.2c-.5-3.7-2.4-11.5-2.3-15.1zm5.4 28.1a.7.7 0 01-.8-.6l-1.8-10.1h5.3l-2 10.1a.7.7 0 01-.7.6z"
        fill="#606060"
      />
    </svg>
  );
}

export default SvgPbIconPencilAbs;
