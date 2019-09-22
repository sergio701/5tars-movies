import { getMovieImagesUrls } from '../movie-utils';

describe('Movie Utils Module', () => {
  let mock;

  beforeEach(()=>{
    mock = {
      backdrop_path: 'backdrop',
      poster_path: 'poster'
    }
  });

  it('should returns the absolute url of poster backdrop of a movie', () => {
    let expected = {
      backdropUrl : 'http://image.tmdb.org/t/p/w185/backdrop',
      posterUrl : 'http://image.tmdb.org/t/p/w185/poster'
    };
    let urls = getMovieImagesUrls(mock);

    expect(urls).toEqual(expected);
  }); 
  
  it('should returns null urls when there is not backdrop_path or poster_path', () => {
    let expected = {
      backdropUrl : null,
      posterUrl : null
    };
    mock.backdrop_path = undefined;
    mock.poster_path = undefined;
    let urls = getMovieImagesUrls(mock);

    expect(urls).toEqual(expected);
  }); 
});