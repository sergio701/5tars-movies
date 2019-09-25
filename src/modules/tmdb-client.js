
const config = {  
  apiUrl: {
    v3: 'https://api.themoviedb.org/3/',
    v4: 'https://api.themoviedb.org/4/'
  },
  myFavoritesListId: '121801',
  watchLaterListId: '122480',
  accessToke: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1Njg5NTUxMDEsInN1YiI6IjVkN2Q2YjNlZjA2NDdjMDY2MjliOThiNCIsImp0aSI6IjE1NTc3ODMiLCJhdWQiOiJkMDA0NDQ3MDI0NjUxMTI0OGUwYmZhMWVkMGEyOWIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCIsImFwaV93cml0ZSJdLCJ2ZXJzaW9uIjoxfQ.SiUFODiBfE1LhwT2WpKX9-gIGT_-F1fBlnkv6qhx_74',

};

const _apiUrls = {
  getWatchLater: `${config.apiUrl.v4}/list/${config.watchLaterListId}`,
  addToWatchLater: `${config.apiUrl.v4}/list/${config.watchLaterListId}/items`,
  removeFromWatchLater: `${config.apiUrl.v4}/list/${config.watchLaterListId}/items`
};
const baseUrl = 'https://api.themoviedb.org/3/search/movie?api_key=d0044470246511248e0bfa1ed0a29b21';
const favoritesUrl = 'https://api.themoviedb.org/4/list/121801';
const addFavoriteUrl = 'https://api.themoviedb.org/4/list/121801/items';

const getMoviesSearch = (query = '') => fetch(`${baseUrl}&query=${query}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}).then((response) => response.json());

const getFavorites = () => fetch(favoritesUrl, {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1Njg5NTUxMDEsInN1YiI6IjVkN2Q2YjNlZjA2NDdjMDY2MjliOThiNCIsImp0aSI6IjE1NTc3ODMiLCJhdWQiOiJkMDA0NDQ3MDI0NjUxMTI0OGUwYmZhMWVkMGEyOWIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCIsImFwaV93cml0ZSJdLCJ2ZXJzaW9uIjoxfQ.SiUFODiBfE1LhwT2WpKX9-gIGT_-F1fBlnkv6qhx_74',
    'Content-Type': 'application/json'
  }
}).then((response) => response.json());

const addToFavorites = id => fetch(addFavoriteUrl, {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1Njg5NTUxMDEsInN1YiI6IjVkN2Q2YjNlZjA2NDdjMDY2MjliOThiNCIsImp0aSI6IjE1NTc3ODMiLCJhdWQiOiJkMDA0NDQ3MDI0NjUxMTI0OGUwYmZhMWVkMGEyOWIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCIsImFwaV93cml0ZSJdLCJ2ZXJzaW9uIjoxfQ.SiUFODiBfE1LhwT2WpKX9-gIGT_-F1fBlnkv6qhx_74',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    items: [{
      "media_type": "movie",
      "media_id": id
    }]
  })
}).then((response) => response.json());

const removeFromFavorites = id => fetch(addFavoriteUrl, {
  method: 'DELETE',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1Njg5NTUxMDEsInN1YiI6IjVkN2Q2YjNlZjA2NDdjMDY2MjliOThiNCIsImp0aSI6IjE1NTc3ODMiLCJhdWQiOiJkMDA0NDQ3MDI0NjUxMTI0OGUwYmZhMWVkMGEyOWIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCIsImFwaV93cml0ZSJdLCJ2ZXJzaW9uIjoxfQ.SiUFODiBfE1LhwT2WpKX9-gIGT_-F1fBlnkv6qhx_74',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    items: [{
      "media_type": "movie",
      "media_id": id
    }]
  })
}).then((response) => response.json());

const getWatchLater = () => fetch(_apiUrls.getWatchLater, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${config.accessToke}`,
    'Content-Type': 'application/json'
  }
}).then((response) => response.json());

const addToWatchLater = id => fetch(_apiUrls.addToWatchLater, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${config.accessToke}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    items: [{
      "media_type": "movie",
      "media_id": id
    }]
  })
}).then((response) => response.json());

const removeFromWatchLater = id => fetch(_apiUrls.removeFromWatchLater, {
  method: 'DELETE',
  headers: {
    'Authorization': `Bearer ${config.accessToke}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    items: [{
      "media_type": "movie",
      "media_id": id
    }]
  })
}).then((response) => response.json());

export {
  getMoviesSearch,
  getFavorites,
  addToFavorites,
  removeFromFavorites,
  getWatchLater,
  addToWatchLater,
  removeFromWatchLater
};