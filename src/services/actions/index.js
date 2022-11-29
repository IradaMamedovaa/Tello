import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    try {
      const response = await api.get("/categories");
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const getVariants = createAsyncThunk(
  "productVariants/getVariants",
  async (id) => {
    try {
      const response = await api.get(`/products/${id}/variants`, {});
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const fetchProducts = createAsyncThunk(
  "productsByCategory/fetchProductsByCategories",
  async (categoryName) => {
    try {
      if (categoryName === undefined) {
        const response = await api.get("/products", {
          params: { limit: "40" },
        });
        return response.data.data;
      } else {
        const response = await api.get(`/products`, {
          params: { category_slug: [categoryName], limit: "40" },
        });
        return response.data.data;
      }
    } catch (error) {
      return error;
    }
  }
);

export const retrieveProduct = createAsyncThunk(
  "productDetails/retrieveProduct",
  async (id) => {
    try {
      const response = await api.get(`/products/${id}`, {});
      return response.data;
    } catch (error) {
      return error;
    }
  }
);


export const fetchCards = createAsyncThunk("card/fetchCards", async () => {
  let cartId = localStorage.getItem("cartId") || "";
  try {
    const response = await api.get(`/carts/${cartId}`);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const addProductToBasket = createAsyncThunk(
  "card/addProductToBasket",
  async ({
    id,
    quantity,
  }) => {
    let cartId = localStorage.getItem("cartId") || "";
    console.log(id);
    
    try {
      const response = await api.post(`/carts/${cartId}`, {
        id: id,
        quantity: quantity,
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const deleteItemFromCart = createAsyncThunk(
  "card/deleteItemFromCart",
  async (id) => {
    let cartId = localStorage.getItem("cartId") || "";
    try {
      const response = await api.delete(`/carts/${cartId}/items/${id}`);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const updateItemInCart = createAsyncThunk(
  "card/updateItemInCart",
  async ({ id, quantity }) => {
    let cartId = localStorage.getItem("cartId") || "";
    try {
      const response = await api.put(`/carts/${cartId}/items/${id}`, {
        quantity: quantity,
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const emptyCard = createAsyncThunk("card/emptyCard", async () => {
  let cartId = localStorage.getItem("cartId") || "";
  try {
    const response = await api.delete(`/carts/${cartId}/items`);
    return response.data;
  } catch (error) {
    return error;
  }
});