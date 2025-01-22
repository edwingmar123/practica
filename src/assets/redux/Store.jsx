import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./FormSlice";

export const store = configureStore({
    reducer: {
        user: userReducer
    },
});