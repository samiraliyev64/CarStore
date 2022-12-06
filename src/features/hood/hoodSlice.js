import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfHoods: 3,
};

const hoodSlice = createSlice({
  name: "hood",
  initialState,
  reducers: {
    ordered: (state) => {
      if (state.numOfHoods > 0) state.numOfHoods--;
    },
    restocked: (state, action) => {
      state.numOfHoods += action.payload;
    },
  },
});

export default hoodSlice.reducer;
export const { ordered, restocked } = hoodSlice.actions;
