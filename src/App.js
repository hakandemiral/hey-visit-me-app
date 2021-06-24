// Core
import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Header from './Components/Sections/Header';
import Footer from './Components/Sections/Footer';

// Pages
import Overview from './Components/Pages/Overview';

const App = () => (
  <>
    <Header />
    <Route component={Overview} path="/overview" exact />
    <Footer />
  </>
);

export default App;
