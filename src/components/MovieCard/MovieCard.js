import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { getMovieImagesUrls } from  "modules/movie-utils";
import StarIcon from '@material-ui/icons/Star';
import { amber } from '@material-ui/core/colors';

import styles from "./MovieCardStyle.js";

const useStyles = makeStyles(styles);

const MovieCard = ({ movie }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { backdropUrl, posterUrl } = getMovieImagesUrls(movie);

  console.log("urls", { backdropUrl, posterUrl, movie,  get: getMovieImagesUrls(movie)} );

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <div className={classes.root} >
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <div className={classes.scoreContainer}>
              <StarIcon htmlColor={amber[600]} className={classes.scoreIcon}/>
              <div className={classes.scoreLabel}>
                {(movie.vote_average/2).toFixed(1)}
              </div>
            </div>
          }
          title={movie.title}
          subheader={movie.release_date}
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
          <IconButton aria-label="add to favorites">
            <StarIcon />
          </IconButton>         
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
          <CardContent>
            <Typography>
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