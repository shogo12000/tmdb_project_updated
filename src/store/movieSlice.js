
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    bannerData: [],
    imageURL: ""
}


export const movieSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setBannerData: (state, action) => {
            console.log("ATIVADO PAYLOAD")
            console.log(action)
            state.bannerData = action.payload
        },
        setImageURL: (state, action) => {
            state.imageURL = action.payload
        },
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount, setBannerData, setImageURL } = movieSlice.actions

export default movieSlice.reducer