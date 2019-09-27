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

  it('should update favorites on FAVORITES action', () => {
    const favorites = [1,2,3];
    state = reducer(undefined, actions.favorites(favorites));
    expect(state).toEqual({ ...initialState, favorites });
  });

  it('should update watchLater on WATCH_LATER action', () => {
    const watchLater = [1,2,3];
    state = reducer(undefined, actions.watchLater(watchLater));
    expect(state).toEqual({ ...initialState, watchLater,});
  });

  it('should update status on ERROR action', () => {
    state = reducer(undefined, actions.error());
    expect(state).toEqual({ ...initialState, status: types.ERROR });
  });
});
