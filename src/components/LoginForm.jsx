import React, { useEffect, useState } from "react";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ResetPassowdForm from "./ResetPassowdForm";
const LoginForm = () => {
  const navigate = useNavigate();
  const { handleLogin, fetchProfile, handleChange, formLogin } = useAuth();
  const [forgotpwd, setForgotPwd] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [focus, setFocus] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginToken = await handleLogin();
    localStorage.setItem("token", loginToken);
    if (loginToken) {
      await fetchProfile(loginToken);
      navigate("/profile");
    }
  };
  return (
    <div className="w-full max-w-md bg-white p-8">
      <h4 className="text-2xl font-bold mb-6 text-start">Sign In</h4>
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="loginEmail"
            className="block text-md  text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            name="loginEmail"
            id="loginEmail"
            value={formLogin.loginEmail}
            onChange={handleChange}
            className="w-md border border-gray-300 rounded-md mb-5 px-2 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="example@email.com"
            required
            autoComplete="on"
          />
        </div>
        <div>
          <label
            htmlFor="loginPassword"
            className="block text-md text-gray-700 mb-1"
          >
            Password
          </label>
          <div
            className={`flex items-center border border-gray-300 h-12 w-md rounded-md mb-5 ${
              focus ? " ring-gray-500 ring-2" : "border-gray-300"
            }`}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          >
            <input
              type={showPassword ? "text" : "password"}
              name="loginPassword"
              id="loginPassword"
              className="w-sm indent-2 border-none focus:outline-none"
              placeholder="••••••••"
              required
              value={formLogin.loginPassword}
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
        <button
          type="submit"
          className="w-md bg-black text-white py-3 mb-5  focus:ring-gray-500 transition duration-400 font-medium hover:bg-gray-300 hover:text-gray-600"
        >
          SIGN IN
        </button>
      </form>
      <p
        className="underline text-gray-400 font-medium hover:cursor-pointer hover:text-gray-900"
        onClick={() => {
          if (forgotpwd === false) return setForgotPwd(true);
          if (forgotpwd === true) return setForgotPwd(false);
        }}
      >
        FORGOT YOUR PASSWORD?
      </p>
      {forgotpwd ? <ResetPassowdForm setForgotPwd={setForgotPwd} /> : <></>}
    </div>
  );
};

export default LoginForm;
