// citySlice.js
import { createSlice } from '@reduxjs/toolkit';

const citySlice = createSlice({
  name: 'city',
  initialState: {
    cityname: '',
    citylocation: '',
  },
  reducers: {
    updateCity: (state, action) => {
      state.cityname = action.payload.cityname;
      state.citylocation = action.payload.citylocation;
    },
  },
});

export const { updateCity } = citySlice.actions;
export const selectCity = (state) => state.city;

export default citySlice.reducer;
