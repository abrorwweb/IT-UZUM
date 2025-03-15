import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../Redux/productsSlice.js";
import cartReducer from "../Redux/savatcha.js";
import likesReducer from "../Redux/likes.js";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    likes: likesReducer,
  },
});
