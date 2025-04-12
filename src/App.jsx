import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Blog from "./pages/Blog";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";
import BlogDetail from "./pages/BlogDetail";
import CartProvider from "./store/CartContext";
import Cart from "./pages/Cart";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Collection from "./pages/Collection";

import Profile from "./pages/Profile";
import Account from "./pages/Account";
import AuthProvider from "./context/AuthContext";
import Breadcrumb from "./components/Breadcrumb";
export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Header />
        <Breadcrumb />
        <ScrollToTopButton />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/collection/:collection" element={<Product />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/account" element={<Account />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
        <Footer />
      </CartProvider>
    </AuthProvider>
  );
}
