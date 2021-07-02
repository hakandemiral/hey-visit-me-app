// Core
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

// Components
import Header from './Components/Sections/Header';
import Footer from './Components/Sections/Footer';

// Pages
import Overview from './Components/Pages/Dashboard/Overview/Overview';
import Profile from './Components/Pages/Dashboard/Profile/Profile';
import Settings from './Components/Pages/Settings';
import Help from './Components/Pages/Dashboard/Help/Help';
import DialogHandler from './Components/Generic/Dialogs/Base/DialogHandler';
import PrivacyPolicy from './Components/Pages/PrivacyPolicy';
import Landing from './Components/Pages/Landing/Landing';
import AuthBasePage from './Components/Pages/Authentication/AuthBasePage';

const App = () => {
  return (
    <>
      <Switch>
        <Route component={Landing} path="/" exact />

        <Route render={() => <AuthBasePage action="signIn" />} path="/sign-in" exact />
        <Route render={() => <AuthBasePage action="signUp" />} path="/sign-up" exact />

        <Route path="/dashboard">
          <Header />
          <Route component={Overview} path="/dashboard/overview" exact />
          <Route component={Profile} path="/dashboard/profile" exact />
          <Route component={Settings} path="/dashboard/settings" exact />
          <Route component={Help} path="/dashboard/help" exact />
          <Route component={PrivacyPolicy} path="/dashboard/privacy-policy" exact />
          <Footer />
        </Route>

      </Switch>
      <DialogHandler />
    </>
  );
};

export default App;
