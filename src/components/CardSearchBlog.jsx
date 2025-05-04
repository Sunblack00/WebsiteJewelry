import { i } from "framer-motion/client";
import React from "react";
import { NavLink } from "react-router-dom";

export default function CardSearchBlog({ item, closeSearchModal }) {
  return (
    <NavLink
      to={`/blog/${item.id}`}
      className="flex flex-col items-center justify-center cursor-pointer"
      onClick={closeSearchModal}
    >
      <img className="h-[80%] object-cover" src={item.img} alt="" />
      <div className="bg-white py-6 w-full max-w-md">
        <div className="text-center">
          <p className="text-md cursor-pointer text-gray-600">{item.date}</p>
          <p className="text-xl hover:opacity-50 cursor-pointer text-gray-600">
            {item.title}
          </p>
        </div>
      </div>
    </NavLink>
  );
}
