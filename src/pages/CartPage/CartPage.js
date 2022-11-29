import React from "react";
import EmptyCart from "./EmptyCart/EmptyCart";
import "./CartPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../services/redux/store";
import { deleteItemFromCart } from "../../services/actions";
import CartProducts from "./CartProducts/CartProducts";

import { ToastContainer, toast } from "react-toastify";

const CartPage = () => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.cart);

  console.log(items);

  return (
    <div className="cartPage">
      <div className="inCartCount">
        <p>Səbət ({items?.total_items} məhsul)</p>
      </div>
      {items?.total_items === 0 ? <EmptyCart /> : <CartProducts />}
    </div>
  );
};

export default CartPage;
