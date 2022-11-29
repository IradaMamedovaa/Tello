// @ts-nocheck
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart } from "../../../services/actions";
import { AppDispatch, RootState } from "../../../services/redux/store";
import "./CartProducts.scss";
import AZN from "../../../assets/imgs/icons/aznSymbol.svg";
import Plus from "../../../assets/imgs/icons/plus.svg";
import Minus from "../../../assets/imgs/icons/minus.svg";
import Delete from "../../../assets/imgs/icons/delete.svg";
import { updateItemInCart } from "../../../services/actions";
import { ToastContainer, toast } from "react-toastify";
const CartProducts = () => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.cart);

  return (
    <div className="cartProducts">
      <div className="cartProds">
        {items?.line_items?.map((item) => (
          <div key={Math.random()} className="cartProd">
            <img src={item?.image?.url} alt="" />
            <div className="nameAndPrice">
              <p>{item?.name}</p>
              <p className="cartPrice">
                {item?.price?.raw}{" "}
                <img src={AZN} alt="" className="priceIcon" />
              </p>
            </div>
            <div className="prodQuantity">
              <img
                src={Minus}
                alt=""
                onClick={() => {
                  dispatch(
                    updateItemInCart({
                      id: item?.id,
                      quantity: item?.quantity - 1,
                    })
                  );
                  toast.success("Məhsul sayı azaldıldı! ", {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }}
              />
              {item?.quantity}
              <img
                src={Plus}
                alt=""
                onClick={() => {
                  dispatch(
                    updateItemInCart({
                      id: item?.id,
                      quantity: item?.quantity + 1,
                    })
                  );
                  toast.success("Məhsul sayı artırıldı! ", {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }}
              />
            </div>
            <div className="deleteItem">
              <img
                src={Delete}
                alt=""
                onClick={() => {
                  dispatch(deleteItemFromCart(item?.id));
                  toast.success("Məhsul silindi! ", {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="totalPrice">
        <h5>Ümumi</h5>
        <div className="line"></div>
        <div className="finalPrice">
          <p>Cəmi</p>
          <p>
            {items?.subtotal?.raw} <img src={AZN} alt="" />
          </p>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default CartProducts;
