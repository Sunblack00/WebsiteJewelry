import React from "react";
import { FaPencilRuler } from "react-icons/fa";
const ProductOption = React.memo(function ProductOption({
    selectedOption,
    value,
    options,
    onOption,
    option,
    onModal,
}) {
    return (
        <div>
            <div className="flex justify-between items-center">
                <span className="text-lg text-gray-900 mt-3 block capitalize">
                    {value}: {selectedOption[value]}
                </span>
                {selectedOption[value] === selectedOption.size && (
                    <div
                        className="flex gap-2 items-center mt-3"
                        onClick={onModal}
                    >
                        <FaPencilRuler />
                        <span className="text-lg cursor-pointer">
                            Size Guide
                        </span>
                    </div>
                )}
            </div>

            <div className="flex gap-5 mt-3">
                {options[option].map((op, index) => (
                    <button
                        key={index}
                        onClick={() => onOption(value, op)}
                        className={`border px-2 py-1  hover:text-black hover:border-black cursor-pointer ${
                            selectedOption[value] === op
                                ? "border-black text-black"
                                : "text-gray-500 border-gray-400 "
                        }`}
                    >
                        {op}
                    </button>
                ))}
            </div>
        </div>
    );
});
export default ProductOption;
