import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  students:[],
};

export const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    addStudent: (state, action) => {
        state.students.push(action.payload);
      },
      removeStudent: (state, action) => {
        state.students = state.students.filter((student) => student.id !== action.payload);
      },
      addCourse: (state, action) => {
        const student = state.students.find((student) => student.id === action.payload.studentId);
        if (student) {
          student.courses.push(action.payload.course);
        }
      },
      removeCourse: (state, action) => {
        const student = state.students.find((student) => student.id === action.payload.studentId);
        if (student) {
          student.courses = student.courses.filter((course) => course.id !== action.payload.courseId);
        }
      },
  },
});

// Action creators are generated for each case reducer function
export const { addStudent, removeStudent, addCourse, removeCourse } = studentSlice.actions

const studentReducer = studentSlice.reducer;

export default studentReducer;