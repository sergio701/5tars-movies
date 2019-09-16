import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.8.0";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import SearchPage from "views/SearchPage/SearchPage.js";

const hist = createBrowserHistory();

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={hist}>
        <Switch>
          <Route path="/landing-page" component={LandingPage} />
          <Route path="/profile-page" component={ProfilePage} />
          <Route path="/login-page" component={LoginPage} />
          <Route path="/Components" component={Components} />
          <Route path="/" component={SearchPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
