import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./slice/productsSlice";

export const store = configureStore({
  reducer: {
    productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
