import React from "react";
import { Route, Routes } from "react-router-dom";
import Banner from "./components/home/Banner";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Banner></Banner>}></Route>
      </Routes>
    </>
  );
}
