const TOKEN_KEY = '_hv-m_t472';

export default {
  getToken: () => {
    return localStorage.getItem(TOKEN_KEY);
  },
  isAuthenticated: () => {
    return Boolean(localStorage.getItem(TOKEN_KEY));
  },
  logIn: (token) => {
    localStorage.setItem(TOKEN_KEY, token);
  },
  logOut: () => {
    localStorage.removeItem(TOKEN_KEY);
  },
};
