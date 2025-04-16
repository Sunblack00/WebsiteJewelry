import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";

const RegisterForm = () => {
  const { handleRegister, handleChange, error, formRegister } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [focusConfirm, setFocusConfirm] = useState(false);
  const [focus, setFocus] = useState(false);
  return (
    <div className="w-full max-w-md bg-white p-8">
      <h4 className="text-2xl font-bold mb-6 text-start">Sign Up</h4>
      <form className="flex flex-col space-y-4" onSubmit={handleRegister}>
        <div>
          <label htmlFor="fname" className="block text-md  text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            name="fname"
            id="fname"
            className="w-md border border-gray-300 rounded-md mb-5 px-2 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="First name"
            value={formRegister.fname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lname" className="block text-md  text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            name="lname"
            id="lname"
            className="w-md border border-gray-300 rounded-md mb-5 px-2 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Last name"
            value={formRegister.lname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-md  text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formRegister.email}
            onChange={handleChange}
            className="w-md border border-gray-300 rounded-md mb-5 px-2 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="example@email.com"
            required
            autoComplete="on"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-md text-gray-700 mb-1"
          >
            Password
          </label>
          <div
            className={`flex items-center border border-gray-300 h-12 w-md rounded-md mb-5 ${
              focus ? " ring-gray-500 ring-2" : "border-gray-300"
            }`}
            onFocus={() => {
              setFocus(true);
            }}
            onBlur={() => setFocus(false)}
          >
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              className="w-sm indent-2 border-none focus:outline-none"
              placeholder="••••••••"
              required
              value={formRegister.password}
              onChange={handleChange}
            />
            {showPassword ? (
              <RxEyeOpen size={"25px"} onClick={() => setShowPassword(false)} />
            ) : (
              <RxEyeClosed
                size={"25px"}
                className=""
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-md text-gray-700 mb-1"
          >
            Confirm password
          </label>
          <div
            className={`flex items-center border border-gray-300 h-12 w-md rounded-md mb-5 ${
              focusConfirm ? " ring-gray-500 ring-2" : "border-gray-300"
            }`}
            onFocus={() => {
              setFocusConfirm(true);
            }}
            onBlur={() => setFocusConfirm(false)}
          >
            <input
              type={showPasswordConfirm ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              className="w-sm indent-2 border-none focus:outline-none"
              placeholder="••••••••"
              required
              value={formRegister.confirmPassword}
              onChange={handleChange}
            />
            {showPasswordConfirm ? (
              <RxEyeOpen
                size={"25px"}
                onClick={() => setShowPasswordConfirm(false)}
              />
            ) : (
              <RxEyeClosed
                size={"25px"}
                className=""
                onClick={() => setShowPasswordConfirm(true)}
              />
            )}
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>

        <button
          type="submit"
          className="w-md bg-black text-white py-3 hover:bg-gray-300 hover:text-gray-600 transition duration-400 font-medium"
        >
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
