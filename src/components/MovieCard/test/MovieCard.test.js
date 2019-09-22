import React from 'react';
import { shallow, mount } from 'enzyme'
import sinon from 'sinon';
import MovieCard from '../MovieCard';
import FavoriteIcon from '@material-ui/icons/Favorite';

describe('MovieCard Component', () => {
  let mock, wrapper;

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

  afterEach(() => {
    wrapper = null;
    sinon.restore();
  });

  it('should render without crashing', () => {
    shallow(<MovieCard {...mock}/>);
  });

  it('should call addFavorite when the movie is not favorite on fav button click', () => {
    wrapper = mount(<MovieCard {...mock}/>);
    wrapper.find('.MuiCardActions-root button').first().simulate('click');
    sinon.assert.called(mock.addFavorite);
    sinon.assert.notCalled(mock.removeFavorite);
  });

  it('should call removeFavorite when the movie isfavorite on fav button click', () => {
    mock.isFavorite = true;
    wrapper = mount(<MovieCard {...mock}/>);
    wrapper.find('.MuiCardActions-root button').first().simulate('click');
    sinon.assert.notCalled(mock.addFavorite);
    sinon.assert.called(mock.removeFavorite);
  });

  it('should highlight icon if is favorite', () => {
    let expected = 'secondary';
    mock.isFavorite = true;
    wrapper = mount(<MovieCard {...mock}/>);
    let color = wrapper.find(FavoriteIcon).props().color;
    expect(color).toBe(expected);
  });

  it('should not highlight icon if is not favorite', () => {
    let expected = 'inherit';
    wrapper = mount(<MovieCard {...mock}/>);
    let color = wrapper.find(FavoriteIcon).props().color;
    expect(color).toBe(expected);
  });
});