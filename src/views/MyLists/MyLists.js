import React, { useReducer, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import MoviesList from "components/MoviesList/MoviesList";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
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
  const [activeTab, setActiveTab] = useState(0);

  const handleTabsChange = (event, newValue) => {
    setActiveTab(newValue);
  };

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
        <Paper className={classes.root}>
          <Tabs value={activeTab} onChange={handleTabsChange} indicatorColor='primary' centered>
            <Tab label="My Favorites" />
            <Tab label="Watch Later"/>
          </Tabs>
        </Paper>
        <Box className={classes.tabsContent} color="primary.main">
          {(() => {
            switch(activeTab) {
              case 0:
                return <MoviesList
                  title="My Favorites"
                  movies={state.favorites}
                  removeFromList={removeFavorite}
                  color={deepOrange[500]}
                  deleteMode={true}
                />;
              case 1:
                return <MoviesList
                  title="Watch Later"
                  movies={state.watchLater}
                  removeFromList={removeWatchLater}
                  color={green[500]}
                />
              default:
                return null;
            }
          })()}
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default MyLists;

