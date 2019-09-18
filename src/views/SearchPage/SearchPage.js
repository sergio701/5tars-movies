import React, { useReducer } from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/core components
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
// @material-ui/icons
import Icon from "@material-ui/core/Icon";
// core components
import Search from "components/Search/Search";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
// modules
import { getMoviesSearch } from "modules/tmdbClient";
import { reducer, initialState } from "./reducer";
import actions from './actions';
// styles
import styles from "./SearchPageStyle.js";
import MovieCard from "components/MovieCard/MovieCard";

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
      <Header
        className={classNames(classes.header)}
        brand="5tars Movies"
        rightLinks={
          <List className={classes.list}>            
            <ListItem className={classes.listItem}>
              <Button
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                <Icon className={classes.icons}>start</Icon> My Favorites
              </Button>
            </ListItem>
          </List>
        }
        fixed
        color="dark"
        changeColorOnScroll={{
          height: 30,
          color: "primary"
        }}
      />

      <Container className={classes.mainContainer}>
        <Grid container>
          <Grid item xs={9}>
            <Search onSearch={getMovies} />   
          </Grid>
        </Grid>
        <Grid container >
          {state.movies.map(movie => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
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

