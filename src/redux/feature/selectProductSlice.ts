import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const pantDatas = [
    {
        src: "/image/navy.jpg"
    },
    {
        src: "/image/green.jpg"
    },
    {
        src: "/image/white.jpg"
    }
]

type ISelect = {
    img: string,
};

const selectState: ISelect = {
    img: "/image/navy.jpg",
};

export const select = createSlice({
    name: 'select',
    initialState: selectState,
    reducers: {
        selected: (state, action: PayloadAction<string>) => {
            switch (action.payload) {
                case "navy":
                    state.img = pantDatas[0].src
                    break;
                case "green":
                    state.img = pantDatas[1].src
                    break;
                case "white":
                    state.img = pantDatas[2].src
                    break;
            }  
        },
    },
})

export const {
    selected
} = select.actions
export default select.reducer;