import React from "react";

export default function CollectionSection() {
  return (
    <div className="grid grid-cols-3 gap-8 w-[1200px] m-auto my-20">
      <div className="border border-gray-300 relative cursor-pointer">
        <img
          src="../images/home/ring.png"
          alt=""
          className="w-full object-cover hover:opacity-60 duration-300"
        />
        <p
          style={{ fontFamily: "Allura, cursive" }}
          className="text-5xl tracking-widest font-bold text-black absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          Ring
        </p>
      </div>
      <div className="border border-gray-300 relative cursor-pointer">
        <img
          src="../images/home/necklace.png"
          alt=""
          className="w-full hover:opacity-60 duration-300"
        />
        <p
          style={{ fontFamily: "Allura, cursive" }}
          className="text-5xl tracking-widest font-bold text-black absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          Necklace
        </p>
      </div>
      <div className="border border-gray-300 relative cursor-pointer">
        <img
          src="../images/home/bracelet.png"
          alt=""
          className=" w-full hover:opacity-60 duration-300"
        />
        <p
          style={{ fontFamily: "Allura, cursive" }}
          className="text-5xl tracking-widest font-bold text-black absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          Bracelet
        </p>
      </div>
    </div>
  );
}
