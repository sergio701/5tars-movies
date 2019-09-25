import React from 'react';
import { string, number, arrayOf, func, shape } from 'prop-types';
import GridList from '@material-ui/core/GridList';
import Typography from '@material-ui/core/Typography';
import MovieCard from "components/MovieCard/MovieCard";
import styles from "./MoviesListStyle.js";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const MoviesList = ({ 
  title,
  movies,
  addToList, 
  removeFromList,
  color 
}) => {
  const classes = useStyles();  
  return (
    <>
    <Typography className={classes.title} variant='h6' style={{color}}>
      {title}
    </Typography>
    <div className={classes.root} style={{borderColor: color}}>
      <GridList className={classes.gridList} cellHeight='auto' spacing={0}>
          {movies.map((movie, i) => (
            <div className={classes.movieCard} key={i}>
              <MovieCard 
                movie={movie}
                deleteMode={true} 
                addToList={addToList}
                removeFromList={removeFromList}
              /> 
            </div>            
          ))}
        </GridList>
    </div>
    </>
  )};

  MovieCard.prototype = {
    movies: arrayOf(shape({
      id: number.required,
      release_date: string,
      vote_average: number,
      title: string,
      overview: string,
      backdrop_path: string,
      poster_path: string,
    })).required,
    title: string,
    addToList: func,
    removeFromList: func 
  };

export default MoviesList;