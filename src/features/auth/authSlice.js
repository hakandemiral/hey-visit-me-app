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
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isPending: false,
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
    [loginUser.pending]: (state) => {
      state.isPending = true;
    },
    [loginUser.fulfilled]: (state) => {
      state.isLogin = true;
      state.errorMessage = '';
      state.isPending = false;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.errorMessage = payload;
      state.isPending = false;
    },
    [registerUser.pending]: (state) => {
      state.isPending = true;
    },
    [registerUser.fulfilled]: (state) => {
      state.isLogin = true;
      state.errorMessage = '';
      state.isPending = false;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.errorMessage = payload;
      state.isPending = false;
    },
  },
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
