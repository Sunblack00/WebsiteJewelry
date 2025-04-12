import { div } from "motion/react-client";
import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
export default function InputQuantity({
    value,
    onChange,
    currentQuantity,
    maxQuantity,
}) {
    const [errorQuantity, setErrorQuantity] = useState("");
    const max = maxQuantity - currentQuantity;
    // Phuong thuc dung de cap nhat quantity (Tang / Giam)
    function handleIncrement() {
        if (value < max) {
            onChange((prev) => prev + 1);
            setErrorQuantity("");
        } else {
            setErrorQuantity(
                "You have selected the maximum quantity available."
            );
            setTimeout(() => {
                onChange(max > 0 ? max : 1);
            }, 1000);
        }
    }
    function handleDecrement() {
        if (value > 1) {
            onChange((prev) => prev - 1);
        }
    }
    useEffect(() => {
        if (errorQuantity) {
            const timer = setTimeout(() => setErrorQuantity(""), 2000);
            return () => clearTimeout(timer);
        }
    }, [errorQuantity]);
    return (
        <div>
            <div className="flex items-center gap-5">
                <div className="flex items-center gap-6 border border-gray-500 py-2 w-[7rem] justify-center mt-5">
                    <FaMinus
                        className="cursor-pointer"
                        onClick={handleDecrement}
                    />
                    <span>{value}</span>
                    <FaPlus
                        className="cursor-pointer"
                        onClick={handleIncrement}
                    />
                </div>
                {maxQuantity > 0 && (
                    <span className="text-lg font-light mt-4 text-gray-400">
                        {maxQuantity} products available
                    </span>
                )}
            </div>
            {errorQuantity && (
                <p className="text-sm text-red-600 mt-1 transition-all duration-200">
                    {errorQuantity}
                </p>
            )}
        </div>
    );
}
