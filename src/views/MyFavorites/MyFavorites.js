import React, { useReducer, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import Container from '@material-ui/core/Container';
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import MovieCard from "components/MovieCard/MovieCard";
import Typography from '@material-ui/core/Typography';
import { getMoviesSearch } from "modules/tmdbClient";
import { reducer, initialState } from "./reducer";
import actions from './actions';
import styles from "./MyFavoritesStyle.js";

const useStyles = makeStyles(styles);

const MyFavorites = props => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

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
  useEffect(() => {
    getMovies('martian');
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
            <div className={classes.movieCard}>
              <MovieCard movie={movie}/> 
            </div>            
          ))}
        </GridList>
      </Container>
      <Footer />
    </div>
  );
}

export default MyFavorites;

