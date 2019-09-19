
import { types } from './actions';

export const initialState = {
  query: '',
  movies: [],
  status: ''
};

export const reducer = (state = initialState, { type, query, movies } = {}) => {
  switch (type) {
    case types.FETCHING:
      return { ...initialState, status: types.FETCHING, query };
    case types.SUCCESS:
      return { ...state, status: types.SUCCESS, movies };
    case types.ERROR:
      return { ...state, status: types.ERROR, movies: [] };
    default:
      return state;
    }
};

export default reducer;