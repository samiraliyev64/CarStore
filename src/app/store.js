import { configureStore } from "@reduxjs/toolkit";
import wheelReducer from "../features/wheel/wheelSlice";
import bumperReducer from "../features/bumper/bumperSlice";
import hoodReducer from "../features/hood/hoodSlice";
import headlightReducer from "../features/headlight/headlightSlice";
import mirrorReducer from "../features/mirror/mirrorSlice";
import keychainReducer from "../features/keychain/keychainSlice";
import customerReducer from "../features/customer/customerSlice";

const store = configureStore({
  reducer: {
    wheel: wheelReducer,
    bumper: bumperReducer,
    hood: hoodReducer,
    headlight: headlightReducer,
    mirror: mirrorReducer,
    keychain: keychainReducer,
    customer: customerReducer,
  },
});

export default store;
