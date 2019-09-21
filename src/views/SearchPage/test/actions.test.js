import { actions, types } from '../actions';

describe('SearchPage actions', () => {
  it('should returns fetching action', () => {
    let expected = {
      type: types.FETCHING,
      query: 'test'
    };

    expect(actions.fetching('test')).toEqual(expected);
  });    
});