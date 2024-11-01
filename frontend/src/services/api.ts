
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Change port if necessary
});

export default api;
