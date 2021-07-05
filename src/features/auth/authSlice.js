import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import auth from './auth';
import api from '../../api';
import { getFullProfile } from '../user/userSlice';

export const loginUser = createAsyncThunk(
  'user/sign-in',
  async ({ loginString, password, captcha }, thunkAPI) => {
    try {
      const res = await api.post('/auth/sign-in', {
        loginString,
        password,
      });

      if (res.status === 200) {
        auth.logIn(res.data.token);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const registerUser = createAsyncThunk(
  'user/sign-up',
  async ({
    userName, email, password, captcha,
  }, thunkAPI) => {
    try {
      const res = await api.post('/auth/sign-up', {
        userName,
        email,
        password,
      }, {
        headers: {
          captcha,
        },
      });

      if (res.status === 201) {
        auth.logIn(res.data.token);
      }
    } catch (err) {
      console.log(err.response.data);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    errorMessage: '',
    isLogin: auth.isAuthenticated(),
  },
  reducers: {
    logOut: (state) => {
      auth.logOut();
      state.isLogin = false;
    },
  },
  extraReducers: {
    [loginUser.fulfilled]: (state) => {
      state.isLogin = true;
      state.errorMessage = '';
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.errorMessage = payload;
    },
    [registerUser.fulfilled]: (state) => {
      state.isLogin = true;
      state.errorMessage = '';
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.errorMessage = payload;
    },
  },
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
