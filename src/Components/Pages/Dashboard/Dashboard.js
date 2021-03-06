import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Overview from './Overview/Overview';
import Profile from './Profile/Profile';
import Settings from '../Settings';
import Help from './Help/Help';
import Header from '../../Sections/Header';
import PrivacyPolicy from '../PrivacyPolicy';
import Footer from '../../Sections/Footer';
import { getFullProfile } from '../../../features/user/userSlice';
import LoadingScreen from './LoadingScreen';

const Dashboard = () => {
  const dispatch = useDispatch();
  const initialLoading = useSelector((state) => state.user.initialLoading);

  useEffect(() => {
    dispatch(getFullProfile());
  }, []);

  return (
    <>
      {
        initialLoading
          ? <LoadingScreen />
          : (
            <>
              <Header />
              <Route component={Overview} path="/dashboard" exact />
              <Route component={Profile} path="/dashboard/profile" exact />
              <Route component={Settings} path="/dashboard/settings" exact />
              <Route component={Help} path="/dashboard/help" exact />
              <Route component={PrivacyPolicy} path="/dashboard/privacy-policy" exact />
              <Footer />
            </>
          )
      }
    </>
  );
};

export default Dashboard;
