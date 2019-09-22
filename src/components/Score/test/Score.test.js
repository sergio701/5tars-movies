import React from 'react';
import { shallow, mount } from 'enzyme'
import sinon from 'sinon';
import Score from '../Score';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorder from '@material-ui/icons/StarBorder';

describe('Score Component', () => {
  let wrapper;

  afterEach(() => {
    wrapper = null;
  });

  it('should render without crashing', () => {
    shallow(<Score score={10}/>);
  });

  it('should disply 5 filled starts when score is close to 10', () => {
    wrapper = mount(<Score score={9.8}/>);
    expect(wrapper.find(StarIcon)).toHaveLength(5);
    expect(wrapper.find(StarHalfIcon)).toHaveLength(0);
    expect(wrapper.find(StarBorder)).toHaveLength(0);
  });

  it('should disply 5 border starts when score is 0', () => {
    wrapper = mount(<Score score={0}/>);
    expect(wrapper.find(StarIcon)).toHaveLength(0);
    expect(wrapper.find(StarHalfIcon)).toHaveLength(0);
    expect(wrapper.find(StarBorder)).toHaveLength(5);
  });

  it('should display half start when score close to 1', () => {
    wrapper = mount(<Score score={0.9}/>);
    expect(wrapper.find(StarIcon)).toHaveLength(0);
    expect(wrapper.find(StarHalfIcon)).toHaveLength(1);
    expect(wrapper.find(StarBorder)).toHaveLength(4);
  });

  it('should transform 10 base score to 5 start base', () => {
    wrapper = mount(<Score score={4.8}/>);
    expect(wrapper.find(StarIcon)).toHaveLength(2);
    expect(wrapper.find(StarHalfIcon)).toHaveLength(1);
    expect(wrapper.find(StarBorder)).toHaveLength(2);
  });
});