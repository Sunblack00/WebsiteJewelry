import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const [formRegister, setFormRegister] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formLogin, setFormLogin] = useState({
    loginEmail: "",
    loginPassword: "",
    resetEmail: "",
  });
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
      fetchProfile(savedToken);
    }
  }, []);
  const handleChange = (e) => {
    setFormRegister({
      ...formRegister,
      [e.target.name]: e.target.value,
    });

    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    try {
      const res = await axios.post("http://localhost:1361/api/login", {
        email: formLogin.loginEmail,
        password: formLogin.loginPassword,
      });
      console.log("Login with:", formLogin);
      const token = res.data.token;
      setToken(token);
      return token;
    } catch (error) {
      alert("Login Fail");
      return null;
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const fullname = formRegister.fname + " " + formRegister.lname;
    console.log(fullname);

    if (formRegister.password !== formRegister.confirmPassword) {
      setError("Mật khẩu không khớp!");
      return;
    }
    setError("");
    console.log("Registering with:", formRegister);

    try {
      const res = await axios.post("http://localhost:1361/api/register", {
        name: fullname,
        email: formRegister.email,
        password: formRegister.password,
      });

      alert(res.data.message);
      setFormRegister({
        fname: "",
        lname: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      alert("Register Fail");
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  };

  const fetchProfile = async (loginToken) => {
    try {
      const res = await axios.get("http://localhost:1361/api/profile", {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
      });
      setUser(res.data.user);
    } catch (error) {
      alert("Fail to loading profile");
    }
  };
  return (
    <AuthContext.Provider
      value={{
        handleChange,
        handleLogin,
        handleRegister,
        formRegister,
        formLogin,
        token,
        error,
        user,
        logout,
        fetchProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
