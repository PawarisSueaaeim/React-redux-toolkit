import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./feature/authSlice";
import selectProductSlice from "./feature/selectProductSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        authSlice,
        selectProductSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;