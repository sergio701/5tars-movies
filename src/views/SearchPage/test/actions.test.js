import { actions, types } from '../actions';

describe('SearchPage actions', () => {
  it('should returns fetching action', () => {
    let expected = {
      type: types.FETCHING,
      query: 'test'
    };
    expect(actions.fetching('test')).toEqual(expected);
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