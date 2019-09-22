import React from 'react';
import { shallow, mount } from 'enzyme'
import sinon from 'sinon';
import Search from '../Search';
import Button from '@material-ui/core/Button';

describe('Score Component', () => {
  let mock, wrapper;  
  jest.mock("modules/tmdb-client", () => ({ getMoviesSearch: jest.fn() }));

  beforeEach(() => {
    mock = {
      onSearch: sinon.spy()
    };
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
  });

  afterEach(() => {
    wrapper = null;
    sinon.restore();
  });

  it('should render without crashing', () => {
    shallow(<Search {...mock}/>);
  });
  
  it('should call onSearch with the input value on search button click', () => {
    let query = "test";
    wrapper = mount(<Search {...mock}/>);
    wrapper.find('input').simulate('change', { target: { value: query } });
    wrapper.find(Button).simulate('click');
    sinon.assert.calledWith(mock.onSearch, query);
  });

  it('should call onSearch with the input value on enter presses', () => {
    let query = "test";
    wrapper = mount(<Search {...mock}/>);
    wrapper.find('input').simulate('change', { target: { value: query } });
    wrapper.find('input').simulate('keypress',{ key: 'Enter' });
    sinon.assert.calledWith(mock.onSearch, query);
  }); 
});