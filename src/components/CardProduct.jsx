import React from "react";
import { NavLink } from "react-router-dom";

export default function CardProduct({ item }) {
  return (
    <NavLink to={`/collection/${item.type.toLowerCase()}/${item.id}`}>
      <div
        className=" cursor-pointer group relative overflow-hidden "
        style={{ boxShadow: "0px 0px 15px #0000001a" }}
      >
        <img
          src={`../${item.images[0]}`}
          alt=""
          className="w-full h-full aspect-[3/4] transition-opacity duration-300 group-hover:opacity-0"
        />

        <img
          src={`../${item.images[1]}`}
          alt=""
          className="w-full h-full object-contain absolute top-0 left-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100"
        />
      </div>

      <div className="text-center mt-5">
        <p className="font-semibold hover:opacity-50 cursor-pointer">
          {item.name}
        </p>
        <p className="mt-2 text-3xl" style={{ fontFamily: "Allura, cursive" }}>
          $ {item.variants[0].price}
        </p>
      </div>
    </NavLink>
  );
}
