import axios from 'axios';

const API_KEY = 'fff60a2368eb2d7a2fe42a3f5300dcc4';
const baseUrl = 'https://api.themoviedb.org/3/';

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;
