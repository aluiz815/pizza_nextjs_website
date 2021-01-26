import axios from 'axios'

const api = axios.create({
  baseURL: `${process.env.BASE_URL}:3000/api/`
});

export default api;