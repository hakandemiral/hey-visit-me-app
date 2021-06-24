// Core
import React from 'react';
import { Route } from 'react-router-dom';

// Components
import ThemeProvider from './Theming/ThemeProvider';
import RootWrapper from './Components/Generic/RootWrapper';
import Header from './Components/Sections/Header';
import Footer from './Components/Sections/Footer';

// Pages
import Overview from './Components/Pages/Overview';

const App = () => (
  <ThemeProvider>
    <RootWrapper>
      <Header />
      <Route component={Overview} path="/overview" exact />
      <Footer />
    </RootWrapper>
  </ThemeProvider>
);

export default App;
