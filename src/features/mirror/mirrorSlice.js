import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfMirrors: 7,
};

const mirrorSlice = createSlice({
  name: "mirror",
  initialState,
  reducers: {
    ordered: (state) => {
      if (state.numOfMirrors > 0) state.numOfMirrors--;
    },
    restocked: (state, action) => {
      state.numOfMirrors += action.payload;
    },
  },
});

export default mirrorSlice.reducer;
export const { ordered, restocked } = mirrorSlice.actions;
