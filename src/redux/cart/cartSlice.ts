import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type IProduct = {
    value: {
        product_name: string;
    }
};

const setSessionsStorage = (state: IProduct) => {
    sessionStorage.setItem('cartSlice', JSON.stringify(state));
};

const initialState: IProduct = {
    value: {
        product_name: "",
    },
};

export const cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        keepProduct: (state, action:PayloadAction<string>) => {
            state.value.product_name = action.payload
            setSessionsStorage(state);
        },
    },
});

export const {
    keepProduct,
} = cart.actions;
export default cart.reducer;