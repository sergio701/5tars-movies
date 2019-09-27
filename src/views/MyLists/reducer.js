
import { types } from './actions';

export const initialState = {
  favorites: [],
  watchLater: [],
  status: ''
};

export const reducer = (state = initialState, { type, favorites, watchLater, id } = {}) => {
  let change
  switch (type) {
    case types.FETCHING:
      return { ...initialState, status: types.FETCHING };
    case types.FAVORITES:
      return { ...state, favorites };
    case types.REMOVE_FAVORITE:
        change = state.favorites.filter(movie => movie.id !== id);
      return { ...state, favorites: change };
    case types.WATCH_LATER:
      return { ...state, watchLater };
    case types.REMOVE_WATCH_LATER:
      change = state.watchLater.filter(movie => movie.id !== id);
      return { ...state, watchLater: change };  
    case types.ERROR:
      return { ...state, status: types.ERROR };
    default:
      return state;
    }
};

export default reducer;