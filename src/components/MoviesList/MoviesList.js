import React from 'react';
import { string, number, arrayOf, func, shape } from 'prop-types';
import GridList from '@material-ui/core/GridList';
import Typography from '@material-ui/core/Typography';
import MovieCard from "components/MovieCard/MovieCard";
import CardButton from "components/CardButton/CardButton";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { deepPurple } from '@material-ui/core/colors';
import styles from "./MoviesListStyle.js";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const MoviesList = ({ 
  title,
  movies,
  removeFromList,
  color,
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
                toolButtons={
                  <>
                  <CardButton 
                    help="Remove"
                    icon={<DeleteOutlineIcon />}
                    color={deepPurple[500]}
                    active={true}
                    onTurnOn={()=>{removeFromList(movie.id)}}
                    onTurnOff={()=>{removeFromList(movie.id)}}
                  />
                  </>
                }
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