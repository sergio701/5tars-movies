
const SearchStyle = theme => ({
  root: {
    flexGrow: 1,    
  },
  container: {
    position: 'relative',
    display: 'inline-flex',
    width: 'calc(100% - 48px)',
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
  searchButton: {
    borderRadius: '50%',
    height: '48px',
    width: '48px',
    minWidth: 0
  },
  searchIcon: {
    width: "24px",
    height: "24px",
    color: "inherit"
  },
  input: {
      width: '100%'
  }
});


export default SearchStyle;