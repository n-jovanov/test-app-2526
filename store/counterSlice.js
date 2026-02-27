import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 5, // counter broj
    totalClicks: 0, // broj ukupnih klikova
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
      state.totalClicks += 1;
    },
    decrement: (state) => {
      state.value -= 1;
      state.totalClicks += 1;
    },
    addAmount: (state, action) => {
      state.value += action.payload;
      state.totalClicks += 1;
    },
  },
});

export const { increment, decrement, addAmount } = counterSlice.actions;
export default counterSlice.reducer;
