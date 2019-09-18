const baseUrl = 'http://image.tmdb.org/t/p/w185/';

const getMovieImagesUrls = movie => ({
  backdropUrl : movie.backdrop_path ? `${baseUrl}${movie.backdrop_path}` : null,
  posterUrl : movie.poster_path ? `${baseUrl}${movie.poster_path}` : null
});



export {
  getMovieImagesUrls
};