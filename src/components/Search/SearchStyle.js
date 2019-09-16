
const SearchStyle = theme => ({
  root: {
    flexGrow: 1,    
  },
  container: {
    position: 'relative',
    display: 'inline-flex',
    width: 'calc(100% - 45px)',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
    marginTop: '50px'
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  divider: {
    height: theme.spacing(2),
  },
  searchIcon: {
    width: "20px",
    height: "20px",
    color: "inherit"
  },
  input: {
      width: '100%'
  }
});


export default SearchStyle;