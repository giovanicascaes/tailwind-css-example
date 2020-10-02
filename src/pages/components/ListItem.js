import React from "react";

export default function ListItem({
  imgSrc,
  title,
  dimensions: { width, height },
}) {
  return (
    <div className="flex bg-white p-6 border-b">
      <div className="border shadow mx-0 mr-6">
        <img
          className="h-24 w-24 border-4 border-white"
          src={imgSrc}
          alt="thumb"
        />
      </div>
      <div className="text-left font-light">
        <h2 className="text-lg">{title}</h2>
        <div className="text-sm text-purple-500">
          {width}px x {height}px
        </div>
      </div>
    </div>
  );
}
