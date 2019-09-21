import React from 'react';
import Footer from '../Footer';
import { shallow } from 'enzyme'

describe('Footer Component', () => {
  it('should render without crashing', () => {
    shallow(<Footer />);
  });
});