import React, { useReducer, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import MoviesList from "components/MoviesList/MoviesList";
import {
  addToFavorites,
  getFavorites,
  removeFromFavorites
} from "modules/tmdb-client";
import { reducer, initialState } from "./reducer";
import actions from './actions';
import styles from "./MyListsStyle.js";
import { green, deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles(styles);

const MyLists = props => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [favorites, setFavorites] = useState(new Set());

  const getMovies = async () => {
    dispatch(actions.fetching());
    try {
        const response = await getFavorites();
        dispatch(actions.success(response.results));
        const favs = response.results.map(movie => {return movie.id});
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
    getMovies();
  }, []);
  return (
    <div>
      <Header />
      <Container className={classes.mainContainer}>
        <MoviesList
          title="My Favorites"
          movies={state.movies}
          addToList={addFavorite}
          removeFavorite={removeFavorite}
          color={deepOrange[500]}
        /> 
        <MoviesList
          title="Watch Later"
          movies={state.movies}
          addToList={addFavorite}
          removeFromList={removeFavorite}
          color={green[500]}
        />
      </Container>
      <Footer />
    </div>
  );
}

export default MyLists;

