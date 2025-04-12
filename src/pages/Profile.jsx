import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import AccountInfo from "../components/AccountInfo";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigation = useNavigate();
  const { user, logout } = useAuth();
  const [isActive, setIsActive] = useState("Account information");
  const option = [
    { id: 1, name: "Account information" },
    { id: 2, name: "Default address" },
    { id: 3, name: "Orders" },
    { id: 4, name: "Wishlist" },
    { id: 5, name: "Log out" },
  ];

  if (!user) return <p>Loading profile...</p>;

  const handleClick = async (item) => {
    if (item.name === "Log out") {
      await logout();

      navigation("/account");
    } else {
      setIsActive(item.name);
    }
  };
  return (
    <div className="container flex flex-col items-center">
      <div>
        <h1 className="text-5xl font-bold text-center mt-16 mb-6">
          Welcome, {user.name}
        </h1>
        <p className="text-lg w-lg text-center">
          From your "My Account" page you have the ability to view your recent
          account activity and update your account information. Just select a
          link below.
        </p>
      </div>
      <div className="flex mt-20 gap-36 justify-between">
        <div className="w-2xs">
          <ul className="border border-gray-200">
            {option.map((item) => (
              <li
                key={item.id}
                onClick={() => handleClick(item)}
                className={`py-4 border-b border-b-gray-200  text-xl indent-8 ${
                  isActive === item.name
                    ? "bg-gray-200 text-gray-950"
                    : "text-gray-400 hover:text-gray-950 hover:cursor-pointer"
                }`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-4">
          <AccountInfo user={user} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
