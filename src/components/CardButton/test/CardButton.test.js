import React from 'react';
import CardButton from '../CardButton';
import { shallow } from 'enzyme'

describe('CardButton Component', () => {
  it('should render without crashing', () => {
    shallow(<CardButton />);
  });
});