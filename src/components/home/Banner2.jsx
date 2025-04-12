import React from "react";
import { useNavigate } from "react-router-dom";

export default function Banner2() {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative">
        <img
          src="../images/home/banner3.png"
          alt=""
          className="object-cover w-full"
        />
        <div className="absolute top-1/2 left-1/6 transform -translate-y-1/2">
          <p
            style={{ fontFamily: "Allura, cursive" }}
            className="text-5xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-white"
          >
            Underline
          </p>
          <p className="lead text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            YOUR PERSONALITY
          </p>

          <button
            className="px-10 py-3 mt-6 text-2xs bg-white uppercase tracking-widest font-semibold hover:bg-transparent duration-300 border border-white cursor-pointer hover:text-white"
            onClick={() => navigate("/collection/all")}
          >
            Shop now
          </button>
        </div>
      </div>

      <div
        className="grid grid-cols-6 gap-8 m-auto my-20"
        style={{ width: "70%" }}
      >
        <img src="../images/home/brand1.png" alt="" />
        <img src="../images/home/brand2.png" alt="" />
        <img src="../images/home/brand3.png" alt="" />
        <img src="../images/home/brand4.png" alt="" />
        <img src="../images/home/brand5.png" alt="" />
        <img src="../images/home/brand6.png" alt="" />
      </div>

      <div>
        <img src="../images/home/banner2.png" alt="" className="w-full" />
      </div>
    </>
  );
}
