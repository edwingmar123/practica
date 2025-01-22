import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: ""
}

export const formSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },

        changeEmail: (state, action) => {
            state.email = action.payload;
        }
    }
})

export const { setName, setEmail, changeEmail } = formSlice.actions;
export default formSlice.reducer