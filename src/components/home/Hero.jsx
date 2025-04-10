import React from "react";

export default function Hero() {
  return (
    <div className="grid grid-cols-2">
      <div className="relative h-[450px]">
        <img
          src="../images/home/hero1.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p
            style={{ fontFamily: "Allura, cursive" }}
            className="text-5xl md:text-7xl lg:text-9xl font-bold text-white"
          >
            Collection
          </p>
          <button className="px-10 py-3 text-2xs bg-white uppercase tracking-widest font-semibold hover:bg-transparent hover:text-white duration-300 border border-white">
            Shop now
          </button>
        </div>
      </div>

      <div className="relative h-[450px]">
        <img
          src="../images/home/hero2.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p
            style={{ fontFamily: "Allura, cursive" }}
            className="text-5xl md:text-7xl lg:text-9xl font-bold text-white"
          >
            Product
          </p>
          <button className="px-10 py-3 text-2xs bg-white uppercase tracking-widest font-semibold hover:bg-transparent hover:text-white duration-300 border border-white">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
}
