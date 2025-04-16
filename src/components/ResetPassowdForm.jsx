import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { useAuth } from "../context/AuthContext";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";

const ResetPassowdForm = ({ setForgotPwd }) => {
  const {
    formResetPwd,
    handleChange,
    checkEmail,
    handleChangePassword,
    error,
  } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [focusConfirm, setFocusConfirm] = useState(false);
  const [focus, setFocus] = useState(false);
  const [successfulVerify, setSuccessfulVerify] = useState(false);
  const handleSend = async (e) => {
    e.preventDefault();
    const check = await checkEmail();
    if (check) return setSuccessfulVerify(true);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleChangePassword();
    setSuccessfulVerify(false);
  };
  return (
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
          Enter the email address associated with your account and we will email
          you a temporary password.
        </p>
        <form className="flex mt-5 justify-between" onSubmit={handleSend}>
          <input
            type="email"
            name="resetEmail"
            id="reseEmail"
            className="w-[220px] border border-gray-300 rounded-md mb-5 px-2 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="example@email.com"
            required
            autoComplete="on"
            value={formResetPwd.resetEmail}
            onChange={handleChange}
            disabled={successfulVerify}
          />

          <button
            type="submit"
            className=" bg-black text-white px-10 py-2 mb-5  focus:ring-gray-500 transition duration-300 font-medium hover:bg-gray-400 hover:text-gray-600"
            disabled={successfulVerify}
          >
            SEND
          </button>
        </form>
        {successfulVerify ? (
          <form onSubmit={handleSubmit}>
            <div
              className={`flex items-center border border-gray-300 h-12 w-[370px] rounded-md mb-5 ${
                focus ? " ring-gray-500 ring-2" : "border-gray-300"
              }`}
              onFocus={() => {
                setFocus(true);
              }}
              onBlur={() => setFocus(false)}
            >
              <input
                type={showPassword ? "text" : "password"}
                name="resetPassword"
                id="resetPassword"
                className="w-xs indent-2 border-none focus:outline-none"
                placeholder="••••••••"
                required
                value={formResetPwd.resetPassword}
                onChange={handleChange}
              />
              {showPassword ? (
                <RxEyeOpen
                  size={"25px"}
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <RxEyeClosed
                  size={"25px"}
                  className=""
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
            <div
              className={`flex items-center border border-gray-300 h-12 w-[370px] rounded-md mb-5 ${
                focusConfirm ? " ring-gray-500 ring-2" : "border-gray-300"
              }`}
              onFocus={() => {
                setFocusConfirm(true);
              }}
              onBlur={() => setFocusConfirm(false)}
            >
              <input
                type={showPasswordConfirm ? "text" : "password"}
                name="resetPasswordConfirm"
                id="resetPasswordConfirm"
                className="w-xs indent-2 border-none focus:outline-none disabled:"
                placeholder="••••••••"
                required
                value={formResetPwd.resetPasswordConfirm}
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
            <button
              type="submit"
              className="bg-black w-[370px] text-white px-10 py-3 font-medium hover:bg-gray-400 hover:text-gray-600"
            >
              Change Password
            </button>
          </form>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ResetPassowdForm;
