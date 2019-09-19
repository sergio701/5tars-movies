import React from 'react';
import PropTypes from "prop-types";
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Search from "@material-ui/icons/Search";
import { makeStyles } from '@material-ui/core/styles';
import { getMoviesSearch } from "modules/tmdbClient";

import styles from "./SearchStyle.js";

const useStyles = makeStyles(styles);

const renderInputComponent = inputProps => {
  const { classes, inputRef = () => {}, ref, search, ...other } = inputProps;
  
  const onKeyPress = event => {
    if (event.charCode === 13) {
      event.target.blur();
      search();
    } 
  };

  return (
    <TextField
      fullWidth
      onKeyPress={onKeyPress}
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input,
        },
      }}
      {...other}
    />
  );
}

const renderSuggestion = (suggestion, { query, isHighlighted }) => {
  const matches = match(suggestion.title, query);
  const parts = parse(suggestion.title, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map(part => (
          <span key={part.text} style={{ fontWeight: part.highlight ? 400 : 200 }}>
            {part.text}
          </span>
        ))}
      </div>
    </MenuItem>
  );
}

const getSuggestionValue = suggestion => {
  return suggestion.title;
}

const IntegrationAutosuggest = ({ onSearch }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    single: '',
    popper: '',
  });

  const [stateSuggestions, setSuggestions] = React.useState([]);

  const handleSuggestionsFetchRequested = ({ value }) => {
    getMoviesSearch(value)
      .then((response) => {
        setSuggestions(response.results.slice(0, 10));
      })
      .catch((error) => {
        setSuggestions([]);
      });
  };

  const handleSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const handleChange = name => (event, { newValue }) => {
    setState({
      ...state,
      [name]: newValue,
    });
  };

  const autosuggestProps = {
    renderInputComponent,
    suggestions: stateSuggestions,
    onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
    onSuggestionsClearRequested: handleSuggestionsClearRequested,
    getSuggestionValue,
    renderSuggestion,
    onSuggestionSelected: (e, s) => {
        console.log({e, s});
    }
  };

  return (
    <div className={classes.root}>
      <Autosuggest
        {...autosuggestProps}
        inputProps={{
          classes,
          label: 'Find your movie',
          placeholder: 'Type your movie',
          value: state.single,
          onChange: handleChange('single'),
          search: ()=>{onSearch(state.single)},
        }}
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
          input: classes.input
        }}
        renderSuggestionsContainer={options => (
          <Paper {...options.containerProps} square>
            {options.children}
          </Paper>
        )}
      />
      <Button variant="contained" color="primary" className={classes.searchButton} onClick={(e) => {onSearch(state.single)}}>
        <Search className={classes.searchIcon} />
      </Button>    
    </div>
  );
};

IntegrationAutosuggest.propTypes = {
    onSearch: PropTypes.func
}

export default IntegrationAutosuggest;