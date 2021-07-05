import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/theme/themeSlice';
import dialogReducer from './features/dialog/dialogSlice';
import authReducer from './features/auth/authSlice';
import userReducer from './features/user/userSlice';

export default configureStore({
  reducer: {
    theme: themeReducer,
    dialog: dialogReducer,
    auth: authReducer,
    user: userReducer,
  },
});
