import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./routes/Home";
import Product from "./routes/Product";
import Contact from "./routes/Contact";
import Cart from "./components/Cart";
import "./App.css";
import ErrorPage from "./routes/ErrorPage";
import CheckoutSuccess from "./routes/CheckoutSuccess";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<CheckoutSuccess />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
