import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state)); // Saqlash
    },
    removeFromCart: (state, action) => {
      const newState = state.filter(item => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(newState)); // Yangilash
      return newState;
    }
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
