export default {
  get: () => !JSON.parse(localStorage.getItem('hasVisitedBefore')),
  set: () => localStorage.setItem('hasVisitedBefore', JSON.stringify(true)),
};
