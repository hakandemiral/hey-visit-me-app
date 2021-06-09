import { useEffect, useState } from 'react';
import useLocalStorage from './useLocalStorage';
import useSystemThemeDetector from './useSystemThemeDetector';

const useTheme = (type) => {
  const systemTheme = useSystemThemeDetector();
  const [storage, setStorage] = useLocalStorage(type, systemTheme);
  const [theme, setTheme] = useState(storage);

  useEffect(() => {
    setStorage(theme);
  }, [theme, systemTheme]);

  const changeTheme = (value) => {
    setTheme(value);
  };

  return [theme, changeTheme];
};

export default useTheme;
