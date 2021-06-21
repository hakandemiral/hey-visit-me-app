import React from 'react';
import { ThemeProvider } from 'styled-components';
import useTheme from './Hooks/useTheme';
import RootWrapper from './Components/RootWrapper';
import theming from './Theming/creator.theme';
import Header from './Components/Sections/Header';
import FullBand from './Components/Sections/FullBand';
import Footer from './Components/Sections/Footer';
import ShowCase from './Components/Sections/ShowCase';
import Statistics from './Components/PageSpesific/Overview/Statistics';

function App() {
  const [isDark, setIsDark] = useTheme('isDark');

  const handleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeProvider theme={theming(isDark)}>
      <RootWrapper>
        <Header />
        <Statistics />
        <ShowCase showCaseId={1} />
        <ShowCase showCaseId={2} />
        <ShowCase showCaseId={3} />
        <FullBand />
        <Footer />
      </RootWrapper>
    </ThemeProvider>
  );
}

export default App;
