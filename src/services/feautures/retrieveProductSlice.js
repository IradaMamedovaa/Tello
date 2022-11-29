import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { retrieveProduct } from "../actions";

const initialState = {
  productDetails: {},
  loading: false,
  error: "",
};

export const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(retrieveProduct.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(
      retrieveProduct.fulfilled,
      (state, action) => ({
        ...state,
        loading: false,
        productDetails: action.payload,
        error: "",
      })
    );
    builder.addCase(
      retrieveProduct.rejected,
      (state) =>
        (state = {
          ...state,
          loading: false,
          error: "Error fetching product",
        })
    );
  },
});

export default productDetailsSlice.reducer;

export const selectProductDetails = (state) =>
  state.productDetails;
