export const types = {
    FETCHING: 'FETCHING',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    FAVORITES: 'FAVORITES'
};

export const actions = {
    fetching: query => ({ type: types.FETCHING, query }),
    success: movies => ({ type: types.SUCCESS, movies }),
    error: () => ({ type: types.ERROR }),
    favorites: favorites => ({ type: types.FAVORITES, favorites })
};

export default actions;