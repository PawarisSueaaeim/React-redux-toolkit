import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
    value: {
        isAuth: boolean,
        usernames: string,
        uid: string,
        isModerator: boolean,
    }
};

const authState: AuthState = {
    value: {
        isAuth: false,
        usernames: "",
        uid: "",
        isModerator: false,
    },
};

export const auth = createSlice({
    name: "auth",
    initialState: authState,
    reducers: {
        logOut: () => {
            return authState
        },
        logIn: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    isAuth: true,
                    usernames: action.payload,
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