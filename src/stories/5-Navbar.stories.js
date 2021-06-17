import React from 'react';
import Navbar from '../Components/Generic/Navigations/Navbar';
import getIconNames from '../Helpers/getIconNames';

export default {
  title: 'Navbar',
  component: Navbar,
  args: {
    active: 'overview',
  },
};

export const NavigationBar = Navbar;
