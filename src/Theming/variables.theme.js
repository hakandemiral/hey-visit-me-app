const theme = {
  darkTheme: {
    background: '#232F39',
    paper: '#293742',
    heading: '#FFFFFF',
    bodyText: '#E6E6E6',
    brandMoreLight: '#2F3F4C',
    secondaryText: '#A5A1A1',
    brandLight: '#465E72',
    borderDivider: '#635F5F',
    dropDown10: 'rgba(41, 55, 66, 0.8)',
    dialogBackground: 'rgba(20, 20, 20, 0.5)',
    authPageGraient: `
    background: rgb(113,119,189);
    background: radial-gradient(circle, rgba(113,119,189,1) 0%, rgba(107,125,159,1) 26%, rgba(131,105,181,1) 72%);`,
  },
  lightTheme: {
    background: '#FAFAFA',
    paper: '#FFFFFF',
    heading: '#0A0A0A',
    bodyText: '#494646',
    brandMoreLight: '#F1F5F9',
    secondaryText: '#878282',
    brandLight: '#DCE2F9',
    borderDivider: '#B9B6B6',
    dropDown10: 'rgba(255, 255, 255, 0.8)',
    dialogBackground: 'rgba(245, 245, 245, 0.5)',

    authPageGraient: `
    background: rgb(201,205,247);
    background: radial-gradient(circle, rgba(201,205,247,1) 0%, rgba(203,218,248,1) 26%, rgba(234,227,247,1) 72%);`,
  },
  constantColors: {
    brand: '#6F96B6',
    white: '#FFFFFF',
    lightPurple: '#F0E5FA',
    green: '#3BB055',
    red: '#B13E3E',
    purple: '#A982E1',
    purple2: '#BB93D5',
    pink: '#EEA2D4',
    pink2: '#CF76A4',
    placeholder: '#A5A1A1',
    brandDisabled: '#D1DAE0',
    yellow: '#EFD287',
  },
  typography: {
    heading: {
      regular24: '400 1.5rem/135% Exo',
      regular20: '400 1.25rem/140% Exo',
      regular16: '400 1rem/150% Exo',
      medium32: '500 2rem/125% Exo',
      medium28: '500 1.75rem/130% Exo',
      medium24: '500 1.5rem/135% Exo',
      medium20: '500 1.25rem/140% Exo',
    },
    body: {
      regular12: '400 0.75rem/162.5% Inter',
      regular14: '400 0.875rem/155% Inter',
      regular16: '400 1rem/150% Inter',
      regular20: '400 1.25rem/140% Inter',
      regular24: '400 1.5rem/135% Inter',
      medium12: '500 0.75rem/162.5% Inter',
      medium14: '500 0.875rem/155% Inter',
      medium16: '500 1rem/150% Inter',
      medium20: '500 1.25rem/140% Inter',
      medium24: '500 1.5rem/135% Inter',
      semibold12: '600 0.75rem/162.5% Inter',
      semibold16: '600 1rem/150% Inter',
    },
  },
  filters: {
    softShadow: 'drop-shadow(0px 0.125rem 0.5rem rgba(0, 0, 0, 0.1))',
    photoInnerShadow: 'inset 0px 0.125rem 0.25rem rgba(0, 0, 0, 0.25);',
    innerBoxShadow: 'inset 0px 1px 8px rgba(0, 0, 0, 0.16);',
  },
};

export default theme;
