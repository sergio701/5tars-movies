
const baseUrl = 'https://api.themoviedb.org/3/search/movie?api_key=d0044470246511248e0bfa1ed0a29b21';

const getMoviesSearch = (query = '') => fetch(`${baseUrl}&query=${query}`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}).then((response) => response.json());



export {
  getMoviesSearch
};