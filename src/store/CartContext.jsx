import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    return <CartContext.Provider>{children}</CartContext.Provider>;
}
