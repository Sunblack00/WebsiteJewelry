import React from "react";

export default function Banner() {
  return (
    <div className="inset-0 h-screen  relative">
      <img
        src="images/banner.png"
        alt=""
        className="h-full object-cover absolute"
      />
      <div className="absolute top-2/6 left-1/6">
        <p style={{ fontFamily: "Allura, cursive" }} className="text-9xl font-bold text-white">
          Live the Moment
        </p>
        <p className="lead text-white text-2xl">Need a perfect jewelry? We are here to help you.</p>
        <p className="lead text-white text-2xl"> We have over 10,000 of diamonds to choose from.</p>
        <button className="px-10 py-3 mt-10 text-2xs bg-white uppercase tracking-widest font-semibold hover:bg-transparent duration-300 border border-white">Shop now</button>
      </div>
    </div>
  );
}
