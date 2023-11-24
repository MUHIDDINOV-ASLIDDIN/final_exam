import { createSlice } from "@reduxjs/toolkit";
import productData from "../utils/data";
import data from "./../utils/data";
import getStore from "../utils/getStore";

const initialState = {
  cartItems: data,
  local: getStore("singleProduct"),
  loading: false,
  total: 0,
  error: false,
};
const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    // increase: (state, { payload }) => {
    //   const cartItem = state.local.find((item) => item.id === payload.id);
    //   cartItem.amount = cartItem.amount + 1;
    // },
    // decrease: (state, { payload }) => {
    //   const cartItem = state.local.find((item) => item.id === payload.id);
    //   cartItem.amount = cartItem.amount - 1;
    // },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export default ProductSlice.reducer;
export const { removeItem, increase, decrease, calculateTotals } =
  ProductSlice.actions;
