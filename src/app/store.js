import { configureStore } from '@reduxjs/toolkit'
import colorsReducer from "../features/colors/colorsSlice"

export default configureStore({
  reducer: {
      colors: colorsReducer,
  },
})