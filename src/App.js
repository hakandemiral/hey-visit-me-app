// Core
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Pages
import DialogHandler from './Components/Generic/Dialogs/Base/DialogHandler';
import Landing from './Components/Pages/Landing/Landing';
import AuthBasePage from './Components/Pages/Authentication/AuthBasePage';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import UserProfile from './Components/Pages/UserProfile/UserProfile';
import NotFound404 from './Components/Pages/NotFound404';

const App = () => {
  const isLogin = useSelector((state) => (state.auth.isLogin));

  return (
    <>
      <Switch>
        <Route component={Landing} path="/" exact />

        <Route render={() => <AuthBasePage action="signIn" />} path="/sign-in" exact />
        <Route render={() => <AuthBasePage action="signUp" />} path="/sign-up" exact />

        <Route path="/dashboard">
          {isLogin
            ? (
              <Dashboard />
            )
            : (
              <Redirect to="/sign-in" />
            )}
        </Route>

        <Route component={UserProfile} path="/:userName" />

      </Switch>
      <DialogHandler />
    </>
  );
};

export default App;
