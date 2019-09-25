import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from "react-dom/test-utils";
import sinon from 'sinon';
import MyLists from '../MyLists';
import * as TmbdClient from "modules/tmdb-client";


describe('MyLists Component', () => {
  let wrapper;
  const mockTmbdClient = {
    getFavorites: sinon.spy(),
  };
  TmbdClient.getFavorites = mockTmbdClient.getFavorites;

  afterEach(() => {
    sinon.restore();
  });

  it('should render without crashing', () => {
    shallow(<MyLists />);    
  });

  it('should call getFavorites api on mount', () => {
    wrapper = mount(<MyLists />);
    sinon.assert.called(mockTmbdClient.getFavorites);    
  });
});