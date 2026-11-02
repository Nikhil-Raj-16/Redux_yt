import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/CounterSlice";
// now the store will have reducers

export const store = configureStore({
    reducer:{
        counter: counterReducer
    }
});
