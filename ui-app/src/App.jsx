// import Product from "./pages/Product";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useState } from "react";

function App() {
  // store the cart items in a state
  const [cartItems, setCartItems] = useState([]);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setCartItems={setCartItems} cartItemsQuantity={cartItems && cartItems.length} />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart cartItems={cartItems}/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
