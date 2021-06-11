import theme from './variables.theme';

const theming = (isDark) => {
  let newTheme = {
    typography: { ...theme.typography },
    filters: { ...theme.filters },
  };

  if (isDark) {
    newTheme = { ...newTheme, colors: { ...theme.constantColors, ...theme.darkTheme } };
  } else {
    newTheme = { ...newTheme, colors: { ...theme.constantColors, ...theme.lightTheme } };
  }
  console.log(newTheme);
  return newTheme;
};

export default theming;
