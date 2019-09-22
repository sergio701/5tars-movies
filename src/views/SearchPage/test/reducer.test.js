import { reducer, initialState } from '../reducer';
import { actions, types } from '../actions';

describe('SearchPage reducer', () => {
  let state;

  beforeEach(() => {
    state = null;
  });

  it('should returns the initial state', () => {    
    state = reducer();
    expect(state).toEqual(initialState);
  });

  it('should update status on FETCHING action', () => {
    const query = "query";  
    state = reducer(initialState, actions.fetching(query));
    expect(state).toEqual({ ...initialState, status: types.FETCHING, query });
  });

  it('should update movies on SUCCES action', () => {
    const movies = [1,2,3];
    state = reducer(initialState, actions.success(movies));
    expect(state).toEqual({ ...initialState, status: types.SUCCESS, movies });
  });

  it('should empty movies on ERROR action', () => {
    const movies = [1,2,3];
    state = reducer(initialState, actions.success(movies));
    state = reducer(state, actions.error());
    expect(state).toEqual({ ...initialState, movies: [], status: types.ERROR });
  });
});
