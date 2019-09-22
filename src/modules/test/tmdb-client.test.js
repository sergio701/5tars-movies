import {
  getMoviesSearch,
  getFavorites,
  addToFavorites,
  removeFromFavorites
} from '../tmdb-client';


describe('testing api', () => {
  beforeEach(() => {
    fetch.resetMocks();
  })
 
  it('should calls tmdb to serch movies and returns data', () => {
    let query = "test"
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    getMoviesSearch(query).then(res => {
      expect(res.data).toEqual('12345')
    });
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0].includes(query)).toBe(true);
  });

  it('should calls tmdb to get favorites list and returns data', () => {
    let listId = "121801"
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    getFavorites().then(res => {
      expect(res.data).toEqual('12345')
    });
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0].includes(listId)).toBe(true);
  });

  it('should calls tmdb to add a movie to favorites', () => {
    let movieId = "123456"
    fetch.mockResponseOnce(JSON.stringify({ data: movieId }));
    addToFavorites(movieId).then(res => {
      expect(res.data).toEqual(movieId)
    });
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][1].body.includes(movieId)).toBe(true);
  });

  it('should calls tmdb to remove a movie from favorites', () => {
    let movieId = "123456"
    fetch.mockResponseOnce(JSON.stringify({ data: movieId }));
    removeFromFavorites(movieId).then(res => {
      expect(res.data).toEqual(movieId)
    });
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][1].body.includes(movieId)).toBe(true);
  });
})