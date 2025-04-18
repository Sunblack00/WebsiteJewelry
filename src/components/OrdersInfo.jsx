import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../store/CartContext";
import CartItem from "./Cart/CartItem";
import OrderInforItem from "./OrderInforItem";

const OrdersInfo = () => {
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    const lastOrder = localStorage.getItem("order");
    if (lastOrder) {
      try {
        const parse = JSON.parse(lastOrder);
        setOrderItems(parse);
      } catch (error) {
        console.error("Fail to load order from localStorage");
      }
    }
  }, []);
  if (orderItems.length === 0) {
    return (
      <div className="text-start text-4xl">
        <p className="font-medium text-xl font-sans">Orders</p>
        <p className="font-medium text-3xl text-gray-500 mt-10">
          You haven't placed any orders yet.
        </p>
        <Link
          to="/collection/all"
          className="font-medium text-[20px] no-underline block mt-10 px-10 py-4 bg-black text-white text-center transition-all duration-300 hover:bg-gray-300 hover:text-gray-950"
        >
          GO TO SHOP
        </Link>
      </div>
    );
  }
  return (
    <div>
      <div className="ms-10">
        {orderItems.map((item, index) => (
          <OrderInforItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default OrdersInfo;
