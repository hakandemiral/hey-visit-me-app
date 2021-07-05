import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ThemeProvider, createGlobalStyle, css } from 'styled-components';
import theming from './creator.theme';
import useSystemThemeDetector from '../Hooks/useSystemThemeDetector';

const GlobalStyle = createGlobalStyle(({
  theme,
}) => css`
  * {
    transition: 400ms background-color, 50ms color, 400ms border-color;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  :root {
    font-size: 15px;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.colors.background};
  }

  a {
    text-decoration: none;
  }

  *::-webkit-scrollbar {
    width: 5px;               /* width of the entire scrollbar */
  }

  *::-webkit-scrollbar-track {
    background: #DCE2F9;        /* color of the tracking area */
  }

  *::-webkit-scrollbar-thumb {
    background-color: #6F96B6;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
  }
`);

const Provider = ({ children }) => {
  const isDark = useSelector((state) => state.theme.isDark);
  useSystemThemeDetector();

  return (
    <ThemeProvider theme={theming(isDark)}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

Provider.propTypes = {
  children: propTypes.node.isRequired,
};

export default Provider;
