import { createContext, FC, useState } from "react";
import { Product } from "../data";

interface ContextValue {
    shoppingCart: Product[];
    addToCart: (product: Product) => void;
}

export const CartContext = createContext<ContextValue>({
    shoppingCart: [],
    addToCart: () => {}
});

export const CartProvider: FC = (props) => {
    const [shoppingCart, setShoppingCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setShoppingCart([...shoppingCart, product]);
    }

    return (
        <CartContext.Provider
            value={{
                shoppingCart,
                addToCart
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}