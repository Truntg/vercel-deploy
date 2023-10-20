import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  isLogin: false,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setIsLogin: (state, actions) => {
        state.isLogin = actions.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setIsLogin } = homeSlice.actions

const homeReducer = homeSlice.reducer;

export default homeReducer;