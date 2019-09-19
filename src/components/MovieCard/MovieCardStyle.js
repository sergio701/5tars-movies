import { blueGrey } from '@material-ui/core/colors';

const MovieCardStyle = theme => ({
    root: {
      textAlign: 'center',
      marginTop: 30
    },
    card: {
      width: 250,
      display: 'inline-block',
      textAlign: 'left'
    },
    header: {
      position: 'relative'
    },
    release: {
      position: 'absolute',
      color: blueGrey[500],
      top: 16,
      right: 16
    },
    image: {
      height: '100%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    scoreContainer:{
      position: 'relative'
    },
    scoreLabel: {
      fontSize: 14,
      position: 'absolute',
      top: '35%',
      width: '100%',
      textAlign: 'center',
      fontWeight: 'bold',
      color: theme.palette.primary.main
    },
    scoreIcon: {
      width: 64,
      height: 64
    },
    backdropIma: {
      backgroundColor: blueGrey[300],
      height: 120,
      marginTop: 10
    },
    posterIma: {
      backgroundColor: blueGrey[300],
      height: 350,
    },
    collapseContent: {
      paddingTop: 0
    }
  });
  
  
  export default MovieCardStyle;