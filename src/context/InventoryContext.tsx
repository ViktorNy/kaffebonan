import { createContext, FC, useEffect, useState } from "react";
import { Product, productArray } from "../data";

interface ContextValue {
  inventoryArray: Product[];
}

export const InventoryContext = createContext<ContextValue>({
  inventoryArray: [],
});

const InventoryProvider: FC = (props) => {
  const [inventoryArray, setInventoryArray] = useState<Product[]>(() => {
    try {
      const inventoryString = localStorage.getItem('inventory');
      if (typeof inventoryString === "string") {
        return inventoryString && inventoryString !== "[]"
          ? JSON.parse(inventoryString)
          : productArray;
      } else {
        return productArray;
      }
    } catch (error) {
      return productArray;
    }
  });

  useEffect(() => {
    localStorage.setItem('inventory', JSON.stringify(inventoryArray));
  }, [inventoryArray]);

  return (
    <InventoryContext.Provider value={{ inventoryArray }}>
      {props.children}
    </InventoryContext.Provider>
  );
};

export default InventoryProvider;
