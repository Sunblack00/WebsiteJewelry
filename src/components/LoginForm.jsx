import React, { useState } from "react";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const navigate = useNavigate();
  const { handleLogin, fetchProfile, handleChange, formLogin } = useAuth();
  const [forgotpwd, setForgotPwd] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginToken = await handleLogin();
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
          <input
            type="password"
            name="loginPassword"
            id="loginPassword"
            className="w-md border border-gray-300 rounded-md px-2 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500 mb-5"
            placeholder="••••••••"
            required
            value={formLogin.loginPassword}
            onChange={handleChange}
          />
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
      {forgotpwd ? (
        <div className="bg-gray-200 w-md flex flex-col mt-5">
          <div className="mx-10 my-5">
            <MdClose
              className="float-end hover:text-gray-500 hover:cursor-pointer"
              size={"25px"}
              onClick={() => setForgotPwd(false)}
            />
            <h4 className="text-lg font-medium text-start uppercase mb-5">
              forgot password?
            </h4>
            <p htmlFor="email" className="block text-lg  text-gray-950 mb-3">
              Request to Reset Your Password
            </p>
            <p className="block text-sm text-gray-400">
              Enter the email address associated with your account and we will
              email you a temporary password.
            </p>
            <form className="flex mt-5 justify-between">
              <input
                type="email"
                name="resetEmail"
                id="reseEmail"
                className="w-[220px] border border-gray-300 rounded-md mb-5 px-2 py-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="example@email.com"
                required
                autoComplete="on"
                value={formLogin.resetEmail}
                onChange={handleChange}
              />
              <button
                type="submit"
                className=" bg-black text-white px-10 py-3 mb-5  focus:ring-gray-500 transition duration-300 font-medium hover:bg-gray-400 hover:text-gray-600"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LoginForm;
