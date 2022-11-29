import React, { useEffect } from "react";
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import Home from "./pages/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import Products from "./pages/Products/Products";
import ProductPage from "./pages/ProductPage/ProductPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import CartPage from "./pages/CartPage/CartPage";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./services/redux/store";
import { fetchCards } from "./services/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCards())
  }, [])
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />

          <Route path="products" element={<Products />} />
          <Route path="products/:category" element={<Products />} />
          <Route path="products/:category/:id" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
