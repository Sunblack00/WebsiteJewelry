import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";

const AccountInfo = ({ user }) => {
  const [orderStats, setOrderStats] = useState({
    count: 0,
    totalSpent: 0,
  });

  useEffect(() => {
    const storedOrders = localStorage.getItem("order");

    if (storedOrders) {
      try {
        const orders = JSON.parse(storedOrders);
        // Kiem tra kieu du lieu cua orders co phai la array hay khong
        if (Array.isArray(orders)) {
          const count = orders.length;
          const totalSpent = orders.reduce((sum, order) => {
            return sum + (order.total || 0);
          }, 0);

          setOrderStats({
            count,
            totalSpent,
          });
        }
      } catch (error) {
        console.error("Fail to read order from localStorage:", error);
      }
    }
  }, []);

  return (
    <div>
      <form>
        <div className=" flex flex-col">
          <label htmlFor="accName" className="text-lg my-2">
            Name
          </label>
          <input
            type="text"
            name="accName"
            id="accName"
            className="w-xl border border-gray-300 rounded-md mb-2 px-2 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:cursor-no-drop"
            disabled
            value={user.name}
          />
        </div>
        <div className="">
          <div className=" flex flex-col">
            <label htmlFor="email" className="text-lg my-2">
              Email
            </label>
            <input
              type={"email"}
              name="email"
              id="email"
              className="w-xl border border-gray-300 rounded-md mb-2 px-2 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:cursor-no-drop"
              disabled
              value={user.email}
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col">
            <label htmlFor="orderCount" className="text-lg my-2">
              Order Count
            </label>
            <input
              type="text"
              name="orderCount"
              id="orderCount"
              className="w-xl border border-gray-300 rounded-md mb-2 px-2 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:cursor-no-drop"
              disabled
              value={orderStats.count}
            />
          </div>
        </div>

        <div className="">
          <div className="flex flex-col">
            <label htmlFor="totalSpent" className="text-lg my-2">
              Total spent
            </label>
            <input
              type="text"
              name="totalSpent"
              id="totalSpent"
              className="w-xl border border-gray-300 rounded-md mb-2 px-2 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:cursor-no-drop"
              disabled
              value={currencyFormatter.format(orderStats.totalSpent)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccountInfo;
