import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfBumpers: 20,
};

const bumperSlice = createSlice({
  name: "bumper",
  initialState,
  reducers: {
    ordered: (state) => {
      if (state.numOfBumpers > 0) state.numOfBumpers--;
    },
    restocked: (state, action) => {
      state.numOfBumpers += action.payload;
    },
  },
});

export default bumperSlice.reducer;
export const { ordered, restocked } = bumperSlice.actions;
