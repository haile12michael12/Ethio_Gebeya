import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./Slices/CartSlice";
const Store = configureStore({
  reducer: { cart: Cartslice },
});

export default Store;
