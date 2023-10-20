import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './reducers/home';
import sliceReducer from './reducers/slice';
import studentReducer from './reducers/student';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    slice: sliceReducer,
    student: studentReducer
  },
});