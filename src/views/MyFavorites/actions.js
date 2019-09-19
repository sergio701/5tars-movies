export const types = {
    FETCHING: 'FETCHING',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR'
};

export const actions = {
    fetching: query => ({ type: types.FETCHING, query }),
    success: movies => ({ type: types.SUCCESS, movies }),
    error: () => ({ type: types.ERROR })
};

export default actions;