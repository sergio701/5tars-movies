import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import SearchPage from "views/SearchPage/SearchPage";
import MyFavorites from "views/MyFavorites/MyFavorites";
import { makeStyles } from '@material-ui/core/styles';
import theme from "./AppStyle";

const hist = createBrowserHistory();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={hist}>
        <Switch>
          <Route path="/MyFavorites" component={MyFavorites} />
          <Route path="/" component={SearchPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
