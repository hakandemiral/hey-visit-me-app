// Core
import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Header from './Components/Sections/Header';
import Footer from './Components/Sections/Footer';

// Pages
import Overview from './Components/Pages/Overview';
import Profile from './Components/Pages/Profile';
import Settings from './Components/Pages/Settings';
import Help from './Components/Pages/Help';

const App = () => (
  <>
    <Header />
    <Route component={Overview} path="/overview" exact />
    <Route component={Profile} path="/profile" exact />
    <Route component={Settings} path="/settings" exact />
    <Route component={Help} path="/help" exact />
    <Footer />
  </>
);

export default App;
