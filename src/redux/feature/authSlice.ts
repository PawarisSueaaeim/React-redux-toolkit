import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    value: AuthState,
};

type AuthState = {
    value: {
        isAuth: boolean,
        usernames: string,
        uid: string,
        isModerator: boolean,
    }
};

const initialState = {
    value: {
        isAuth: false,
        username: "",
        uid: "",
        isModerator: false,
    },
};

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: () => {
            return initialState
        },
        logIn: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    isAuth: true,
                    username: action.payload,
                    uid: "sldkfj2123sd15",
                    isModerator: false,
                },
            }
        },
    },
});

export const {
    logOut,
    logIn
} = auth.actions;
export default auth.reducer;