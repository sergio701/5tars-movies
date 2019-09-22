import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from "react-dom/test-utils";
import sinon from 'sinon';
import MyFavorites from '../MyFavorites';
import * as TmbdClient from "modules/tmdb-client";


describe('MyFavorites Component', () => {
  let wrapper;
  const mockTmbdClient = {
    getFavorites: sinon.spy(),
  };
  TmbdClient.getFavorites = mockTmbdClient.getFavorites;

  afterEach(() => {
    sinon.restore();
  });

  it('should render without crashing', () => {
    shallow(<MyFavorites />);    
  });

  it('should call getFavorites api on mount', () => {
    wrapper = mount(<MyFavorites />);
    sinon.assert.called(mockTmbdClient.getFavorites);    
  });
});