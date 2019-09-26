import React, { useReducer, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import MoviesList from "components/MoviesList/MoviesList";
import {  
  getFavorites,
  removeFromFavorites,
  getWatchLater,
  removeFromWatchLater
} from "modules/tmdb-client";
import { reducer, initialState } from "./reducer";
import actions from './actions';
import styles from "./MyListsStyle.js";
import { green, deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles(styles);

const MyLists = props => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  const getFavoritesMovies= async () => {
    dispatch(actions.fetching());
    try {
        const response = await getFavorites();
        dispatch(actions.favorites(response.results));
    } catch (e) {
        dispatch(actions.error());
    }  
  };

  const removeFavorite = async (id) => {
    try {
      const response = await removeFromFavorites(id);
      dispatch(actions.removeFavorite(response.results[0].media_id));
  } catch (e) {
      dispatch(actions.error());
  } 
  };

  const getWatchLaterMovies = async () => {
    dispatch(actions.fetching());
    try {
        const response = await getWatchLater();
        dispatch(actions.watchLater(response.results));
    } catch (e) {
        dispatch(actions.error());
    }  
  };

  const removeWatchLater = async (id) => {
    try {
      const response = await removeFromWatchLater(id);
      dispatch(actions.removeWatchLater(response.results[0].media_id));
  } catch (e) {
      dispatch(actions.error());
  } 
  };

  useEffect(() => {
    getFavoritesMovies();
    getWatchLaterMovies();
  }, []);
  return (
    <div>
      <Header />
      <Container className={classes.mainContainer}>
        <MoviesList
          title="My Favorites"
          movies={state.favorites}
          removeFromList={removeFavorite}
          color={deepOrange[500]}
          deleteMode={true}
        /> 
        <MoviesList
          title="Watch Later"
          movies={state.watchLater}
          removeFromList={removeWatchLater}
          color={green[500]}
        />
      </Container>
      <Footer />
    </div>
  );
}

export default MyLists;

