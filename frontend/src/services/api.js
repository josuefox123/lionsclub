import axios from 'axios';

// Instance Axios configurée pour l'API Backend (Local ou Production Vercel)
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Intercepteur pour injecter automatiquement le token JWT s'il est présent
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token_admin');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
