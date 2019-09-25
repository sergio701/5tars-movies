export const types = {
  FETCHING: 'FETCHING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
};

export const actions = {
  fetching: () => ({ type: types.FETCHING }),
  success: movies => ({ type: types.SUCCESS, movies }),
  error: () => ({ type: types.ERROR })
};

export default actions;