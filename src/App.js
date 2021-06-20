import React from 'react';
import { ThemeProvider } from 'styled-components';
import useTheme from './Hooks/useTheme';
import RootWrapper from './Components/RootWrapper';
import theming from './Theming/creator.theme';
import Header from './Components/Sections/Header';

function App() {
  const [isDark, setIsDark] = useTheme('isDark');

  const handleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeProvider theme={theming(isDark)}>
      <RootWrapper>
        <Header />
      </RootWrapper>
    </ThemeProvider>
  );
}

export default App;
