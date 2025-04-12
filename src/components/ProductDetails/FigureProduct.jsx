import React, { useState } from "react";
import { FaMinus, FaPlus, FaAngleRight, FaAngleLeft } from "react-icons/fa";
export default function FigureProduct({ images }) {
  const [selectedImg, setSelectedImg] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  // Phuong thuc de chuyen / chon anh
  function handleNext() {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImg(images[newIndex]);
  }
  function handlePrev() {
    const newIndex = currentIndex === 0 ? currentIndex + 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImg(images[newIndex]);
  }
  function handleSelect(img, index) {
    setSelectedImg(img);
    setCurrentIndex(index);
  }
  return (
    <figure className="col-span-3">
      <div className="relative w-[80%] mx-auto">
        <img
          src={selectedImg}
          alt=""
          className="border border-stone-400 object-cover rounded-md h-[600px] w-full transition-all duration-600 shadow"
        />
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white p-2 rounded-full shadow"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white p-2 rounded-full shadow"
        >
          <FaAngleRight />
        </button>
      </div>

      <div className="mt-5 flex justify-center">
        <div className="flex gap-5 w-[80%] justify-center">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              onClick={() => handleSelect(img, index)}
              className={`h-[6rem] object-cover border border-stone-400 cursor-pointer rounded ${
                selectedImg === img ? "opacity-100 border-black" : "opacity-60"
              } hover:opacity-100 transition`}
            />
          ))}
        </div>
      </div>
    </figure>
  );
}
