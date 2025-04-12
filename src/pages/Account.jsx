import React from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { useState } from "react";
import axios from "axios";
const Account = () => {
  return (
    <div className="">
      <div className="w-ful h-60 flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold">Login</h1>
      </div>
      <div className="flex justify-center gap-40 mt-16">
        <LoginForm />
        <div className="w-px bg-gray-300 h-x"></div>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Account;
