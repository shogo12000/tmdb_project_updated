import { configureStore } from '@reduxjs/toolkit'
import movieReducer from '../store/movieSlice'


export const store = configureStore({
  reducer: {
    counterx:  movieReducer,
  },
})