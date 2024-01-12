import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./countSlice";
export const store = configureStore({
    reducer:{
        user:userReducer
    }
})