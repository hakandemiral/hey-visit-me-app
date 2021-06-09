import theme from './variables.theme';

const theming = (isDark) => {
  let newTheme = { ...theme.constantColors, ...theme.typography };

  if (isDark) {
    newTheme = { ...newTheme, ...theme.darkTheme };
  } else {
    newTheme = { ...newTheme, ...theme.lightTheme };
  }
  return newTheme;
};

export default theming;
