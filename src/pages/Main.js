import React, { useEffect, useState } from "react";
import ListItem from "./components/ListItem";

export default function Main() {
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getImages = async () => {
      const res = await fetch("https://picsum.photos/v2/list");
      const list = await res.json();
      setImages(list);
      setLoading(false);
    };
    getImages();
  }, []);

  function isSelected(imgSrc) {
    return selected.some((s) => s === imgSrc);
  }

  function select(imgSrc) {
    if (isSelected(imgSrc)) {
      setSelected((s) => s.filter((f) => f !== imgSrc));
    } else {
      setSelected((s) => [...s, imgSrc]);
    }
  }

  return (
    <div className="flex justify-center h-screen p-10">
      {loading ? (
        <div className="flex items-center">
          <span className="text-xl font-thin">Loading...</span>
        </div>
      ) : (
        <div className="w-3/4 border overflow-y-auto">
          <div className="flex flex-wrap lg:block">
            {images.map((img, i) => (
              <ListItem
                key={i}
                imgSrc={img.download_url}
                title={img.author}
                dimensions={{ width: img.width, height: img.height }}
                onSelect={select}
                selected={isSelected(img.download_url)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
