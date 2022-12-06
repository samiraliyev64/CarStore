import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfKeychains: 25,
};

const keychainSlice = createSlice({
  name: "keychain",
  initialState,
  reducers: {
    ordered: (state) => {
      if (state.numOfKeychains > 0) state.numOfKeychains--;
    },
    restocked: (state, action) => {
      state.numOfKeychains += action.payload;
    },
  },
});

export default keychainSlice.reducer;
export const { ordered, restocked } = keychainSlice.actions;
