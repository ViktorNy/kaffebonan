import { createContext, FC, useEffect, useState } from "react";
import { Product, productArray } from "../data";


interface ContextValue {
    inventoryArray: Product[];
    addProductToInventory: (product: Product) => void;
    removeProductFromInventory: (product: Product) => void;
}

export const InventoryContext = createContext<ContextValue>({
    inventoryArray: [],
    addProductToInventory: () => { },
    removeProductFromInventory: () => {}
})

const InventoryProvider: FC = (props) => {

    const [inventoryArray, setInventoryArray] = useState<Product[]>(() => {
        try {
            const inventoryString = localStorage.getItem('inventory');
            if (typeof inventoryString === 'string') {
                return (inventoryString && inventoryString !== '[]') ? JSON.parse(inventoryString) : productArray;
            }
            else{
                return productArray;
            }
        } catch (error) {
            return productArray;
        }
    })

    const addProductToInventory = (product: Product) => {
        inventoryArray.push(product);
        setInventoryArray([...inventoryArray]);
    }

    const removeProductFromInventory = (product: Product) => {
        const index = inventoryArray.findIndex(p => p.id === product.id);
        if(index >= 0){
            inventoryArray.splice(index, 1);
            setInventoryArray([...inventoryArray]);
        } else {
            //Should never happen!
            throw new Error("Something went wrong");
        }
    }

    useEffect(() => {
        console.log("test");
        localStorage.setItem('inventory', JSON.stringify(inventoryArray));
    }, [inventoryArray])

    return (
        <InventoryContext.Provider
            value={{
                inventoryArray,
                addProductToInventory,
                removeProductFromInventory
            }}
        >
            {props.children}
        </InventoryContext.Provider>
    )
}

export default InventoryProvider;