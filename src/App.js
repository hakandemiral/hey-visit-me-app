import React from 'react';
import ThemeProvider from './Theming/ThemeProvider';
import RootWrapper from './Components/Generic/RootWrapper';
import Header from './Components/Sections/Header';
import FullBand from './Components/Sections/FullBand';
import Footer from './Components/Sections/Footer';
import ShowCase from './Components/Sections/ShowCase';
import Statistics from './Components/PageSpesific/Overview/Statistics';

const App = () => (
  <ThemeProvider>
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

export default App;
