import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slicers/counterSlice";
import userReducer from "./slicers/userSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
    },
});
