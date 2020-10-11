import React, { useEffect, useState } from "react";
import ListItem from "./components/ListItem";

export default function Main() {
  const [images, setImages] = useState([]);
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

  return (
    <div className="flex justify-center h-screen p-10">
      {loading ? (
        <div className="flex items-center">
          <span className="text-xl font-thin">Loading...</span>
        </div>
      ) : (
        <div className="w-3/4 border overflow-y-auto">
          <div className="flex flex-wrap md:block">
            {images.map((img, i) => (
              <ListItem
                key={i}
                imgSrc={img.download_url}
                title={img.author}
                dimensions={{ width: img.width, height: img.height }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
