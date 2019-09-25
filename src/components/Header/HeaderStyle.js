
const HeaderStyle = theme => ({
    root: {
        position: 'fixed',
        top: 0,   
        width: '100%',
        zIndex: 100
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
      logo: {
        width: 'auto',
        height: '55px'
      },
      link: {
        textDecoration: 'none'
      },
      listButton: {
        //background: 'linear-gradient(90deg, #4caf50, #ff5722)',
      }
  });
  
  
  export default HeaderStyle;