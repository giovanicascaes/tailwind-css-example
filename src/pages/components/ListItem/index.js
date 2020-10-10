import React from "react";

export default function ListItem({
  imgSrc,
  title,
  dimensions: { width, height },
}) {
  return (
    <div className="flex bg-white p-6 border-b">
      <div className="border shadow mr-6">
        <img
          className="h-24 w-24 border-4 border-white"
          src={imgSrc}
          alt="thumb"
        />
      </div>
      <div className="text-left">
        <h2 className="text-lg font-thin">{title}</h2>
        <div className="text-sm text-purple-500">
          {width} / {height} px
        </div>
      </div>
    </div>
  );
}
