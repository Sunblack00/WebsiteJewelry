import React from "react";

const AccountInfo = ({ user }) => {
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
            className="w-xl border border-gray-300 rounded-md mb-2 px-2 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
            disabled
            value={user.name}
          />
        </div>
        <div className="">
          {" "}
          <div className=" flex flex-col">
            <label htmlFor="accName" className="text-lg my-2">
              Email
            </label>
            <input
              type="text"
              name="accName"
              id="accName"
              className="w-xl border border-gray-300 rounded-md mb-2 px-2 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
              disabled
              value={user.email}
            />
          </div>
        </div>
        <div className="">
          {" "}
          <div className=" flex flex-col">
            <label htmlFor="accName" className="text-lg my-2">
              Order details
            </label>
            <input
              type="text"
              name="accName"
              id="accName"
              className="w-xl border border-gray-300 rounded-md mb-2 px-2 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
              disabled
            />
          </div>
        </div>
        <div className="">
          {" "}
          <div className=" flex flex-col">
            <label htmlFor="accName" className="text-lg my-2">
              Total spent
            </label>
            <input
              type="text"
              name="accName"
              id="accName"
              className="w-xl border border-gray-300 rounded-md mb-2 px-2 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
              disabled
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccountInfo;
