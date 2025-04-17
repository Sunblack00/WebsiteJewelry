import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";

const RegisterForm = () => {
  const { handleRegister, handleChange, error, formRegister } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [focusConfirm, setFocusConfirm] = useState(false);
  const [focus, setFocus] = useState(false);

  const [errors, setErrors] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateField = (name, value) => {
    let errorMsg = "";

    switch (name) {
      case "fname":
      case "lname":
        if (value && !/^[A-Za-z\s]+$/.test(value)) {
          errorMsg = "Only letters and spaces are allowed";
        }
        break;

      case "email":
        if (value && !/^[A-Z0-9._%+-]+@[a-z]+\.[A-Z]{2,}$/i.test(value)) {
          errorMsg = "Invalid email address";
        }
        break;

      case "password":
        if (value && value.length < 8) {
          errorMsg = "Password must be at least 8 characters";
        }
        break;

      case "confirmPassword":
        if (value !== formRegister.password) {
          errorMsg = "Passwords do not match";
        }
        break;

      default:
        break;
    }

    return errorMsg;
  };

  // Handle custom change to include validation
  const handleFormChange = (e) => {
    const { name, value } = e.target;

    handleChange(e);

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));

    if (name === "password" && formRegister.confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword:
          formRegister.confirmPassword !== value
            ? "Passwords do not match"
            : "",
      }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      fname: validateField("fname", formRegister.fname),
      lname: validateField("lname", formRegister.lname),
      email: validateField("email", formRegister.email),
      password: validateField("password", formRegister.password),
      confirmPassword: validateField(
        "confirmPassword",
        formRegister.confirmPassword
      ),
    };

    setErrors(newErrors);

    // Kiem tra loi
    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    // Neu khong co loi thi tiep tuc dang ky
    if (!hasErrors) {
      handleRegister(e);
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-8">
      <h4 className="text-2xl font-bold mb-6 text-start">Sign Up</h4>
      <form className="flex flex-col space-y-4" onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="fname" className="block text-md text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            name="fname"
            id="fname"
            className={`w-md border ${
              errors.fname ? "border-red-500" : "border-gray-300"
            } rounded-md mb-1 px-2 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500`}
            placeholder="First name"
            value={formRegister.fname}
            onChange={handleFormChange}
            required
          />
          {errors.fname && (
            <p className="text-xs text-red-500 mb-2">{errors.fname}</p>
          )}
        </div>

        <div>
          <label htmlFor="lname" className="block text-md text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            name="lname"
            id="lname"
            className={`w-md border ${
              errors.lname ? "border-red-500" : "border-gray-300"
            } rounded-md mb-1 px-2 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500`}
            placeholder="Last name"
            value={formRegister.lname}
            onChange={handleFormChange}
            required
          />
          {errors.lname && (
            <p className="text-xs text-red-500 mb-2">{errors.lname}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-md text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formRegister.email}
            onChange={handleFormChange}
            className={`w-md border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md mb-1 px-2 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500`}
            placeholder="example@email.com"
            required
            autoComplete="on"
          />
          {errors.email && (
            <p className="text-xs text-red-500 mb-2">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-md text-gray-700 mb-1"
          >
            Password
          </label>
          <div
            className={`flex items-center border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } h-12 w-md rounded-md mb-1 ${focus ? "ring-gray-500 ring-2" : ""}`}
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
              onChange={handleFormChange}
            />
            {showPassword ? (
              <RxEyeOpen size={"25px"} onClick={() => setShowPassword(false)} />
            ) : (
              <RxEyeClosed
                size={"25px"}
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
          {errors.password && (
            <p className="text-xs text-red-500 mb-2">{errors.password}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-md text-gray-700 mb-1"
          >
            Confirm password
          </label>
          <div
            className={`flex items-center border ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            } h-12 w-md rounded-md mb-1 ${
              focusConfirm ? "ring-gray-500 ring-2" : ""
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
              onChange={handleFormChange}
            />
            {showPasswordConfirm ? (
              <RxEyeOpen
                size={"25px"}
                onClick={() => setShowPasswordConfirm(false)}
              />
            ) : (
              <RxEyeClosed
                size={"25px"}
                onClick={() => setShowPasswordConfirm(true)}
              />
            )}
          </div>
          {errors.confirmPassword && (
            <p className="text-xs text-red-500 mb-2">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        {error && <p className="text-red-500">{error}</p>}

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
