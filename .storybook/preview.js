import { ThemeProvider } from 'styled-components';
import theming from '../src/Theming/creator.theme';
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';
import { Provider } from 'react-redux';
import store from '../src/store';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: { ...themes.dark, appBg: 'black' },
    light: { ...themes.normal, appBg: 'white' }
  }
};

export const decorators = [renderStory => <Provider store={store}><ThemeProvider theme={theming(useDarkMode())}>{ renderStory() }</ThemeProvider></Provider>];
