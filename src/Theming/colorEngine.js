import hasVisitedBefore from '../Helpers/hasVisitedBefore';

export default {
  initializer: () => {
    if (hasVisitedBefore.get()) {
      hasVisitedBefore.set();
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    return JSON.parse(localStorage.getItem('isDark'));
  },
};
