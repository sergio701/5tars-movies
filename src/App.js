import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import SearchPage from "views/SearchPage/SearchPage";
import MyLists from "views/MyLists/MyLists";
import theme from "./AppStyle";

const hist = createBrowserHistory();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={hist}>
        <Switch>
          <Route path="/MyLists" component={MyLists} />
          <Route path="/" component={SearchPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
