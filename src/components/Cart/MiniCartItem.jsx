import { FaTrashAlt } from "react-icons/fa";
import { currencyFormatter } from "../../util/formatting";
export default function MiniCartItem({ item, onRemove }) {
    return (
        <div className="flex items-center gap-4 py-4 border-b border-gray-200">
            <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
            />
            <div className="flex-1">
                <h3 className="text-base font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">
                    {item.selectedOption.stone} | {item.selectedOption.size} |{" "}
                    {item.selectedOption.metal}
                </p>
                <p className="text-base text-gray-600">
                    {item.quantity} x {currencyFormatter.format(item.price)}
                </p>
            </div>
            <button
                onClick={() => {
                    onRemove(item.id, item.selectedOption);
                }}
                className="text-gray-600 hover:text-red-600"
            >
                <FaTrashAlt size={16} />
            </button>
        </div>
    );
}
