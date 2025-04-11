import { createContext, useState } from "react";

export const CartContext = createContext({
    cartItems: [],
    addItemToCart: () => {},
});

export default function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    function handleAddItemToCart(newItem) {
        setCartItems((prevItems) => {
            const existingIndex = prevItems.findIndex(
                (item) =>
                    item.id === newItem.id &&
                    JSON.stringify(item.selectedOption) ===
                        JSON.stringify(newItem.selectedOption)
            );
            if (existingIndex !== -1) {
                const updatedItems = [...prevItems];
                const existingItem = updatedItems[existingIndex];
                updatedItems[existingIndex] = {
                    ...existingItem,
                    quantity: existingItem.quantity + newItem.quantity,
                    total:
                        (existingItem.quantity + newItem.quantity) *
                        existingItem.price,
                };
                console.log(updatedItems[existingIndex]);
                return updatedItems;
            } else {
                console.log(newItem);
                return [...prevItems, newItem];
            }
        });
    }
    const ctxValue = {
        cartItems: cartItems,
        addItemToCart: handleAddItemToCart,
    };
    return (
        <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
    );
}
