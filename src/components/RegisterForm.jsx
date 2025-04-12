import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const RegisterForm = () => {
  const { handleRegister, handleChange, error, formRegister } = useAuth();
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
            className="w-md border border-gray-300 rounded-md mb-5 px-2 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="example@email.com"
            onChange={handleChange}
            value={formRegister.email}
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
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={formRegister.password}
            className="w-md border border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500 mb-5"
            placeholder="••••••••"
            required
          />
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-md text-gray-700 mb-1"
          >
            Confirm password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={handleChange}
            value={formRegister.confirmPassword}
            className="w-md border border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500 mb-5"
            placeholder="••••••••"
            required
          />
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
