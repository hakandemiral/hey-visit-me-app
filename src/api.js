import axios from 'axios';
import auth from './features/auth/auth';

const api = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:3001',
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
