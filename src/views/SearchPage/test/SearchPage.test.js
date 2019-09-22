import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import SearchPage from '../SearchPage';
import Search from "components/Search/Search";
import Button from '@material-ui/core/Button';
import * as TmbdClient from "modules/tmdb-client";


describe('SearchPage Component', () => {
  let wrapper;
  const mockTmbdClient = {
    getFavorites: sinon.spy(),
    getMoviesSearch: sinon.stub()
  };
  TmbdClient.getFavorites = mockTmbdClient.getFavorites;
  TmbdClient.getMoviesSearch = mockTmbdClient.getMoviesSearch;

  afterEach(() => {
    sinon.restore();
  });

  it('should render without crashing', () => {
    shallow(<SearchPage />);    
  });

  it('should call getFavorites api on mount', () => {
    wrapper = mount(<SearchPage />);
    sinon.assert.called(mockTmbdClient.getFavorites);    
  });

  it('should fetch movies on search button click', () => {
    mockTmbdClient.getMoviesSearch.resolves({results: []});
    wrapper = mount(<SearchPage />);
    wrapper.find(Search).find('input').simulate('change', { target: { value: 'query' } });
    wrapper.find(Search).find(Button).simulate('click');
    sinon.assert.called(mockTmbdClient.getMoviesSearch);    
  });
});