import { reducer, initialState } from '../reducer';
import { actions, types } from '../actions';

describe('MyLists reducer', () => {
  let state;

  beforeEach(() => {
    state = null;
  });

  it('should returns the initial state', () => {    
    state = reducer();
    expect(state).toEqual(initialState);
  });

  it('should update status on FETCHING action', () => {    
    state = reducer(null, actions.fetching());
    expect(state).toEqual({ ...initialState, status: types.FETCHING });
  });

  it('should update movies on SUCCES action', () => {
    const movies = [1,2,3];
    state = reducer(null, actions.success(movies));
    expect(state).toEqual({ ...initialState, movies, status: types.SUCCESS });
  });

  it('should empty movies on ERROR action', () => {
    const movies = [1,2,3];
    state = reducer(null, actions.success(movies));
    state = reducer(state, actions.error());
    expect(state).toEqual({ ...initialState, movies: [], status: types.ERROR });
  });
});
