import { Layout } from './Layout';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App;