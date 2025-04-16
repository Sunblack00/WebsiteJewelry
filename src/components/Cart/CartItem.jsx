import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { currencyFormatter } from "../../util/formatting";
export default function CartItem({ item, onUpdate, onRemove, error }) {
    return (
        <div className="flex gap-5 items-center border-b pb-6 mb-5">
            <img
                src={item.image}
                alt=""
                className="w-24 h-24 border-gray-300 shadow rounded object-cover"
            />
            <div className="flex-3">
                <h2 className="font-medium text-gray-500 mt-1">{item.name}</h2>
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
                            onUpdate(
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
                            onUpdate(
                                item,
                                item.selectedOption,
                                item.quantity + 1
                            )
                        }
                    />
                </div>
                {error && (
                    <p className="text-sm text-red-600 mt-1 transition-all ease-in-out duration-200">
                        {error}
                    </p>
                )}
            </div>
            <div className="w-28 text-right font-semibold">
                {currencyFormatter.format(item.total)}
            </div>
            <button
                className="text-red-600 hover:text-red-800"
                onClick={() => onRemove(item.id, item.selectedOption)}
            >
                <FaTrashAlt />
            </button>
        </div>
    );
}
