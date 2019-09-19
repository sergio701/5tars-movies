import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Score from "components/Score/Score";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Tooltip from '@material-ui/core/Tooltip';
import { getMovieImagesUrls } from  "modules/movie-utils";
import StarIcon from '@material-ui/icons/Star';

import styles from "./MovieCardStyle.js";

const useStyles = makeStyles(styles);

const MovieCard = ({ movie }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { backdropUrl, posterUrl } = getMovieImagesUrls(movie);
  const year = movie.release_date ? movie.release_date.slice(0,4) : null;

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <div className={classes.root} >
      <Card className={classes.card}>
        <CardHeader className={classes.header}
          title={
            <>
              <Score score={movie.vote_average} />
              <Typography className={classes.release}>
                {year}
              </Typography> 
              <Typography>
                {movie.title}
              </Typography>
            </>          
          }
        />
        <div className={classes.posterIma}>
          {
            posterUrl ? 
            <CardMedia
              className={classes.image}
              image={posterUrl}
              title="Poster"
            /> : null
          }
        </div>       
        <CardActions disableSpacing>
          <Tooltip title="Add to my favorites">
            <IconButton aria-label="add to favorites">
              <StarIcon />
            </IconButton>
          </Tooltip>         
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded}>
          <CardContent className={classes.collapseContent}>
            <Typography variant='caption'>
              {movie.overview}
            </Typography>            
              {
                backdropUrl ?
                <div className={classes.backdropIma}>
                  <CardMedia
                    className={classes.image}
                    image={backdropUrl}
                    title="backdrop"
                  />
                </div> : null
              }            
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

export  default MovieCard;