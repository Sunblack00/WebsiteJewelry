import React from "react";
import { Link } from "react-router-dom";

const AddressInfo = ({ user }) => {
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
            <label htmlFor="address" className="text-lg my-2">
              Address
            </label>
            <input
              type={"text"}
              name="address"
              id="address"
              className="w-xl border border-gray-300 rounded-md mb-2 px-2 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:cursor-no-drop"
              disabled
              value={"Viet Nam"}
            />
          </div>
        </div>
        <Link
          to="/collection/all"
          className="font-medium text-[20px] no-underline block mt-10 px-10 py-4 bg-black text-white text-center transition-all duration-300 hover:bg-gray-300 hover:text-gray-950"
        >
          MANAGE ADDRESS
        </Link>
      </form>
    </div>
  );
};

export default AddressInfo;
