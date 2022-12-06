import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfWheels: 10,
};

const wheelSlice = createSlice({
  name: "wheel",
  initialState,
  reducers: {
    ordered: (state) => {
      if (state.numOfWheels > 0) state.numOfWheels--;
    },
    restocked: (state, action) => {
      state.numOfWheels += action.payload;
    },
  },
});

export default wheelSlice.reducer;
export const { ordered, restocked } = wheelSlice.actions;
