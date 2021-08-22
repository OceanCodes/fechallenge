import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./Reducers/dataSlice";
import pageNumberReducer from "./Reducers/pageNumberSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    pageNumber: pageNumberReducer,
  },
});
