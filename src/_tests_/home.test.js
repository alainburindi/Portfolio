import React from 'react';
import Home from '../App/components/Home/Home';
import { shallow } from '../enzyme';

test('should render the home page', () => {
  const home = shallow(<Home />);
  expect(home).toMatchSnapshot();
});
