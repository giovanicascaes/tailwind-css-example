import React, { useRef } from "react";

export default function ListItem({
  imgSrc,
  title,
  dimensions: { width, height },
}) {
  const photo = useRef(null);
  const photoOverlay = useRef(null);

  function select() {
    photo.current.classList.add("transition");
    photo.current.classList.add("duration-200");
    photo.current.classList.add("ease-in-out");
    photo.current.classList.add("transform");
    photo.current.classList.add("-translate-y-1");
    photo.current.classList.add("scale-125");
    photoOverlay.current.classList.remove("hover:bg-opacity-75");
    photoOverlay.current.classList.remove("hover:text-opacity-100");
    photoOverlay.current.classList.remove("hover:cursor-pointer");
    photoOverlay.current.classList.remove("hover:text-shadow-xl");
    photoOverlay.current.classList.add("bg-opacity-75");
    photoOverlay.current.classList.add("text-opacity-100");
    photoOverlay.current.classList.add("cursor-pointer");
    photoOverlay.current.classList.add("text-shadow-xl");
    photoOverlay.current.classList.remove("bg-blue-500");
    photoOverlay.current.classList.add("bg-green-500");
    photoOverlay.current.innerHTML = "Selected";
  }

  return (
    <div
      className={`
        flex
        flex-col
        flex-1
        bg-white
        p-6
        items-center
        md:flex-row
        md:border-b
        md:items-start
      `}
    >
      <div
        className="w-24 border shadow mb-6 md:mb-0 md:mr-6 relative"
        ref={photo}
        onClick={select}
      >
        <img
          className="h-24 w-full border-4 border-white"
          src={imgSrc}
          alt="thumb"
        />
        <div
          className={`
          absolute
          top-0
          w-full
          h-full
          bg-blue-500
          bg-opacity-0
          text-opacity-0
          flex
          items-center
          justify-center
          text-xs
          text-white
          font-bold
          uppercase
          hover:bg-opacity-75
          hover:text-opacity-100
          hover:cursor-pointer
          hover:text-shadow-xl
          transition
          duration-200
          ease-in-out
        `}
          ref={photoOverlay}
        >
          Select
        </div>
      </div>
      <div className="items-center text-center md:items-start md:text-left">
        <h2 className="text-lg font-thin">{title}</h2>
        <div className="text-sm text-purple-500 flex items-center">
          <span>{width}</span>
          <span className="font-semibold">px</span>&nbsp;
          <span className="text-xs">&nbsp;/&nbsp;</span>
          &nbsp;
          <span>{height}</span>
          <span className="font-semibold">px</span>
        </div>
        <div className="mt-2">
          <a className="btn-link" href={imgSrc}>
            View
          </a>
        </div>
      </div>
    </div>
  );
}
