import React, { useReducer, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Search from "components/Search/Search";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import MovieCard from "components/MovieCard/MovieCard";
import { 
  getMoviesSearch,
  addToFavorites,
  getFavorites,
  removeFromFavorites 
} from "modules/tmdb-client";
import { reducer, initialState } from "./reducer";
import actions from './actions';
import styles from "./SearchPageStyle.js";

const useStyles = makeStyles(styles);

const SearchPage = props => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [favorites, setFavorites] = useState(new Set());

  const getMovies = async (query) => {
    if(query && query.length) {
      dispatch(actions.fetching(query));
      try {
          const response = await getMoviesSearch(query);
          dispatch(actions.success(response.results));
      } catch (e) {
          dispatch(actions.error());
      }
    } else {
      dispatch(actions.success([]));
    }    
  };

  const getFavoritesMovies = async () => {
    try {
        const response = await getFavorites();
        const favs= response.results.map(movie => {return movie.id});
        setFavorites(new Set(favs));
    } catch (e) {
        dispatch(actions.error());
    }  
  };

  const addFavorite = (id) => {
    addToFavorites(id).then(() => {
      let added = new Set(favorites);
      added.add(id);
      setFavorites(added);
    });
  };

  const removeFavorite = (id) => {
    removeFromFavorites(id).then(() => {
      let removed = new Set(favorites);
      removed.delete(id);
      setFavorites(removed);
    });;
  };

  const isFavorite = id => {
    if(favorites)
      return favorites.has(id); 
    else
      return false    
  }

  useEffect(() => {
    getFavoritesMovies();
  }, []);

  return (
    <div className={classes.root}>
      <Header/>
      <Container className={classes.mainContainer}>
        <Grid container>
          <Grid item xs={9}>
            <Search onSearch={getMovies} />   
          </Grid>
        </Grid>
        <Grid container >
          {state.movies.map((movie, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
            <MovieCard 
              movie={movie}
              isFavorite={isFavorite(movie.id)} 
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
            /> 
          </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default SearchPage;

