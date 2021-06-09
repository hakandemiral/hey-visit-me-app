import React from 'react';
import { ThemeProvider } from 'styled-components';
import Paper from './Components/Paper';
import useTheme from './Hooks/useTheme';
import RootWrapper from './Components/RootWrapper';
import theming from './Theming/creator.theme';

function App() {
  const [isDark, setIsDark] = useTheme('isDark');

  const handleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeProvider theme={theming(isDark)}>
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
