import { createSlice } from "@reduxjs/toolkit";
import muffinItems from "../muffinItems";

const initialState = {
  cartItems: muffinItems,
  quantity: 1,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity += 1;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity -= 1;
    },
    calculateTotal: (state) => {
      let total = 0;
      let quantity = 0;
      state.cartItems.forEach((item) => {
        total += item.quantity * item.price;
        quantity += item.quantity;
      });
      state.total = total;
      state.quantity = quantity;
    },
  },
});

// console.log(cartSlice);

export const { clearCart, removeItem, increase, decrease, calculateTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
