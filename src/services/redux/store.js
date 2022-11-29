import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "../feautures/categoriesSlice";
import productsSlice from "../feautures/productsSlice";
import  productDetailsSlice  from "../feautures/retrieveProductSlice";
import productVariantsSlice from "../feautures/getVariants"
import cartSlice from "../feautures/cartSlice";

export const store = configureStore({
    reducer: {
      categories: categoriesSlice,
      products: productsSlice,
      productDetails: productDetailsSlice,
      variants: productVariantsSlice,
      cart: cartSlice
      },
})

