import React from 'react';
import Header from '../Header';
import { shallow } from 'enzyme'

describe('Header Component', () => {
  it('should render without crashing', () => {
    shallow(<Header />);
  });
});