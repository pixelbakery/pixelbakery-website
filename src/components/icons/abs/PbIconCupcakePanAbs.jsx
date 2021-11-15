import * as React from "react";

function SvgPbIconCupcakePanAbs({ title, titleId, ...props }) {
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
        d="M268 190.3L202.5 41c-8.3-19-27.4-30.4-47.6-28.3L19.2 26.5C6.6 27.6-2.5 41.2.6 53.4l39 171.5c4.5 19.5 21.1 32.7 39.8 32.7a39.1 39.1 0 008.3-.9l164.4-34.4c13.8-2.6 21.9-19.4 15.9-32zm-16.3 30.4L87.4 255.1c-21 4.4-41.3-9-46.2-30.6L2.2 53.1c-2.9-11.3 5.5-24 17.2-25l135.7-13.8c19.4-2 37.9 9 45.9 27.4l65.5 149.2a22 22 0 01-.6 18.9 20.9 20.9 0 01-14.2 10.9z"
        fill="#606060"
      />
      <path
        d="M106.2 190.5a34.5 34.5 0 00-22.4-5.9c-23 1.3-38 25.2-23.2 42 .1.1.1.1.1.2 11.2 13.2 36.1 13.4 48.3.8a23.5 23.5 0 00-2.8-37.1zm-44.1 35.3a13 13 0 01-.3-4.8c4.3-22 47.7-15.3 44 7.2-11.9 10.2-33.9 9.1-43.7-2.4zm45.6.8c.8-11-10.6-19.1-21.3-20.5s-26.8 4.4-26.3 17.2c-11.8-17.2 5.5-37.7 26.5-37.2s38.9 23 21.1 40.5zM176.3 181.2a32.9 32.9 0 00-21.7-5.7c-22.2 1.3-36.7 24.4-22.4 40.7a.1.1 0 00.1.1c16.8 19.2 55.7 8.3 54.2-17.8-.5-6.8-4.1-12.9-10.2-17.3zm-42.6 34.2a12.6 12.6 0 01-.3-4.7c1.2-8.7 11.8-14.4 23.5-12.8s21 10.5 19 19.7c-11.4 9.8-32.7 8.9-42.2-2.2zm44.1.6c.6-9.2-8.4-18-20.6-19.7s-25.8 5.3-25.5 16.5c-11.2-16.5 5.4-36.3 25.7-35.8s37.4 22.2 20.4 39zM228 167.1c-20.3-2.4-37.2 16.2-26.8 33.4h.1c11.6 19.7 49 17.1 52.1-7.6 1.2-12.7-10.1-24.3-25.4-25.8zM202.8 200a12.4 12.4 0 01.5-4.3c2.5-7.6 12.9-11.1 23.3-7.8s17.7 11.8 14 20.8c-12 6.9-30.4 3.2-37.8-8.7zm39.9 7.4c4-22-37-31.8-41.4-10.3-7-15.8 9.4-30.5 26.6-28.4 21.8 1.8 33.1 26.1 14.8 38.7zM73.8 177.1c37.9-4.3 34.3-49.8-3.7-48.2-21.3 1.2-35.1 23.2-21.4 38.8h.1c5.5 6.5 15.4 10.3 25 9.4zm-1.1-46.7c21.7-.3 35.2 21.8 19.5 37.1.7-22.5-43.1-26.7-44-3.1-10.6-15.8 5.3-34.5 24.5-34zm-22.5 36.5a11.1 11.1 0 01-.3-4.4c3.9-20.1 43.8-14.1 40.5 6.6-10.8 9.3-31.3 8.4-40.2-2.2z"
        fill="#606060"
      />
      <path
        d="M114.8 158.2c15.5 17.8 51.5 7.7 50.1-16.5-1-12.9-14.2-22.4-29.5-21.2-19.2.9-34.5 21.5-20.7 37.6zm1.4-.9a12.5 12.5 0 01-.2-4.3c4.3-20.1 42.6-12.7 39 6.4-10.4 9-30.2 8.1-38.8-2.1zM138 122c20.9-.3 33.9 21 18.9 35.7.5-8.5-7.8-16.5-19.1-18s-23.7 3.8-23.6 15c-10.5-16.1 6.5-33.3 23.8-32.7zM175.6 131.8a19 19 0 002.8 11.8c11.2 18.7 45.7 15.3 48.2-7 1.4-28.6-46.9-33.3-51-4.8zm4.4 11.3a10.4 10.4 0 01.4-3.9c6.5-16.9 40.3-5.6 34.3 11.9-10.8 6.3-28 3-34.7-8zm36.8 6.7a8.1 8.1 0 01-.7 2.2 8.1 8.1 0 00.7-2.2c3.7-19.4-33.5-29.7-38.3-9.5-6.3-14.6 8.8-27.9 24.5-26 20.1 1.7 30.4 23.9 13.8 35.5zM78.5 84.6a28.7 28.7 0 00-18.9-4.9c-19.3 1.1-31.9 21-19.4 35.3h.1c5 5.6 12.4 8.5 20.3 8.5 22.8.5 37-24.8 17.9-38.9zM62 81.2c18.5-.5 32.2 18.9 17.8 33.3-.1-20.9-39.4-23.3-40.1-2.8-9.2-14.3 5.1-30.9 22.3-30.5zm-20.3 33a9.1 9.1 0 01-.3-4c1.1-7.4 10.1-12.3 20.2-10.9s18.2 7.9 16.3 16.8c-9.7 8.2-27.6 8-36.2-1.9zM139.3 107c15.9-16.1-.4-37-20.5-34.9S88 92.5 100 106.2h.1c8.9 10.8 29.5 11 39.2.8zm-18.2-33.4c17.7-.5 31.1 18.1 17.2 32.1.4-7.7-7.1-14.8-17.3-16.2s-21.4 3.3-21.4 13.4c-8.9-13.7 4.9-29.7 21.5-29.3zm-19.6 31.9a10.3 10.3 0 01-.2-3.9c3.8-18.1 38.5-11.4 35.2 5.8-9.4 8.1-27.4 7.2-35-1.9zM155.1 82.4a17.1 17.1 0 002.6 10.7c10.1 17 41.5 13.9 43.8-6.3 1.1-26.6-43-29.8-46.4-4.4zm4.2 10.3a11 11 0 01.3-3.6c5.7-15.2 36.5-4.9 31 10.8-9.8 5.6-25.3 2.6-31.3-7.2zm33.4 5.8c2.9-17.5-30.2-26.6-34.9-8.7-5.4-13.1 8.2-24.9 22.3-23.2 16.9 1.2 27.9 20.7 12.6 31.9zM69.9 69.5c14.3-14.4-.4-33.4-18.5-31.5S23.7 56.4 34.5 68.8h.1c7.9 9.7 26.5 9.9 35.3.7zM36 68a7.8 7.8 0 01-.2-3.4c3-15.6 33.8-10.9 31.4 5.1-8.4 7.2-24.4 6.4-31.2-1.7zm-4.1-9.3c-1-10.2 9.7-19.3 21.6-19.2 15.6-.4 27.7 16 15.5 28.5-.1-17.2-33.3-20.5-34.9-2.5a13.7 13.7 0 01-2.2-6.8zM86.3 61.2h.1c12.2 14.2 40.7 6.2 39.6-13-.8-10.2-11.2-17.7-23.3-16.8-16.3.9-26.8 17.8-16.4 29.8zm1.5-.8a7.4 7.4 0 01-.2-3.3c2.3-14.4 32.5-11 30.3 4.9-7.9 6.9-23.6 6.3-30.1-1.6zM104.7 33c15.9-.3 26.3 15.9 15 27.4-.6-17.2-32.6-19.2-33.8-2.5-7.2-11.8 4.6-25.2 18.8-24.9zM140.9 50.1h.1c5.3 9.6 21.7 12.9 31 6 14.3-9.9 5.6-29.1-11.4-30.5-13.9-1.9-27.6 11.2-19.7 24.4zm1.6-.6a7 7 0 01.4-2.9c5-13 31-4.3 26.6 9.2-8.4 5-22.2 1.8-27-6.3zm17.9-22.3c15.2 1.2 23.6 18.1 11.1 27.2 2.2-15-26-22.9-30.3-7.6-4.6-11.6 8.1-21.2 19.2-19.6z"
        fill="#606060"
      />
      <path
        d="M60.5 66l-18.7-2.6a.8.8 0 00-.2 1.6l18.6 2.6c1.1.2 1.3-1.5.3-1.6zM58.1 69.5l-14.9-2a.8.8 0 00-1 .6 1 1 0 00.7 1l14.9 2a.8.8 0 00.3-1.6zM113.2 58.2l-18.6-2.6a.7.7 0 00-.9.7.8.8 0 00.7.9l18.6 2.6c1 .1 1.3-1.5.2-1.6zM110.8 61.7l-14.9-2.1c-.4-.1-.8.3-.9.7s.3.9.7.9l14.9 2.1a.8.8 0 00.2-1.6zM166 50.1l-18.6-2.6a.8.8 0 10-.2 1.6l18.6 2.6a.8.8 0 00.2-1.6zM163.6 53.6l-14.9-2c-1-.2-1.2 1.4-.2 1.6l14.9 2c1 .2 1.3-1.4.2-1.6zM70.5 112.2l-20.3-2.9a1 1 0 00-.9.7.8.8 0 00.7.9l20.3 2.9c1 .1 1.3-1.5.2-1.6zM67.9 116l-16.2-2.3a1 1 0 00-.9.7.7.7 0 00.7.9l16.2 2.3c1 .1 1.3-1.5.2-1.6zM129.6 104l-20.3-2.8c-.4-.1-.8.3-.9.7a.8.8 0 00.7.9l20.3 2.9a.9.9 0 00.2-1.7zM127 107.9l-16.2-2.3a.7.7 0 00-.9.7.7.7 0 00.7.9l16.2 2.3c1 .1 1.3-1.5.2-1.6zM185.6 93.4l-20.3-2.8a.8.8 0 10-.2 1.6l20.2 2.8c1.1.1 1.3-1.5.3-1.6zM183 97.2l-16.3-2.3c-1-.1-1.2 1.5-.2 1.6l16.2 2.3c1.1.2 1.3-1.5.3-1.6zM81.2 165.5l-21.8-3a.7.7 0 00-.9.6.8.8 0 00.6 1l21.9 3a.8.8 0 00.2-1.6zM78.4 169.6l-17.5-2.4a.8.8 0 00-.9.7 1 1 0 00.7.9l17.5 2.4c1 .2 1.2-1.5.2-1.6zM146.5 154.9l-21.8-3a.7.7 0 00-.9.7.8.8 0 00.7.9l21.8 3c1 .2 1.3-1.4.2-1.6zM143.7 159.1l-17.4-2.5a.8.8 0 00-.9.7.7.7 0 00.6.9l17.5 2.5c1 .1 1.3-1.5.2-1.6zM209.7 144l-21.8-3a.7.7 0 00-.9.6.8.8 0 00.7 1l21.8 3a.8.8 0 10.2-1.6zM206.9 148.1l-17.4-2.4a.8.8 0 10-.2 1.6l17.4 2.4a.8.8 0 00.2-1.6zM95.3 226l-23.7-3.3c-1-.1-1.2 1.5-.2 1.6l23.7 3.3a.8.8 0 10.2-1.6zM92.3 230.5l-19-2.6a.8.8 0 00-.9.7 1 1 0 00.7.9l19 2.6c1 .2 1.2-1.5.2-1.6zM166.1 214.6l-23.7-3.3c-.5-.1-.8.2-.9.7a.8.8 0 00.7.9l23.7 3.3c1 .1 1.3-1.5.2-1.6zM163.1 219l-19-2.6a.8.8 0 00-.9.7c-.1.4.3.8.7.9l18.9 2.6a.8.8 0 00.3-1.6zM234.8 201.1l-23.8-3.3a1 1 0 00-.9.7.8.8 0 00.7.9l23.7 3.3a.8.8 0 00.3-1.6zM231.7 205.6l-18.9-2.6a.8.8 0 00-.3 1.6l19 2.6c1 .2 1.2-1.5.2-1.6z"
        fill="#606060"
      />
    </svg>
  );
}

export default SvgPbIconCupcakePanAbs;
