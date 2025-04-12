import React from "react";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();
  return (
    <div className="inset-0 h-screen relative">
      <img
        src="../images/home/banner.png"
        alt=""
        className="w-full h-full object-cover absolute"
      />
      <div className="absolute top-2/6 left-1/6">
        <p
          style={{ fontFamily: "Allura, cursive" }}
          className="text-9xl font-bold text-white"
        >
          Live the Moment
        </p>
        <p className="lead text-white text-2xl">
          Need a perfect jewelry? We are here to help you.
        </p>
        <p className="lead text-white text-2xl">
          {" "}
          We have over 10,000 of diamonds to choose from.
        </p>
        <button
          className="px-10 py-3 mt-10 text-2xs bg-white uppercase tracking-widest font-semibold hover:bg-transparent duration-300 border border-white cursor-pointer hover:text-white"
          onClick={() => navigate("/collection/all")}
        >
          Shop now
        </button>
      </div>
    </div>
  );
}
