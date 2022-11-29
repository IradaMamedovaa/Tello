import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts } from "../actions";

const initialState = {
  products: [],
  loading: false,
  error: "",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action) => ({
        ...state,
        loading: false,
        products: action.payload,
        error: "",
      })
    );
    builder.addCase(
      fetchProducts.rejected,
      (state) =>
        (state = {
          ...state,
          loading: false,
          error: "Error fetching users",
        })
    );
  },
});

export default productsSlice.reducer;

export const selectAllProducts = (state) => state.products;
