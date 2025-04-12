import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/lolgo.png";
import { GoPerson } from "react-icons/go";
import { BiSearchAlt } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CartContext } from "../store/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { user } = useAuth();
  const [activePath, setActivePath] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // sử dụng useNavigate để chuyển hướng

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

  const handleSearchSubmit = () => {
    // Điều hướng đến trang tìm kiếm với tham số query trong URL
    if (searchTerm) {
      navigate(`/search?query=${searchTerm}`);
      setIsSearchOpen(false); // Đóng modal sau khi tìm kiếm
    }
  };

  return (
    <>
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <div className="md:container mx-auto flex items-center justify-between py-4 pl-20">
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
                    activePath === item.path ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-8">
            <Link to={"/account"}>
              <div className="flex items-center gap-2 hover:opacity-25 transition-all duration-500">
                {user && (
                  <p className="text-xs ">
                    Welcome <p>{user.name}</p>
                  </p>
                )}
                <GoPerson size={"25px"} />
              </div>
            </Link>

            {/* Icon search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hover:opacity-25 transition-all duration-500"
            >
              <BiSearchAlt size={"25px"} />
            </button>

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

      {/* Modal tìm kiếm */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex justify-center bg-transparent">
          {/* Modal với hiệu ứng nền mờ ở phần dưới */}
          <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent via-white  bg-opacity-30"></div>

          <div className="relative w-[100%] h-[30%] bg-white p-8 rounded-lg shadow-lg animate-fadeIn">
            {/* Nút đóng */}
            <button
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
              onClick={() => setIsSearchOpen(false)}
            >
              &times;
            </button>

            {/* Tiêu đề */}
            <p className="uppercase text-sm font-semibold mb-6 text-gray-700 ">
              What are you looking for?
            </p>

            {/* Ô tìm kiếm */}
            <div className="flex items-center border-b border-gray-300 py-2 ">
              <BiSearchAlt size={24} className="mr-3 text-black"  onClick={handleSearchSubmit} />
              <input
                type="text"
                placeholder="Search"
                className="w-full outline-none text-lg bg-transparent "
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            
          </div>
        </div>
      )}
    </>
  );
}
