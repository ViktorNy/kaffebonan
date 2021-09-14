import { Layout } from "./Layout";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "../context/CartContext";
import InventoryProvider from "../context/InventoryContext";

function App() {
  return (
    <BrowserRouter>
      <InventoryProvider>
        <CartProvider>
          <Layout />
        </CartProvider>
      </InventoryProvider>
    </BrowserRouter>
  );
}

export default App;
