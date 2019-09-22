import React, { useReducer, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from '@material-ui/core/GridList';
import Container from '@material-ui/core/Container';
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import MovieCard from "components/MovieCard/MovieCard";
import Typography from '@material-ui/core/Typography';
import {
  addToFavorites,
  getFavorites,
  removeFromFavorites
} from "modules/tmdb-client";
import { reducer, initialState } from "./reducer";
import actions from './actions';
import styles from "./MyFavoritesStyle.js";

const useStyles = makeStyles(styles);

const MyFavorites = props => {
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
        <Typography variant='h6'>
          My Favorites
        </Typography>
        <GridList className={classes.gridList} cellHeight='auto' spacing={0}>
          {state.movies.map((movie, i) => (
            <div className={classes.movieCard} key={i}>
              <MovieCard 
                movie={movie}
                isFavorite={isFavorite(movie.id)} 
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
              /> 
            </div>            
          ))}
        </GridList>
      </Container>
      <Footer />
    </div>
  );
}

export default MyFavorites;

