
const HeaderStyle = theme => ({
    root: {
        position: 'fixed',
        top: 0,   
        width: '100%',
        zIndex: 100
      },
      moviesIcon: {
        marginLeft: theme.spacing(1),
      },
      title: {
        flexGrow: 1,
      },
      logo: {
        width: 'auto',
        height: '35px',
        [theme.breakpoints.up('sm')]: {
          height: '55px',
        },
      },
      link: {
        textDecoration: 'none'
      }
  });
  
  
  export default HeaderStyle;