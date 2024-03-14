import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basket";
import restaurantReducer from "./restaurant";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
  },
});