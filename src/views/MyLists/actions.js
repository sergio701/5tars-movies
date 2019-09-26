export const types = {
  FETCHING: 'FETCHING',
  FAVORITES: 'FAVORITES',
  REMOVE_FAVORITE: 'REMOVE_FAVORITE',
  WATCH_LATER: 'WATCH_LATER',
  REMOVE_WATCH_LATER: 'REMOVE_WATCH_LATER',
  ERROR: 'ERROR'
};

export const actions = {
  fetching: () => ({ type: types.FETCHING }),
  favorites: favorites => ({ type: types.FAVORITES, favorites }),
  removeFavorite: id => ({ type: types.REMOVE_FAVORITE, id }),
  watchLater: watchLater => ({ type: types.WATCH_LATER, watchLater }),
  removeWatchLater: id => ({ type: types.REMOVE_WATCH_LATER, id }),
  error: () => ({ type: types.ERROR })
};

export default actions;