import axios from 'axios';

const GIPHY_API_KEY = 'N0ENKlcnDzHD95m8unImE8afTScUj3Pj';
const giphyHttp = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  params: {
    api_key: GIPHY_API_KEY,
  },
});

export const fetchGifs = (searchTerm) => {
  return giphyHttp.get('/search', { params: { q: searchTerm } });
};