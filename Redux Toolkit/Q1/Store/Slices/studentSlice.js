// studentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'student',
  initialState: {
    studentName: '',
    studentAge: 0,
  },
  reducers: {
    updateStudent: (state, action) => {
      state.studentName = action.payload.studentName;
      state.studentAge = action.payload.studentAge;
    },
  },
});

export const { updateStudent } = studentSlice.actions;
export const selectStudent = (state) => state.student;

export default studentSlice.reducer;
