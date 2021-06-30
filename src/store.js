import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/theme/themeSlice';
import dialogReducer from './features/dialog/dialogSlice';

export default configureStore({
  reducer: {
    theme: themeReducer,
    dialog: dialogReducer,
  },
});
