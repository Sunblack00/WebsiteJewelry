import React from "react";
import { Route, Routes } from "react-router-dom";
import Banner from "./components/home/Banner";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Blog from "./pages/Blog";
import Account from "./components/Account";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Banner></Banner>}></Route>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product" element={<Product />} />
                <Route path="/account" element={<Account />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
        </>
    );
}
