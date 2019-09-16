import React from 'react';
import NotFound from '../App/components/NotFound/NotFound';
import NavBar from '../App/components/NavBar/NavBar';
import { shallow } from '../enzyme';

test('should render the not found page', () => {
  const wrapper = shallow(<NotFound />);
  expect(wrapper).toMatchSnapshot();
});

test('should render the navbar', () => {
  const wrapper = shallow(<NavBar />);
  expect(wrapper).toMatchSnapshot();
});
