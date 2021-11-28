import * as React from "react";

function SvgPbIconCloudAbs({ title, titleId, ...props }) {
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
        d="M269.5 161.9c-3.4-21.9-23-38.1-45.1-37.8 14.2-48.5-36.9-92.2-82.2-68.4a61.4 61.4 0 00-35.4 33.8 38.6 38.6 0 00-33.7 4.1c-14.6 4-26.7 20.3-30.2 32.9-4 1.5-12 6.4-12 6.4l-.8.4-.5.3c-47.8 21.9-34.8 86.1 18.2 87.4h174.3c22.2 0 42.3-16 45.4-38a42.1 42.1 0 002-21.1zm-144-93.5a59 59 0 00-13.1 23.4l-3.2-1.4a58.9 58.9 0 0116.3-22zM66.2 99.6c-6.3 6.6-9.8 17-10.4 24a47.2 47.2 0 00-9.8 1.9c3-9 10.6-20.4 20.2-25.9zm155.9 118.8H47.8a49.2 49.2 0 01-17.7-3.2C-3.6 201.6-7 160 23.1 140c-20.8 22.4-11.1 57.9 17 68.5a50.4 50.4 0 0017.9 3.3h167.7a45 45 0 0035.8-17.8 44 44 0 01-39.4 24.4zm3.6-9.2H58a44.3 44.3 0 01-31-12.1c-21.7-20-13.4-54.2 12.2-66.3a47.5 47.5 0 0117.9-4.7 1.2 1.2 0 001.2-1.2c.2-7.8 5.6-22.8 16-29l1.2-.7c11.1-7 25.8-6.9 37.1-.3a1.3 1.3 0 001.9-.8c5.2-21.9 24.9-39.1 47.1-41.9 30.3-4.9 60.2 20.1 62.3 50.4.9 7.8-.4 15.5-2.5 23.1a1.3 1.3 0 001.3 1.1c23.7-1.5 45 18.1 44.7 41.9s-19.4 40.7-41.7 40.5z"
        fill="#606060"
      />
    </svg>
  );
}

export default SvgPbIconCloudAbs;
