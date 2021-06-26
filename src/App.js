// Core
import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Header from './Components/Sections/Header';
import Footer from './Components/Sections/Footer';

// Pages
import Overview from './Components/Pages/Overview';
import Profile from './Components/Pages/Profile';

const App = () => (
  <>
    <Header />
    <Route component={Overview} path="/overview" exact />
    <Route component={Profile} path="/profile" exact />
    <Footer />
  </>
);

export default App;
