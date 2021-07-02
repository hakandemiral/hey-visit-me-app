import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/theme/themeSlice';
import dialogReducer from './features/dialog/dialogSlice';
import authReducer from './features/auth/authSlice';

export default configureStore({
  reducer: {
    theme: themeReducer,
    dialog: dialogReducer,
    auth: authReducer,
  },
});
