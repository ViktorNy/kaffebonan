import { createContext, FC, useEffect, useState } from "react";
import { Product } from "../data";

export interface ShoppingItem {
    product: Product;
    amount: number;
}

interface ContextValue {
    shoppingCart: ShoppingItem[];
    addToCart: (product: Product) => void;
}

export const CartContext = createContext<ContextValue>({
    shoppingCart: [],
    addToCart: () => {}
});

export const CartProvider: FC = (props) => {
    const [shoppingCart, setShoppingCart] = useState<ShoppingItem[]>([]);

    const addToCart = (product: Product) => {
        const index = shoppingCart.findIndex((shoppingItem) => shoppingItem.product.id === product.id); 
        
        if (index >= 0) {
            shoppingCart[index].amount++;
        } else {
            shoppingCart.push({product: product, amount: 1})
        }

        setShoppingCart(shoppingCart) ;
    }

    // useEffect(() => {
    //     console.log("HEJ!!!");
    // }, [])

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