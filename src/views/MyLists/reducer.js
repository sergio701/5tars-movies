
import { types } from './actions';

export const initialState = {
  movies: [],
  status: ''
};

export const reducer = (state = initialState, { type, movies } = {}) => {
  switch (type) {
    case types.FETCHING:
      return { ...initialState, status: types.FETCHING };
    case types.SUCCESS:
      return { ...state, status: types.SUCCESS, movies };
    case types.ERROR:
      return { ...state, status: types.ERROR, movies: [] };
    default:
      return state;
    }
};

export default reducer;