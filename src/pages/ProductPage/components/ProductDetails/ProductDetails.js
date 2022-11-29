// @ts-nocheck
import React, { useReducer, useState } from "react";
import "./ProductDetails.scss";
import EmptyStar from "../../../../assets/imgs/icons/emptyStar.svg";
import Star from "../../../../assets/imgs/icons/star.svg";
import AZN from "../../../../assets/imgs/icons/aznSymbol.svg";
import Minus from "../../../../assets/imgs/icons/minus.svg";
import Plus from "../../../../assets/imgs/icons/plus.svg";
import Cart from "../../../../assets/imgs/icons/cart.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addProductToBasket } from "../../../../services/actions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../services/redux/store";

const initialState = {
  count: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
      break;
    case "decrement":
      if (state.count === 0) return { count: state.count };
      return { count: state.count - 1 };
      break;
    default:
      // throw new Error();
  }
};

const ProductDetails = ({ productDetails, setSelectedImg, id }) => {
  const [state, dispatchCount] = useReducer(reducer, initialState);
  const [price, setPrice] = useState(productDetails?.price?.raw);
  const [selectedStorage, setSelectedStorage] = useState(false);
  const [selectedColor, setSelectedColor] = useState();
  
  const dispatch = useDispatch();
  const colorVariants = productDetails?.variant_groups?.find(
    (variantG) => variantG.name === "Color"
  )?.options;
  const storageVariants = productDetails?.variant_groups?.find(
    (variantG) => variantG.name === "Storage"
  )?.options;

  return (
    <div className="productDetails">
      <div className="mainDetails">
        <h6 className="productName">{productDetails?.name}</h6>
        <div className="stars">
          <img src={Star} alt="star" className="star" />
          <img src={Star} alt="star" className="star" />
          <img src={Star} alt="star" className="star" />
          <img src={Star} alt="star" className="star" />
          <img src={EmptyStar} alt="star" className="star" />
          <p>
            <span className="rCount">(226)</span>{" "}
            <span className="aft"> | </span>{" "}
            <span className="comments">57 rəy</span>{" "}
          </p>
        </div>
        <div className="price">
          {price} <img src={AZN} alt="AZN" className="azn" />
        </div>
      </div>
      <div className="colorsAndStorage">
        {colorVariants && (
          <div className="colors">
            <p>Rəng:</p>
            {colorVariants?.map((color, i) => (
              <div
                key={Math.random()}
                className={color.name}
                onClick={() => {
                  setSelectedImg(color.assets);
                  setSelectedColor(i);
                }}
                id={`${selectedColor == i ? "selectedColor" : ""}`}
              ></div>
            ))}
          </div>
        )}
        {storageVariants && (
          <div className="storages">
            <p>Yaddaş:</p>
            {storageVariants?.map((storage, i) => (
              <div
                key={Math.random()}
                className={`storageVariant _${storage.name}`}
                onClick={() => {
                  setPrice(productDetails?.price?.raw + storage?.price.raw);
                  setSelectedStorage(i);
                }}
                id={`${selectedStorage == i ? "selectedStorage" : ""}`}
              >
                {storage.name}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="countAndBasket">
        <div className="productCount">
          <div className="decr" onClick={() => dispatchCount({ type: "decrement" })}>
            <img src={Minus} alt="minus" />
          </div>
          <div className="count">{state.count}</div>
          <div className="incr" onClick={() => dispatchCount({ type: "increment" })}>
            <img src={Plus} alt="plus" />
          </div>
        </div>
        <div className="toBasket">
          <button
            className="toBasketBtn"
            onClick={() => {
              toast.success("Məhsul səbətə əlavə edildi! ", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              dispatch(addProductToBasket({id: id, quantity: 1}));
              // console.log(productDetails.id);
              
            }}
          >
            <img src={Cart} alt="cart" />
            Səbətə at
          </button>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
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

export default ProductDetails;
