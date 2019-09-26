import React, { useReducer, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Search from "components/Search/Search";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import MovieCard from "components/MovieCard/MovieCard";
import CardButton from "components/CardButton/CardButton";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { deepOrange, green } from '@material-ui/core/colors';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { 
  getMoviesSearch,
  addToFavorites,
  getFavorites,
  removeFromFavorites,
  getWatchLater,
  addToWatchLater,
  removeFromWatchLater
} from "modules/tmdb-client";
import { reducer, initialState } from "./reducer";
import actions from './actions';
import styles from "./SearchPageStyle.js";

const useStyles = makeStyles(styles);

const SearchPage = props => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [favorites, setFavorites] = useState(new Set());
  const [watchLater, setWatchLater] = useState(new Set());

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

  const getWatchLaterMovies = async () => {
    try {
        const response = await getWatchLater();
        const wl = response.results.map(movie => {return movie.id});
        setWatchLater(new Set(wl));
    } catch (e) {
        dispatch(actions.error());
    }  
  };

  const addWatchLater = (id) => {
    addToWatchLater(id).then(() => {
      let added = new Set(watchLater);
      added.add(id);
      setWatchLater(added);
    });
  };

  const removeWatchLater = (id) => {
    removeFromWatchLater(id).then(() => {
      let removed = new Set(watchLater);
      removed.delete(id);
      setWatchLater(removed);
    });;
  };

  const isWatchLater = id => {
    if(watchLater)
      return watchLater.has(id); 
    else
      return false    
  }

  useEffect(() => {
    getFavoritesMovies();
    getWatchLaterMovies();
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
              toolButtons={
                <>
                <CardButton 
                  help="Favorites"
                  icon={<FavoriteIcon />}
                  color={deepOrange[500]}
                  active={isFavorite(movie.id)}
                  onTurnOn={()=>{addFavorite(movie.id)}}
                  onTurnOff={()=>{removeFavorite(movie.id)}}
                />
                <CardButton 
                  help="Watch Later"
                  icon={<VisibilityIcon />}
                  color={green[500]}
                  active={isWatchLater(movie.id)}
                  onTurnOn={()=>{addWatchLater(movie.id)}}
                  onTurnOff={()=>{removeWatchLater(movie.id)}}
                />
                </>
              }
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

