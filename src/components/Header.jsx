import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/lolgo.png";
import { GoPerson } from "react-icons/go";
import { BiSearchAlt } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CartContext } from "../store/CartContext";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useRef } from "react";
import MiniCart from "./Cart/MiniCart";

export default function Header() {
    //   const { user } = useAuth();
    const [activePath, setActivePath] = useState(null);
    const navItems = [
        { path: "/", label: "HOME" },
        { path: "/collection/all", label: "PRODUCT" },
        { path: "/collection", label: "COLLECTION" },
        { path: "/blog", label: "BLOG" },
        { path: "/contact", label: "CONTACT US" },
        { path: "/about", label: "ABOUT US" },
    ];

    const { cartItems } = useContext(CartContext);
    const quantity = cartItems.length;
    const [showMiniCart, setShowMiniCart] = useState(false);
    const miniCartRef = useRef(null); // Ref để theo dõi MiniCart
    const cartIconRef = useRef(null); // Ref để theo dõi biểu tượng giỏ hàng
    const location = useLocation(); // Lắng nghe thay đổi đường dẫn

    // Ẩn MiniCart khi đường dẫn thay đổi
    useEffect(() => {
        setShowMiniCart(false); // Đặt lại showMiniCart khi location.pathname thay đổi
    }, [location.pathname]);

    // Xử lý click ra ngoài để ẩn MiniCart
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                miniCartRef.current &&
                !miniCartRef.current.contains(event.target) &&
                cartIconRef.current &&
                !cartIconRef.current.contains(event.target)
            ) {
                setShowMiniCart(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    /// Hiển thị MiniCart khi hover vào biểu tượng giỏ hàng
    const handleCartMouseEnter = () => {
        setShowMiniCart(true);
    };

    // Ẩn MiniCart khi rời chuột khỏi biểu tượng giỏ hàng hoặc MiniCart
    const handleMouseLeave = () => {
        setShowMiniCart(false);
    };
    return (
        <div className="sticky top-0 z-50 bg-white shadow-md">
            <div className="md:container mx-auto flex items-center justify-between py-4 pl-20">
                <Link to={"/"}>
                    <img src={logo} alt="logo" />
                </Link>
  const { user } = useAuth();
  const [activePath, setActivePath] = useState(null);
  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/product/collection/all", label: "PRODUCT" },
    { path: "/collection", label: "COLLECTIONS" },
    { path: "/blog", label: "BLOG" },
    { path: "/contact", label: "CONTACT US" },
    { path: "/about", label: "ABOUT US" },
  ];
  const { cartItems } = useContext(CartContext);
  const quantity = cartItems.length;
  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="w-7xl mx-auto flex items-center justify-between py-4 pl-20">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>

                <ul className="flex space-x-10 text-sm font-medium">
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
                        <div className="flex items-center gap-2 hover:opacity-25 transition-all duration-500">
                            {/* {user && (
                <p className="text-xs ">
                  Welcome <br /> {user.name}
                </p>
              )} */}
                            <GoPerson
                                size={"25px"}
                                className=" hover:opacity-25 transition-all duration-500"
                            />
                        </div>
                    </Link>
                    <BiSearchAlt
                        size={"25px"}
                        className=" hover:opacity-25 transition-all duration-500"
                    />
                    <div className="flex items-center space-x-8">
                        <div className="relative">
                            <Link to="/cart">
                                <div
                                    ref={cartIconRef}
                                    className="flex items-center space-x-2 hover:opacity-25 transition-all duration-500 cursor-pointer"
                                    onMouseEnter={handleCartMouseEnter}
                                >
                                    <HiOutlineShoppingBag size={"25px"} />
                                    <div className="w-6 h-6 rounded-4xl bg-black text-white text-center">
                                        {quantity}
                                    </div>
                                </div>
                            </Link>
                            {showMiniCart && (
                                <div
                                    ref={miniCartRef}
                                    onMouseEnter={() => setShowMiniCart(true)} // Giữ hiển thị khi hover vào MiniCart
                                    onMouseLeave={handleMouseLeave} // Ẩn khi rời chuột // Ẩn khi rời chuột
                                >
                                    <MiniCart />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
