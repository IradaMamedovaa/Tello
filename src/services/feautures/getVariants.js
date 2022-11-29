import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getVariants } from "../actions";

const initialState = {
  variants: {},
  loading: false,
  error: "",
};

export const productVariantsSlice = createSlice({
  name: "variants",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVariants.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(
      getVariants.fulfilled,
      (state, action) => ({
        ...state,
        loading: false,
        variants: action.payload,
        error: "",
      })
    );
    builder.addCase(
      getVariants.rejected,
      (state) =>
        (state = {
          ...state,
          loading: false,
          error: "Error fetching product",
        })
    );
  },
});

export default productVariantsSlice.reducer;

export const selectProductVariants = (state) =>
  state.variants;
