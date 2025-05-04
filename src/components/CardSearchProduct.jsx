import React from "react";
import { NavLink } from "react-router-dom";

export default function CardSearchProduct({ item, closeSearchModal}) {
  return (
    <NavLink
      to={`/collection/${item.type.toLowerCase()}/${item.id}`}
      className="flex flex-col items-center justify-center cursor-pointer"
      onClick={closeSearchModal}
    >
      <img className="h-[80%]" src={item.images[0]} alt="" />
      <div className="bg-white p-6 w-full max-w-md">
        <div className="text-center">
          <p className="text-2xl hover:opacity-50 cursor-pointer text-gray-600">
            {item.name}
          </p>
          <p
            className="mt-2 text-3xl"
            style={{ fontFamily: "Allura, cursive" }}
          >
            $ {item.variants[0].price}
          </p>
        </div>
      </div>
    </NavLink>
  );
}
