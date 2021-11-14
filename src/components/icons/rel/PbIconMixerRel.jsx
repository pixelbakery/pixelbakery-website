import * as React from "react";

function SvgPbIconMixerRel({ title, titleId, ...props }) {
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
        d="M84.1 112.4a.5.5 0 00-.6.1l-1.6 2.5c-.1.2-.1.5.1.6a.5.5 0 00.6-.1l1.6-2.5a.4.4 0 00-.1-.6zM76.2 105.2a.5.5 0 00-.6.1l-1.5 2.4c-.2.2-.1.4.1.6a.4.4 0 00.5-.1l1.6-2.4c.1-.2.1-.5-.1-.6zM160.3 69.8c-4.5-10-19.1-10.7-24.7-1.3l-2.2 3.6a8.4 8.4 0 00.7 9.8l20.3 26.1a7.1 7.1 0 0012.5-4.1 70.4 70.4 0 00-6.6-34.1zm5.8 34.1c-.2 5.5-7.7 7.9-11.1 3.6l-20.2-26.1a7.5 7.5 0 01-.7-8.8l2.2-3.6a13 13 0 0112.1-6.3 12.8 12.8 0 0111.2 7.5 71.1 71.1 0 016.5 33.7zM155.6 123.2L85.8 77.8a.6.6 0 00-.8.1.5.5 0 00.2.8l69.8 45.4c.6.4 1.3-.5.6-.9zM90 72.9l17.7 11.6c.4.3.9-.4.4-.7L90.4 72.2c-.4-.2-.9.5-.4.7zM91.7 70.8l17.5 11.4c.4.3.9-.4.4-.7L92.1 70.1c-.4-.3-.9.4-.4.7zM93.5 68.7l17.2 11.2h.2c.4.1.6-.5.2-.7L93.9 68c-.4-.3-.9.4-.4.7zM95.3 66.6l16.6 10.8h.3c.4 0 .5-.5.2-.8L95.7 65.9c-.4-.3-.9.4-.4.7z"
        fill="currentColor"
      />
      <path
        d="M180.2 162.9c3.3-.7 5.7 1.5 9 4.6s6.4 5.8 11.6 8.1 15.6 5.1 19.8.5c5.2-6.2-1.3-18.2-6.7-27.4-9.9-16-26.6-27.4-41.6-34.8 25.4-55.1-47.4-103.7-84.5-52.2l-7.6 11.8a10.4 10.4 0 003 14.4l2.2 1.4L77 102a2.6 2.6 0 00-2.3 1.1l-2.8 4.3-1.8-1.2a1.9 1.9 0 00-2.5.3l-17.6 20a10.4 10.4 0 00.6 14.2c.2.5.9.9 1.3 1.2s1 .7 1.6.7l.4.2a11.2 11.2 0 003.3 6.9c.2.5 1 .9 1.4 1.2a3 3 0 001.6.8 10.9 10.9 0 0014.1-5.1l12.1-25.2a1.8 1.8 0 00-.7-2.5l-1.9-1.3 3-4.4a2.9 2.9 0 00.1-2.7l9.4-14.1 53.5 34.7a9.5 9.5 0 007.5 1.4 10 10 0 006.3-4.3c2.1-3.3 6.8-10 8.4-13.5 14.8 7.3 31.4 18.6 41.2 34.4 8 13.2 10.4 22.6 6.8 26.5s-13.3 1.6-18.9-.8-8.5-5.4-11.3-7.9-6.1-5.6-9.8-4.8a8.5 8.5 0 00-5.6 4.5c-3.8 7.9 8.8 21.3 18.4 25.6s22.4 15.8 21.6 31.4c-3.9 10.4-18.2 5.2-30.4-4.6h-.2c-4.9-2.4-12.4-1.5-16.1.7a4 4 0 00-4.5-1.3 1.1 1.1 0 00-1.2-.3c-.4.2-1 .4-1.1.9s.6 1.9.8 2.5l-1.5.6a.4.4 0 00.4.8l1.4-.6c0-.1 0-.1.1-.1l.8 1.7-2.1.9a.4.4 0 00.4.8l2-.9c.4.6.8 2.2 1.4 2.3s1-.2 1.4-.3a.9.9 0 00.5-1.2 4 4 0 001.6-5.1c3.8-2.2 12.6-3.3 16.8.4 12.5 9.5 26.3 13.8 30.3 3v-.2c.8-15.9-12.9-27.8-22-32.1a45.7 45.7 0 01-9.7-6.6c-8.7-8-13.2-18.6-3.3-22zM86.1 89.8l.6.4-8.3 12.5-.6-.4zm-1.2 19.4a2.5 2.5 0 00-2.4 1.1l-3 4.5-1.1-.8a1.9 1.9 0 00-.6-2.7l-1.8-1.2 2.8-4.2a2.5 2.5 0 00.2-2.5l8.4-12.8 6.8 4.4zm.7 1.1l.3.2c-.2.3-.5 1.2-1 .9s.2-1 .3-1.3a.5.5 0 01.4.2zm-7.3 10.1c-1.7 1.5-3.5 3-5.2 4.7l4.9-10.3 1.7 1.1c-.5 1.5-1 3-1.4 4.5zm2.1-4l1.5.9-2.4 2.1q.4-1.6.9-3zM58 142.7l-2.7-.3c4.5-1.3 9-10 12.6-19.3l7.7-8.7a1.2 1.2 0 011.7-.1l-5.9 12.3c-5.7 5.4-11 11.3-13.4 16.1zm12.4-13.9l-4.2 8.6a9.3 9.3 0 01-7.2 5.2q2.9-5.5 11.4-13.8zm4.5-18.5l2.5 1.7a1.2 1.2 0 01.3 1.6 1.9 1.9 0 00-2.7.2l-6.2 7.1 2.6-7.6zm-3 1.4l.9-2.8 1.3 1zm5-8l.5-.7.6.4-.5.6c-.2.4-.9 0-.6-.3zm-1.5-.1a1.4 1.4 0 011-.7 1.2 1.2 0 102 1.3 1.3 1.3 0 01-.3 1.2l-2.6 4.1-2.8-1.9zm-25.2 35.3a9.5 9.5 0 01.4-11.9l17.6-19.9a1 1 0 011.4-.2l2.4 1.6c-.4 1.5-.9 2.9-1.3 4.3-9.5 8.2-21.2 19.7-20.5 26.1zm3.7 2.8h-.6a9.1 9.1 0 01-1.6-1.1c-3-4.6 4.2-13.4 18.5-26.2q-1.5 4.5-3 8.4l-10.6 12a11 11 0 00-2.7 6.9zm3.3-6.3l9.1-10.4c-4.2 10.2-8.2 16-11.6 16.6a10.1 10.1 0 012.5-6.2zm-.5 12.5a10.6 10.6 0 01-1.9-4.8 9 9 0 002.8.4 9.4 9.4 0 00-.9 4.4zm3.9 2.9l-.6-.2-1.7-1.1c-1.2-1.6-.9-3.4.2-6a10.5 10.5 0 008.5-5.8l5.1-10.6c1.7-1.6 3.6-3.4 5.7-5.2-6.2 18.9-12.4 29.4-17.2 28.9zm24.7-31.2a1.1 1.1 0 01.4 1.5l-12.1 25.1a10.1 10.1 0 01-11.6 5.3c6.5-1.8 12.9-18 17-30.6l3.6-3.1zm.8-6.9l-2.8 4.3-3-2 2.8-4.2a1.6 1.6 0 011.2-.8c-1.4 1.7 1 3.3 2 1.4a1.5 1.5 0 01-.2 1.3zm.3-2.9l-.7-.4 9.2-13.9.7.4zm82 9.5l-5.5 8.4a9.1 9.1 0 01-12.7 2.7L83.7 87.2a9.6 9.6 0 01-2.8-13.3l7.6-11.7a46.9 46.9 0 0164.8-13.8 51.3 51.3 0 0115.1 70.9zm-2.7 106.6l-.6.3h-.3l-3.1-6.7h-.1c0-.1.7-.4.7-.4s.2 0 .3.1l3.1 6.7c.1-.2 0 0 0 0zm.5-1.2l-2.6-5.6a3.1 3.1 0 012.6 5.6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPbIconMixerRel;
