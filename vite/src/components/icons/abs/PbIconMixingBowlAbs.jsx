import * as React from "react";

function SvgPbIconMixingBowlAbs({ title, titleId, ...props }) {
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
        d="M199.5 89.3L248.6 13c2.6-3.8.8-9.3-3.1-11.6s-9.6-1.6-11.8 2.4l-46 78.3a12.4 12.4 0 001.6 2.4l-32 33.2a726.1 726.1 0 00-125.9 6.7c-6.7.5-17.1 1.6-17.8 7.4a2.8 2.8 0 00-.1.9v24a4.3 4.3 0 004.1 4.4h.1c.9 31.3 13.6 60.7 35.6 80.3a9.9 9.9 0 013 7.2v9.2c0 2.9 2.1 5.2 4.6 5.2a411.9 411.9 0 00147.7.4 5 5 0 004.7-5.2c.3-4.7-1.2-13.1 3.1-16.3 22-19.6 34.9-48.9 36-80.1.1-.3.4-.3.7-.3a4.1 4.1 0 003.5-4.2v-24a4.7 4.7 0 00-.8-2.6c-1.8-3.1-7.2-5.2-13.7-5.3-18.4-2.7-37.1-4.8-55.6-6.2.1-.1 10.7-29.9 10.8-30.1a8.6 8.6 0 002.2.2zm-9.4-3.6c.1.2.3.3.5.5l-43.8 51.5h-6.9zm3.2 2.6h.3l-20.7 48.5-5.3.2c1.7-3.1 25.8-48.7 25.7-48.7zm-27.2 48.9h-.1l-8.6.3 32.1-44.8zm-10.4.3h-7.1L191.7 87h.1zM31.6 125.7A739.2 739.2 0 01156 119l-.5.6-17.5 18.1a767.4 767.4 0 01-120.1-9.2c3.2-2.1 9.6-2.2 13.7-2.8zm180.9 119.6c-1.1 2.8-.5 10.2-.6 13s-1.1 3.6-3.6 3.9a411.9 411.9 0 01-147.3-.4 3.7 3.7 0 01-3.4-3.9c-.2-2.9.5-10.6-.8-13.3h.3a564.2 564.2 0 00155.2.5h.3zm2.9-4.4a9 9 0 00-2.1 2.7 563.3 563.3 0 01-156.7-.4l-.6-.3c-21.9-20.7-36.5-49-37-81.5a777.4 777.4 0 00125.6 9.1h.4a783.2 783.2 0 00105.9-8.4c-1 30.8-13.9 59.6-35.5 78.8zM254.1 131l.4.3.3.5a5.6 5.6 0 01.4 1.2c.1.5-.1 23.9-.1 24.4a2.7 2.7 0 01-2.5 2.9 1.7 1.7 0 00-1 .3 771.3 771.3 0 01-233.5-.7l-.8-.2a2.7 2.7 0 01-2.5-3V132a2.8 2.8 0 012.4-2.2 774.1 774.1 0 00235.4.6 2.8 2.8 0 011.5.6zm-12-4.2a20.5 20.5 0 0110 2.3c-23.7 3.6-47.7 6-71.7 7.4l5.2-14.7.4-1.2c18.7 1.3 37.6 3.4 56.1 6.2zm-63.2 9.8l-4.5.2 20.5-48 .9.3zm13.5-51a8.3 8.3 0 01-1.7-1.5l-.4-.5a5.3 5.3 0 01-1-1.4l45.5-77.7c2-3.4 6.7-4 10-2s4.8 6.6 2.7 9.8l-48.7 75.6h-1.1l-.9-.2a10.8 10.8 0 01-4.4-2.1z"
        fill="#606060"
      />
    </svg>
  );
}

export default SvgPbIconMixingBowlAbs;
