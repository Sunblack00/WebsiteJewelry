import { useContext, useCallback, useState, memo } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../store/CartContext";
import { currencyFormatter } from "../../util/formatting";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import MiniCartItem from "./MiniCartItem";

// Component MiniCart
export default function MiniCart() {
    const { cartItems, totalPrice, removeFromCart, clearCart } =
        useContext(CartContext);

    if (cartItems.length === 0) {
        return (
            <div className="w-100 bg-white shadow-md rounded-lg p-4 absolute top-12 right-0 z-50">
                <p className="text-center text-gray-500">Your cart is empty</p>
                <Link
                    to="/collection/all"
                    className="block text-center text-[#EFE0E5] mt-4 hover:underline"
                >
                    Continue shopping
                </Link>
            </div>
        );
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-96 bg-white shadow-md rounded-lg p-4 absolute top-12 right-0 z-50 "
        >
            <div className="max-h-[50vh] overflow-y-auto">
                {cartItems.map((item) => (
                    <MiniCartItem
                        key={`${item.id}-${JSON.stringify(
                            item.selectedOption
                        )}`}
                        item={item}
                        onRemove={removeFromCart}
                    />
                ))}
            </div>
            <div className="mt-4">
                <div className="flex justify-between items-center text-lg font-medium">
                    <span>TOTAL PRICE:</span>
                    <span>{currencyFormatter.format(totalPrice)}</span>
                </div>
                <div className="flex justify-end">
                    <button
                        onClick={clearCart}
                        className="text-gray-600 hover:text-red-600 text-base"
                    >
                        Clear cart
                    </button>
                </div>
                <Link
                    to="/cart"
                    className="block w-full bg-black text-white text-center py-2 mt-4 rounded hover:bg-gray-800"
                >
                    VIEW MY CART
                </Link>
            </div>
        </motion.div>
    );
}
