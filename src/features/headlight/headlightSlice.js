import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfHeadlights: 15,
};

const headlightSlice = createSlice({
  name: "headlight",
  initialState,
  reducers: {
    ordered: (state) => {
      if (state.numOfHeadlights > 0) state.numOfHeadlights--;
    },
    restocked: (state, action) => {
      state.numOfHeadlights += action.payload;
    },
  },
});

export default headlightSlice.reducer;
export const { ordered, restocked } = headlightSlice.actions;
