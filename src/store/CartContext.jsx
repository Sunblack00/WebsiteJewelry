import { createContext, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

// Ham so sanh 2 selectedOption
function compareOptions(a, b) {
    if (!a || !b) return false;
    return a.stone === b.stone && a.size === b.size && a.metal == b.metal;
}

export const CartContext = createContext({
    cartItems: [],
    addItemToCart: () => {},
    removeFromCart: () => {},
    updateQuantity: () => {},
    clearCart: () => {},
    totalQuantity: 0,
    totalPrice: 0,
});

export default function CartProvider({ children }) {
    const { user } = useAuth();
    const [cartItems, setCartItems] = useState([]);
    const getCartStorageKey = () => {
        return user ? `cart-items-${user.id}` : "cart-items-guest";
    };

    // Load giỏ hàng từ localStorage khi user thay đổi hoặc component mount
    useEffect(() => {
        const storageKey = getCartStorageKey();
        try {
            const storedCart = localStorage.getItem(storageKey);
            if (storedCart) {
                const parsed = JSON.parse(storedCart);
                if (Array.isArray(parsed)) {
                    setCartItems(parsed);
                    console.log(`Loaded cart for ${storageKey}:`, parsed);
                } else {
                    console.warn(`Dữ liệu trong ${storageKey} không phải mảng`);
                    setCartItems([]);
                }
            } else {
                setCartItems([]);
            }
        } catch (error) {
            console.error(`Lỗi khi đọc giỏ hàng từ ${storageKey}:`, error);
            setCartItems([]);
        }
    }, [user]); // Chạy lại khi user thay đổi

    // Lưu giỏ hàng vào localStorage khi cartItems thay đổi
    useEffect(() => {
        const storageKey = getCartStorageKey();
        try {
            if (Array.isArray(cartItems)) {
                localStorage.setItem(storageKey, JSON.stringify(cartItems));
                console.log(`Saved cart to ${storageKey}:`, cartItems);
            }
        } catch (error) {
            console.error(`Lỗi khi lưu giỏ hàng vào ${storageKey}:`, error);
        }
    }, [cartItems, user]); // Chạy lại khi cartItems hoặc user thay đổi

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
                return updatedItems;
            } else {
                return [...prevItems, newItem];
            }
        });
    }
    function handleRemoveItemFromCart(id, selectedOption) {
        setCartItems((prevItems) =>
            prevItems.filter(
                (item) =>
                    item.id !== id ||
                    JSON.stringify(item.selectedOption) !==
                        JSON.stringify(selectedOption)
            )
        );
    }
    function handleUpdateQuantity(id, selectedOption, newQuantity) {
        setCartItems((prevItems) =>
            prevItems.map((item) => {
                if (
                    item.id === id &&
                    JSON.stringify(item.selectedOption) ===
                        JSON.stringify(selectedOption)
                ) {
                    console.log(newQuantity);
                    return {
                        ...item,
                        quantity: newQuantity,
                        total: item.price * newQuantity,
                    };
                }
                return item;
            })
        );
    }
    function removeAllCart() {
        setCartItems([]);
    }

    // Su dung useMemo de giup cho viec tinh toan lai khong can thiet khi cartItems khong thay doi
    const totalItems = useMemo(
        () => cartItems.reduce((total, item) => total + item.quantity, 0),
        [cartItems]
    );

    const totalPriceItem = useMemo(
        () =>
            cartItems.reduce(
                (total, item) => total + item.quantity * item.price,
                0
            ),
        [cartItems]
    );
    const ctxValue = {
        cartItems: cartItems,
        addToCart: handleAddItemToCart,
        removeFromCart: handleRemoveItemFromCart,
        updateQuantity: handleUpdateQuantity,
        clearCart: removeAllCart,
        totalQuantity: totalItems,
        totalPrice: totalPriceItem,
    };
    return (
        <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
    );
}
