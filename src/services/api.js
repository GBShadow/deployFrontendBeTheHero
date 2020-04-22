import axios from 'axios';

const api = axios.create({
  baseURL: 'https://shadow-backend-bethehero.herokuapp.com',
});

export default api;
