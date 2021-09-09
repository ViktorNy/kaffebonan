import { createContext, FC, useState } from "react";
import { Product } from "../data";

export interface ShoppingItem {
    product: Product;
    amount: number;
}

interface ContextValue {
    shoppingCart: ShoppingItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
    emptyCart: () => void;
    removeAllOfSpecificProductFromCart: (product: Product) => void
}

export const CartContext = createContext<ContextValue>({
    shoppingCart: [],
    addToCart: () => { },
    removeFromCart: () => { },
    emptyCart: () => { },
    removeAllOfSpecificProductFromCart: () => { }
});

export const CartProvider: FC = (props) => {

    const [shoppingCart, setShoppingCart] = useState<ShoppingItem[]>([]);

    const addToCart = (product: Product) => {
        const index = shoppingCart.findIndex((shoppingItem) => shoppingItem.product.id === product.id);

        if (index >= 0) {
            shoppingCart[index].amount++;
            setShoppingCart([...shoppingCart]);
        } else {
            setShoppingCart([...shoppingCart, { product: product, amount: 1 }]);
        }
    }

    const removeFromCart = (product: Product) => {
        const index = shoppingCart.findIndex((shoppingItem) => shoppingItem.product.id === product.id);

        if (index >= 0) {
            shoppingCart[index].amount--;
            if (shoppingCart[index].amount <= 0) {
                shoppingCart.splice(index, 1);
            }
            setShoppingCart([...shoppingCart]);
        } else {
            //Should never happen!
            throw new Error("Something went wrong");
        }
    }

    const removeAllOfSpecificProductFromCart = (product: Product) => {
        const index = shoppingCart.findIndex((shoppingItem) => shoppingItem.product.id === product.id);

        if (index >= 0) {
            shoppingCart.splice(index, 1);
            setShoppingCart([...shoppingCart]);
        } else {
            //Should never happen!
            throw new Error("Something went wrong");
        }
    }

    const emptyCart = () => {
        setShoppingCart([]);
    }

    return (
        <CartContext.Provider
            value={{
                shoppingCart,
                addToCart,
                removeFromCart,
                emptyCart,
                removeAllOfSpecificProductFromCart
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}