import { FaTrashAlt, FaTrash } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { currencyFormatter } from "../util/formatting";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../store/CartContext";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function CartPage() {
    const {
        cartItems,
        totalQuantity,
        totalPrice,
        removeFromCart,
        updateQuantity,
    } = useContext(CartContext);
    const [errorQuantities, setErrorQuantities] = useState("");
    function handleUpdateQuantity(item, selectedOption, newQuantity) {
        const max = item.maxQuantity;
        const key = `${item.id}-${JSON.stringify(selectedOption)}`;
        if (newQuantity >= 1 && newQuantity <= max) {
            updateQuantity(item.id, selectedOption, newQuantity);
            setErrorQuantities((prev) => ({ ...prev, [key]: "" }));
        } else {
            setErrorQuantities((prev) => ({
                ...prev,
                [key]: "You have selected the maximum quantity available.",
            }));
            setTimeout(() => {
                setErrorQuantities((prev) => ({ ...prev, [key]: "" }));
            }, 1500);
        }
    }

    if (cartItems.length === 0) {
        return (
            <div className="p-72 text-center text-4xl">
                🛒 Your cart is empty.{" "}
                <Link
                    to="/collection/all"
                    className="font-bold underline block mt-10"
                >
                    CONTINUE SHOPPING
                </Link>
            </div>
        );
    }

    return (
        <div className="container py-12">
            <h1 className="text-3xl font-bold mb-8 text-center">
                Your Shopping Cart
            </h1>
            <div className="mt-6">
                <Link to="/collection/all">
                    <span className="flex gap-1 items-center text-lg font-medium">
                        <IoMdArrowRoundBack /> CONTINUE SHOPPING
                    </span>
                </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-4 sm:gap-8 md:gap-16 mt-4">
                <div className="md:col-span-2 mt-5">
                    {cartItems.map((item) => (
                        <div className="flex gap-5 items-center border-b pb-6 mb-5">
                            <img
                                src={item.image}
                                alt=""
                                className="w-24 h-24 border-gray-300 shadow rounded object-cover"
                            />
                            <div className="flex-3">
                                <h2 className="font-medium text-gray-500 mt-1">
                                    {item.name}
                                </h2>
                                <p className=" text-gray-500 mt-1">
                                    Stone: {item.selectedOption.stone} | Size:{" "}
                                    {item.selectedOption.size} | Metal:{" "}
                                    {item.selectedOption.metal}
                                </p>
                                <p className="text-gray-600 mt-1 ">
                                    {currencyFormatter.format(item.price)}
                                </p>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-6 ">
                                    <FaMinus
                                        className="cursor-pointer"
                                        onClick={() =>
                                            handleUpdateQuantity(
                                                item,
                                                item.selectedOption,
                                                item.quantity - 1
                                            )
                                        }
                                    />
                                    <span>{item.quantity}</span>
                                    <FaPlus
                                        className="cursor-pointer"
                                        onClick={() =>
                                            handleUpdateQuantity(
                                                item,
                                                item.selectedOption,
                                                item.quantity + 1
                                            )
                                        }
                                    />
                                </div>
                                {errorQuantities[
                                    `${item.id}-${JSON.stringify(
                                        item.selectedOption
                                    )}`
                                ] && (
                                    <p className="text-sm text-red-600 mt-1 transition-all ease-in-out duration-200">
                                        {
                                            errorQuantities[
                                                `${item.id}-${JSON.stringify(
                                                    item.selectedOption
                                                )}`
                                            ]
                                        }
                                    </p>
                                )}
                            </div>
                            <div className="w-28 text-right font-semibold">
                                {currencyFormatter.format(item.total)}
                            </div>
                            <button
                                className="text-red-600 hover:text-red-800"
                                onClick={() =>
                                    removeFromCart(item.id, item.selectedOption)
                                }
                            >
                                <FaTrashAlt />
                            </button>
                        </div>
                    ))}
                    {/* Promo Code */}
                    <div className="mt-6">
                        <label className="font-medium mb-2 block">
                            Have a promo code for checkout?
                        </label>
                        <div className="flex">
                            <input
                                type="text"
                                placeholder="Enter Promo Code"
                                className="border rounded-l px-4 py-2 w-full"
                            />
                            <button className="bg-black text-white rounded-r px-5">
                                Apply
                            </button>
                        </div>
                    </div>
                    {/* Note */}
                    <div className="mt-6">
                        <label className="font-medium mb-2 block">
                            Add a note to your order
                        </label>
                        <textarea
                            placeholder="Your note..."
                            rows="3"
                            className="w-full border rounded px-4 py-2"
                        ></textarea>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="bg-gray-100 rounded shadow-lg p-5  h-fit">
                    <h3 className="text-2xl font-semibold mb-4">
                        Order Summary
                    </h3>
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-gray-500 text-xl font-light">
                            Total
                        </span>
                        <span className="text-lg">{totalQuantity} item(s)</span>
                    </div>
                    <div className="flex items-center justify-between mb-8">
                        <span className="text-gray-500 text-xl font-light">
                            Total weight
                        </span>
                        <span className="text-lg">558.87 lb</span>
                    </div>
                    <div className="border-b border-gray-300"></div>
                    <div className="flex items-center justify-between mt-4 text-2xl font-bold">
                        <span className="">Total Price</span>
                        <span className="">
                            {currencyFormatter.format(totalPrice)}
                        </span>
                    </div>
                    <button
                        className="w-full bg-black text-white mt-4 py-2 font-semibold hover:bg-gray-800"
                        onClick={() => alert("Order successful")}
                    >
                        CHECKOUT
                    </button>
                    <p className="text-xs text-gray-400 mt-4">
                        Newlife processes all orders in USD. Shipping & taxes
                        calculated at checkout.
                    </p>
                </div>
            </div>
        </div>
    );
}
