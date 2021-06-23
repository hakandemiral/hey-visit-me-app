import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDark, setLight } from '../features/theme/themeSlice';

const useSystemThemeDetector = () => {
  const getCurrentTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  const dispatch = useDispatch();
  const mqListener = ((e) => {
    if (e.matches) {
      dispatch(setDark());
    } else {
      dispatch(setLight());
    }
  });

  useEffect(() => {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    darkThemeMq.addEventListener('change', mqListener);
  }, []);

  return isDarkTheme;
};

export default useSystemThemeDetector;
