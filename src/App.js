import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
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
          <Route path="/Favorites" component={SearchPage} />
          <Route path="/" component={SearchPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
