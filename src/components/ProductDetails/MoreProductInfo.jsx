import { inertia } from "motion";
import { span } from "motion/react-client";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MoreProductInfo({
    isOpen,
    onOpen,
    descriptions,
    productDetails,
}) {
    return (
        <div>
            <div className="mt-5 border border-t"></div>
            <button
                className="flex justify-between items-center w-full mt-5"
                onClick={() => onOpen("des")}
            >
                <span className="">More description</span>
                {!isOpen.des ? (
                    <FaPlus className="cursor-pointer" />
                ) : (
                    <FaMinus className="cursor-pointer" />
                )}
            </button>
            <div
                className={`transition-all duration-500 overflow-hidden ${
                    isOpen.des ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                {descriptions.map((des, i) => (
                    <p key={i} className="text-sm text-gray-700 mt-2">
                        {des}
                    </p>
                ))}
            </div>
            <div className="mt-5 border border-t"></div>
            <button
                className="flex justify-between items-center w-full mt-5 "
                onClick={() => onOpen("detail")}
            >
                <span className="">Product Detail</span>
                {!isOpen.detail ? (
                    <FaPlus className="cursor-pointer" />
                ) : (
                    <FaMinus className="cursor-pointer" />
                )}
            </button>
            <div
                className={`transition-all duration-500 overflow-hidden mt-4 ${
                    isOpen.detail ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="flex justify-between px-4 py-3 bg-gray-100">
                    <span className="font-semibold">Fit and style</span>
                    <span className="text-gray-600">
                        {productDetails.fitAndStyle.join(", ")}
                    </span>
                </div>

                {/* Composition */}
                <div className="flex justify-between px-4 py-3">
                    <span className="font-semibold">Composition</span>
                    <span className="text-gray-600">
                        {productDetails.composition}
                    </span>
                </div>

                {/* Clarity */}
                <div className="flex justify-between px-4 py-3 bg-gray-100">
                    <span className="font-semibold">Clarity</span>
                    <span className="text-gray-600">
                        {productDetails.clarity}
                    </span>
                </div>

                {/* Diamond Weight */}
                <div className="flex justify-between px-4 py-3">
                    <span className="font-semibold">Diamond weight</span>
                    <span className="text-gray-600">
                        {productDetails.diamondWeight}
                    </span>
                </div>

                {/* Total Number */}
                <div className="flex justify-between px-4 py-3 bg-gray-100">
                    <span className="font-semibold">Total number</span>
                    <span className="text-gray-600">
                        {productDetails.totalNumber}
                    </span>
                </div>

                {/* Care */}
                <div className="flex justify-between px-4 py-3">
                    <span className="font-semibold">Care</span>
                    <span className="text-gray-600">{productDetails.care}</span>
                </div>
            </div>
        </div>
    );
}
