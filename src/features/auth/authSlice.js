import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
    },
    logOut: (state) => {
      state.token = '';
    },
  },
});

export default authSlice.reducer;
