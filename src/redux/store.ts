import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./feature/authSlice";
import cartSlice from "./cart/cartSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        authSlice,
        cartSlice
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;