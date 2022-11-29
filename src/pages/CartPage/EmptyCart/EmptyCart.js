// @ts-nocheck
import React from 'react'
import ShoppingCart from '../../../assets/imgs/icons/shopping-cart.svg';
import {Link} from "react-router-dom";
import "./EmptyCart.scss"

function Empty() {
  return (
    <div className="empty-card">
      <div className="empty-div">
          <img src={ShoppingCart} alt="logo"/>
          <p className={"basket-text"}>Səbətiniz hal-hazırda boşdur</p>
          <Link to="/">
              <p className={"basket-btn"}>Alış-verişə davam et</p>
          </Link>
      </div>
    </div>
  )
}

export default Empty