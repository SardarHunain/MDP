import { configureStore } from "@reduxjs/toolkit";
import cityReducer from './Slices/citySlice'
import studentReducer from './Slices/studentSlice'
export const store = configureStore({
    reducer:{
        city:cityReducer,
        student: studentReducer,
    }
})