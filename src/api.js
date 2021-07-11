import axios from 'axios';
import auth from './features/auth/auth';

const api = axios.create({
  baseURL: 'https://hey-visit-me.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = auth.getToken();
  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

export default api;
