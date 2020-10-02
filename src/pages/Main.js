import React, { useEffect, useState } from "react";
import Split from "react-split";
import ListItem from "./components/ListItem";

export default function Main() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const res = await fetch("https://picsum.photos/v2/list").then((res) =>
        res.json()
      );
      setImages(res);
    };
    getImages();
  }, []);

  const panel = (
    <div>
      {images.map((img, i) => (
        <ListItem
          key={i}
          imgSrc={img.download_url}
          title={img.author}
          dimensions={{ width: img.width, height: img.height }}
        />
      ))}
    </div>
  );

  return (
    <div className="flex justify-center max-h-screen p-10">
      <Split
        className="w-3/4 border overflow-y-auto flex"
        sizes={[50, 50]}
        gutter={(index, direction, pairElement) => {
          const gutter = document.createElement("div");
          gutter.className = `
            gutter
            gutter-${direction}
            flex
            items-center
            justify-center
            border-l
            border-r
            cursor-col-resize
          `;
          const gutterDot = document.createElement("div");
          gutterDot.className = "w-2 h-2 rounded-full bg-gray-300"
          gutter.appendChild(gutterDot)
          return gutter;
        }}
        gutterSize={12}
      >
        {panel}
        {panel}
      </Split>
    </div>
  );
}
