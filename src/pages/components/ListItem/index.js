import React from "react";

export default function ListItem({
  imgSrc,
  title,
  dimensions: { width, height },
}) {
  return (
    <div className={`
      flex
      flex-col
      flex-1
      bg-white
      p-6
      items-center
      md:flex-row
      md:border-b
      md:items-start
    `}>
      <div className="w-24 border shadow mb-6 md:mb-0 md:mr-6">
        <img
          className="h-24 w-full border-4 border-white"
          src={imgSrc}
          alt="thumb"
        />
      </div>
      <div className="items-center text-center md:items-start md:text-start">
        <h2 className="text-lg font-thin">{title}</h2>
        <div className="text-sm text-purple-500">
          {width} / {height} px
        </div>
      </div>
    </div>
  );
}
