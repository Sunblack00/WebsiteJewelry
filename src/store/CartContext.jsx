import { createContext, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

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
  const [cartItems, setCartItems] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cart-items");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Lỗi khi đọc giỏ hàng từ localStorage:", error);
      return [];
    }
  });

  // ✅ Load giỏ hàng từ localStorage khi app khởi động
  useEffect(() => {
    const storedCart = localStorage.getItem("cart-items");
    if (storedCart) {
      try {
        const parsed = JSON.parse(storedCart);
        console.log("Loaded cart from localStorage:", parsed);
        setCartItems(parsed);
      } catch (e) {
        console.error("Lỗi khi parse cart từ localStorage:", e);
      }
    }
  }, []);

  // ✅ Tự động lưu cart vào localStorage khi cartItems thay đổi
  useEffect(() => {
    localStorage.setItem("cart-items", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem("cart-items", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Lỗi khi lưu giỏ hàng vào localStorage:", error);
    }
  }, [cartItems]);

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
            (existingItem.quantity + newItem.quantity) * existingItem.price,
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
          JSON.stringify(item.selectedOption) !== JSON.stringify(selectedOption)
      )
    );
  }
  function handleUpdateQuantity(id, selectedOption, newQuantity) {
    console.log(selectedOption, newQuantity);
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (
          item.id === id &&
          JSON.stringify(item.selectedOption) === JSON.stringify(selectedOption)
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
      cartItems.reduce((total, item) => total + item.quantity * item.price, 0),
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
