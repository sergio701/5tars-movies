import { actions, types } from '../actions';

describe.only('MyLists actions', () => {
  it('should returns fetching action', () => {
    const expected = {
      type: types.FETCHING
    };
    expect(actions.fetching()).toEqual(expected);
  });
  
  it('should returns error action', () => {
    const expected = {
      type: types.ERROR
    };
    expect(actions.error()).toEqual(expected);
  });
  
  it('should returns favorites action', () => {
    const favorites = "movies";
    const expected = {
      type: types.FAVORITES,
      favorites
    };
    expect(actions.favorites(favorites)).toEqual(expected);
  });
  
  it('should returns watchLater action', () => {
    const watchLater = "movies";
    const expected = {
      type: types.WATCH_LATER,
      watchLater
    };
    expect(actions.watchLater(watchLater)).toEqual(expected);
  });

  it('should returns removeFavorite action', () => {
    const id = "1234";
    const expected = {
      type: types.REMOVE_FAVORITE,
      id
    };
    expect(actions.removeFavorite(id)).toEqual(expected);
  });
  
  it('should returns removeWatchLater action', () => {
    const id = "1234";
    const expected = {
      type: types.REMOVE_WATCH_LATER,
      id
    };
    expect(actions.removeWatchLater(id)).toEqual(expected);
  }); 
});
