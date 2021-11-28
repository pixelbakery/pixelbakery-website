import React from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/solid";

export default function ButtonFilled({ text, link, color, chevronColor }) {
  return (
    <input
      type='submit'
      className={
        "flex font-semibold  lowercase py-4 rounded-md px-6 border-2 bg-transparent text-lg text-center border-" +
        color
      }
    >
      <div className='flex-grow flex flex-col justify-center'>{text}</div>

      <i className='h-12 w-12 flex flex-col justify-center'>
        <ChevronRightIcon className={"text-opacity-50  text-" + chevronColor} />
      </i>
    </input>
  );
}
