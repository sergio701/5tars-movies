import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Autosuggest from "components/Search/Search.js";
import Search from "@material-ui/icons/Search";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
import HeaderLinks from "components/Header/HeaderLinks.js";
import { getMoviesSearch } from "modules/tmdbClient.js";

import styles from "./SearchPageStyle.js";

const useStyles = makeStyles(styles);

const fetchMovies = query => {
  getMoviesSearch(query)
    .then((response) => {
      console.log(response);
    })
    .catch((error) =>{
      console.error(error);
    })
};

const SearchPage = props => {
  const classes = useStyles();
  const { ...rest } = props;
  fetchMovies('aven');
  return (
    <div>
      <Header
        className={classNames(classes.header)}
        brand="5tars Movies"
        leftLinks={
          <div>
            <Autosuggest />            
          </div>
        }
        rightLinks={
          <List className={classes.list}>            
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
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
          height: 400,
          color: "rose"
        }}
        {...rest}
      />
      <div className={classes.container}>
        <GridContainer>
          <GridItem>
            
          </GridItem>
        </GridContainer>
      </div>

      <div className={classNames(classes.main, classes.mainContent)}>
          MAIN CONTENT
      </div>
      <Footer />
    </div>
  );
}

export default SearchPage;

