import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import sizeData from "../../../data/size-data.json";
import { useEffect } from "react";
export default function ModalSizeGuide({ isOpen, onClose }) {
    const headers = [
        "UK/AU/NZ",
        "AT/CH/DE",
        "BE/ES/FR",
        "ITALY",
        "BY/RU/UA",
        "US",
    ];
    useEffect(() => {
        if (isOpen) document.body.classList.add("overflow-hidden");

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen]);
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
            <motion.div
                className="relative bg-white rounded-lg shadow-lg w-[90%] max-w-6xl h-[90%] overflow-hidden"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
            >
                <IoMdClose
                    className="absolute right-4 top-4 h-8 w-8 opacity-50 cursor-pointer z-10"
                    onClick={onClose}
                />

                {/* Nội dung cuộn bên trong */}
                <div className="h-full overflow-y-auto px-6 pt-10 pb-6">
                    <div className="text-center mb-5">
                        <h1 className="text-4xl md:text-5xl font-bold mb-2">
                            Size Guide
                        </h1>
                        <h2 className="text-lg md:text-xl font-semibold mb-1">
                            International Conversion
                        </h2>
                        <p className="text-sm text-gray-600">
                            you with our size calculator.
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse text-xs md:text-sm">
                            <thead className="bg-black text-white">
                                <tr>
                                    {headers.map((header) => (
                                        <th
                                            key={header}
                                            className="py-2 px-2 md:px-3 font-semibold text-center whitespace-nowrap"
                                        >
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="text-gray-800">
                                {sizeData.map((row, index) => (
                                    <tr
                                        key={index}
                                        className={
                                            index % 2 === 0
                                                ? "bg-white"
                                                : "bg-gray-100"
                                        }
                                    >
                                        {Object.values(row).map(
                                            (value, cellIndex) => (
                                                <td
                                                    key={cellIndex}
                                                    className="py-2 px-2 md:px-3 text-center"
                                                >
                                                    {value}
                                                </td>
                                            )
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
