import * as React from "react";

function SvgPbIconPantoneBookAbs({ title, titleId, ...props }) {
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
      <g data-name="Color Swatches" fill="#606060">
        <path d="M255.1 106.9a17.5 17.5 0 00-5-12.6l-42.2-43.6c-9-9.6-22.6-5.1-29.9 4.3 5.9-12.4 10.2-27.5-5.7-34.4L121.7 1.1a17.7 17.7 0 00-21.9 8C95.5 4.9 41.2 7.8 35 7a20.1 20.1 0 00-20.1 20.1v222.3A20.2 20.2 0 0035 269.5h55.8a20.2 20.2 0 0019.7-16 1.6 1.6 0 00.9-.5l38.4-37.1a1.9 1.9 0 001.2-1.1c.2-.3 74.2-71.7 74.4-71.9 6.1-7.6 30.9-24.7 29.7-36zM120.3 4.6c67 29 70.5 9 42.7 78.8l-52.1-20V27.1a20.2 20.2 0 00-7.9-16 14 14 0 0117.3-6.5zm64.6 172.1l-38.5-39.8L165.6 87c.1-.1.2-.1.2-.2l55.4 54.8zm-35.7 34.6l-22.4-23.8 2.4-6.2a1.7 1.7 0 001-2.6l14.7-37.9 37.3 38.5zM126.8 177l-15.9-5.3v-49.6l32.6 11.7zm18.1-46.7l-34-12.2V67.5L161.6 87zm-34 45.4l14.5 4.9-2.3 6a2.1 2.1 0 00-.5 1.2l-11.7 30.3zm-20.1 90H35a16.3 16.3 0 01-16.3-16.3V27.1A16.3 16.3 0 0135 10.8c5.9.7 60.3-2.2 64.1 2.3a1.5 1.5 0 001 .6 16.1 16.1 0 017 13.4V228a3.4 3.4 0 000 1c-.1 13.6 3.8 36.2-16.3 36.7zm20.1-17.5v-19.6l14.4-37.2 21.1 22.5zm113-109.2c-.5-.4-56.1-55.9-56.7-56.1l7.6-19.5c7.9-7.9 19.1-21.4 30.4-10.1L247.4 97c5.3 5.2 5.1 14.5-.3 19.6z" />
        <path d="M64.1 216.2c-19.1.1-19.1 29.3 0 29.4s19.2-29.3 0-29.4zm0 25.6c-14.1.2-14.1-22 0-21.8s14.1 22 0 21.8z" />
      </g>
    </svg>
  );
}

export default SvgPbIconPantoneBookAbs;
