import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("likes")) || [];

const likesSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    addToLikes: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("likes", JSON.stringify(state)); 
    },
    removeFromLikes: (state, action) => {
      const newState = state.filter(item => item.id !== action.payload);
      localStorage.setItem("likes", JSON.stringify(newState)); 
      return newState;
    }
  },
});

export const { addToLikes, removeFromLikes } = likesSlice.actions;
export default likesSlice.reducer;
