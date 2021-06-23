import { createSlice } from '@reduxjs/toolkit';
import colorEngine from '../../Theming/colorEngine';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDark: colorEngine.initializer(),
  },
  reducers: {
    setDark: (state) => {
      state.isDark = true;
      localStorage.setItem('isDark', JSON.stringify(true));
    },
    setLight: (state) => {
      state.isDark = false;
      localStorage.setItem('isDark', JSON.stringify(false));
    },
  },
});

export const { setDark, setLight } = themeSlice.actions;

export default themeSlice.reducer;
