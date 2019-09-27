import React from 'react';
import { shallow, mount } from 'enzyme'
import sinon from 'sinon';
import MovieCard from '../MovieCard';
import FavoriteIcon from '@material-ui/icons/Favorite';

describe('MovieCard Component', () => {
  let mock

  beforeEach(() => {
    mock = {
      isFavorite: false,
      addFavorite: sinon.spy(),
      removeFavorite: sinon.spy(),
      movie: {
        id: 111,
        release_date: "1985-09-10",
        vote_average: 8.8,
        title: "Hello World!",
        overview: "Lorem ipsum dolor sit amet",
        backdrop_path: "backdrop_path",
        poster_path: "backdrop_path"
      }
    }
  });

  it('should render without crashing', () => {
    shallow(<MovieCard {...mock}/>);
  });

});