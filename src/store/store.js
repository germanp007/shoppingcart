import { configureStore } from "@reduxjs/toolkit";
import { origenSlice } from "../store/miSlice";
export const store = configureStore({
  reducer: {
    misCategorias: origenSlice.reducer,
  },
});
