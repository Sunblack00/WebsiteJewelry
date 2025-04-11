import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/lolgo.png";
import { GoPerson } from "react-icons/go";
import { BiSearchAlt } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CartContext } from "../store/CartContext";

export default function Header() {
    const [activePath, setActivePath] = useState(null);
    const navItems = [
        { path: "/", label: "HOME" },
        { path: "/product", label: "PRODUCT" },
        { path: "/collections", label: "COLLECTIONS" },
        { path: "/blog", label: "BLOG" },
        { path: "/contact", label: "CONTACT US" },
        { path: "/about", label: "ABOUT US" },
    ];
    const { cartItems } = useContext(CartContext);
    const quantity = cartItems.length;
    return (
        <div className="sticky top-0 z-50 bg-white shadow-md">
            <div className="md:container mx-auto flex items-center justify-between py-4">
                <Link to={"/"}>
                    <img src={logo} alt="logo" />
                </Link>

                <ul className="flex space-x-16 text-sm font-medium">
                    {navItems.map((item) => (
                        <li className="relative group" key={item.label}>
                            <span
                                className={`cursor-pointer transition-colors duration-300 ${
                                    activePath === item.path
                                        ? "text-[#EFE0E5]"
                                        : "hover:text-[#EFE0E5]"
                                }`}
                                onClick={() => setActivePath(item.path)}
                            >
                                <Link to={item.path}>{item.label}</Link>
                            </span>
                            <span
                                className={`absolute left-0 bottom-0 h-[2px] bg-[#EFE0E5] transition-all duration-300 ${
                                    activePath === item.path
                                        ? "w-full"
                                        : "w-0 group-hover:w-full"
                                }`}
                            ></span>
                        </li>
                    ))}
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
                    <Link to="/cart">
                        <div className="flex items-center space-x-2 hover:opacity-25 transition-all duration-500">
                            <HiOutlineShoppingBag size={"25px"} />
                            <div className="w-6 h-6 rounded-4xl bg-black text-white text-center">
                                {quantity}
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
