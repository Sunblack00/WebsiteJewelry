import React from "react";

export default function CollectionSection() {
  return (
    <div
      className="grid grid-cols-3 gap-8 m-auto my-20"
      style={{ width: "70%" }}
    >
      <div className="border border-gray-300 relative cursor-pointer group">
        <img
          src="../images/home/ring.png"
          alt=""
          className="w-full object-cover group-hover:opacity-60 duration-300"
        />
        <p
          style={{ fontFamily: "Allura, cursive" }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-5xl tracking-widest font-bold text-black absolute bottom-1/9 left-1/2 transform -translate-x-1/2"
        >
          Ring
        </p>
      </div>
      <div className="border border-gray-300 relative cursor-pointer group">
        <img
          src="../images/home/necklace.png"
          alt=""
          className="w-full group-hover:opacity-60 duration-300"
        />
        <p
          style={{ fontFamily: "Allura, cursive" }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-5xl tracking-widest font-bold text-black absolute bottom-1/9 left-1/2 transform -translate-x-1/2"
        >
          Necklace
        </p>
      </div>
      <div className="border border-gray-300 relative cursor-pointer group">
        <img
          src="../images/home/bracelet.png"
          alt=""
          className=" w-full group-hover:opacity-60 duration-300"
        />
        <p
          style={{ fontFamily: "Allura, cursive" }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-5xl tracking-widest font-bold text-black absolute bottom-1/9 left-1/2 transform -translate-x-1/2"
        >
          Bracelet
        </p>
      </div>
    </div>
  );
}
