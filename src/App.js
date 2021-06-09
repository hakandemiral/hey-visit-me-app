import React from 'react';
import { ThemeProvider } from 'styled-components';
import Paper from './Components/Paper';
import theme from './variables.theme';
import useTheme from './Hooks/useTheme';
import RootWrapper from './Components/RootWrapper';

function App() {
  const [isDark, setIsDark] = useTheme('isDark');

  const handleTheme = () => {
    setIsDark(!isDark);
  };

  const theming = () => {
    let newTheme = { ...theme.constantColors, ...theme.typography };

    if (isDark) {
      newTheme = { ...newTheme, ...theme.darkTheme };
    } else {
      newTheme = { ...newTheme, ...theme.lightTheme };
    }
    return newTheme;
  };

  return (
    <ThemeProvider theme={theming}>
      <RootWrapper>
        <button onClick={handleTheme}>Switch Theme</button>
        {
          isDark.toString()
        }
        <Paper />
      </RootWrapper>
    </ThemeProvider>
  );
}

export default App;
