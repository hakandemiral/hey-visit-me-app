import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theming from './creator.theme';
import useSystemThemeDetector from '../Hooks/useSystemThemeDetector';

const Provider = ({ children }) => {
  const isDark = useSelector((state) => state.theme.isDark);
  useSystemThemeDetector();

  return (
    <ThemeProvider theme={theming(isDark)}>
      {children}
    </ThemeProvider>
  );
};

Provider.propTypes = {
  children: propTypes.node.isRequired,
};

export default Provider;
