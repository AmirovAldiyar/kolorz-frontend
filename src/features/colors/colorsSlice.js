import { createSlice } from "@reduxjs/toolkit"

export const colorsSlice = createSlice({
    name: "colors",
    initialState: {
        colors: [],
        recColors: [],
    },
    reducers: {
        setColors: (state, action) => {
            state.colors = action.payload
        },
        setRecColors: (state, action) => {
            state.recColors = action.payload
        }
    },
})

export const { setColors, setRecColors } =    colorsSlice.actions

export default colorsSlice.reducer