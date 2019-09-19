import React, { useReducer } from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Container from '@material-ui/core/Container';
import Icon from "@material-ui/core/Icon";
import Search from "components/Search/Search";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import MovieCard from "components/MovieCard/MovieCard";
import { getMoviesSearch } from "modules/tmdbClient";
import { reducer, initialState } from "./reducer";
import actions from './actions';
import styles from "./SearchPageStyle.js";

const useStyles = makeStyles(styles);

const SearchPage = props => {
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
  return (
    <div>
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
            <MovieCard movie={movie} /> 
          </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default SearchPage;

