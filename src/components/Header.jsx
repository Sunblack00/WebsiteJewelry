import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/lolgo.png";
import { GoPerson } from "react-icons/go";
import { BiSearchAlt } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function Header() {
  return (
    <div className="md:container mx-auto flex items-center justify-between py-4">
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>

      <ul className="flex space-x-16 text-sm font-medium">
        <li className="relative group">
          <span className="hover:text-[#EFE0E5] cursor-pointer">
            <Link to={"/"}>HOME</Link>
          </span>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#EFE0E5] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <span className="hover:text-[#EFE0E5] cursor-pointer">
            <Link to={"/product"}>PRODUCT</Link>
          </span>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#EFE0E5] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <span className="hover:text-[#EFE0E5] cursor-pointer">
            <Link to={"/"}>COLLECTIONS</Link>
          </span>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#EFE0E5] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <span className="hover:text-[#EFE0E5] cursor-pointer">
            <Link to={"/blog"}>BLOG</Link>
          </span>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#EFE0E5] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <span className="hover:text-[#EFE0E5] cursor-pointer">
            <Link to={"/contact"}>CONTACT US</Link>
          </span>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#EFE0E5] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <span className="hover:text-[#EFE0E5] cursor-pointer">
            <Link to={"/about"}>ABOUT US</Link>
          </span>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#EFE0E5] transition-all duration-300 group-hover:w-full"></span>
        </li>
      </ul>

      <div className="flex items-center space-x-8">
        <Link to={"/account"}>
          <GoPerson
            size={"25px"}
            className=" hover:opacity-25 transition-all duration-500"
          />
        </Link>
        <BiSearchAlt
          size={"25px"}
          className=" hover:opacity-25 transition-all duration-500"
        />
        <div className="flex items-center space-x-2 hover:opacity-25 transition-all duration-500">
          <HiOutlineShoppingBag size={"25px"} />
          <div className="w-6 h-6 rounded-4xl bg-black text-white text-center">
            0
          </div>
        </div>
      </div>
    </div>
  );
}
