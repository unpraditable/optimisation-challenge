"use client";

import { useState } from "react";

export default function ImageCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  function prev() {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }

  function next() {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }
  return (
    <div>
      <div className="relative w-full h-[400px]">
        <img
          src={images[index]}
          alt=""
          className="w-[500px] h-[400px] mx-auto object-cover"
        />
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 px-3 py-1 rounded text-xl font-bold cursor-pointer"
        >
          {"<"}
        </button>

        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2px-3 py-1 rounded text-xl font-bold cursor-pointer"
        >
          {">"}
        </button>
      </div>

      <div className="flex gap-2 mt-2 justify-center">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className={`w-16 h-16 object-cover cursor-pointer border ${i === index ? "border-black" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
