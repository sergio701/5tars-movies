
import { types } from './actions';

export const initialState = {
  query: '',
  movies: [],
  status: '',
  favorites: []
};

export const reducer = (state = initialState, { type, query, movies, favorites } = {}) => {
  switch (type) {
    case types.FETCHING:
      return { ...initialState, status: types.FETCHING, query };
    case types.SUCCESS:
      return { ...state, status: types.SUCCESS, movies };
    case types.FAVORITES:
      return { ...state, favorites };
    case types.ERROR:
      return { ...state, status: types.ERROR, movies: [] };
    default:
      return state;
    }
};

export default reducer;