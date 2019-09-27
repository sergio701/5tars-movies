import React from 'react';
import MoviesList from '../MoviesList';
import { shallow } from 'enzyme'

describe('CardButton Component', () => {
  it('should render without crashing', () => {
    shallow(<MoviesList movies={[]} />);
  });
});