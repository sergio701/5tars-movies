import { actions, types } from '../actions';

describe('MyLists actions', () => {
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
  
  it('should returns success action', () => {
    const movies = "movies";
    const expected = {
      type: types.SUCCESS,
      movies
    };
    expect(actions.success(movies)).toEqual(expected);
  }); 
});
