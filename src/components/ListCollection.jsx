import React from "react";
import { Link } from "react-router-dom";

export default function ListCollection({ collections }) {
  return (
    <>
      <div
        className="grid grid-cols-2 m-auto mt-10 gap-y-4"
        style={{ width: "65%" }}
      >
        {collections.map((item) => {
          if (item.id % 2 === 0) {
            return (
              <>
                <Link
                  to={`/collection/${item.name}`}
                  key={item.id}
                  className="flex justify-center items-center group border rounded-2xl border-gray-400/50 hover:border-gray-400 m-5"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="group-hover:opacity-60 transition duration-300 me-18 "
                    style={{ width: "150px", height: "150px" }}
                  />
                  <div>
                    <p className="text-3xl font-semibold capitalize">
                      {item.name}
                    </p>
                    <p className="font-light">{item.count} Product</p>
                  </div>
                </Link>
              </>
            );
          } else {
            return (
              <>
                <Link
                  key={item.id}
                  to={`/collection/${item.name}`}
                  className="flex justify-center items-center group border rounded-2xl border-gray-400/50 hover:border-gray-400 m-5"
                >
                  <div className="me-18">
                    <p className="text-3xl font-semibold capitalize">
                      {item.name}
                    </p>
                    <p className="font-light">{item.count} Product</p>
                  </div>
                  <img
                    src={item.image}
                    alt=""
                    className="group-hover:opacity-60 transition duration-300"
                    style={{ width: "150px", height: "150px" }}
                  />
                </Link>
              </>
            );
          }
        })}
      </div>
    </>
  );
}
