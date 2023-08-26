import { Routes, Route } from "react-router-dom";

import "./App.css";

import { Home } from "./pages/home";
import { MyCart } from "./pages/myCart";
import { CartProvider } from "./contexts/myCart";
import { CheckoutComplete } from "./pages/checkoutComplete";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="mycart" element={<MyCart />} />
          <Route path="checkoutComplete" element={<CheckoutComplete />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
