import { Eye, ShoppingCart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function ListProduct({ products }) {
  return (
    <>
      <div
        className="grid grid-cols-3 gap-8 m-auto my-20"
        style={{ width: "70%" }}
      >
        {products.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`}>
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

              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="relative group/cart">
                  <button
                    className="bg-pink-200/70 p-3 rounded-sm hover:bg-gray-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      console.log("Added to cart!");
                    }}
                  >
                    <ShoppingCart size={18} className="text-white" />
                  </button>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-gray-800 text-xs px-2 w-[80px] py-1 rounded  opacity-0 group-hover/cart:opacity-100 transition">
                    Add To Cart
                  </span>
                </div>

                <div className="relative group/view">
                  <div className="bg-pink-200/70 p-3 rounded-sm hover:bg-gray-300">
                    <Eye size={18} className="text-white" />
                  </div>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-gray-800 text-xs w-[80px] px-2 py-1 rounded  opacity-0 group-hover/view:opacity-100 transition pointer-events-none">
                    Vỉew Detail
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center mt-5">
              <p className="font-semibold hover:opacity-50 cursor-pointer">
                {item.name}
              </p>
              <p
                className="mt-2 text-xl"
                style={{ fontFamily: "Allura, cursive" }}
              >
                $ {item.variants[0].price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
