import React, { useState } from "react";
import { currencyFormatter } from "../util/formatting";

const OrderInforItem = ({ item }) => {
  return (
    <div className="flex gap-5 items-center border-b pb-6 mb-5">
      <img
        src={item.image}
        alt=""
        className="w-24 h-24 border-gray-300 shadow rounded object-cover"
      />
      <div className="flex-3">
        <h2 className="font-medium text-gray-500 mt-1">{item.name}</h2>
        <p className=" text-gray-500 mt-1">
          Stone: {item.selectedOption.stone} | Size: {item.selectedOption.size}{" "}
          | Metal: {item.selectedOption.metal}
        </p>
        <p className="text-gray-600 mt-1 ">
          {currencyFormatter.format(item.price)}
        </p>
      </div>
      <div className="w-28 text-right font-semibold text-xl me-16">
        {item.quantity}
      </div>
    </div>
  );
};

export default OrderInforItem;
