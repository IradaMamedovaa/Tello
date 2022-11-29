import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "../actions";

const initialState = {
  categories: [],
  loading: false,
  error: "",
};

export const CategoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(fetchCategories.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      categories: action.payload.data,
      error: "",
    }));
    builder.addCase(
      fetchCategories.rejected,
      (state) =>
        (state = {
          ...state,
          loading: false,
          error: "Error fetching users",
        })
    );
  },
});

export default CategoriesSlice.reducer;

export const selectAllCategories = (state) =>
  state.categories;
