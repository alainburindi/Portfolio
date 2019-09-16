import React from 'react';
import { Contact } from '../App/components/Contact/contact';
import { shallow } from '../enzyme';

let wrapper;
test('', () => {
  wrapper = shallow(<Contact />);
  expect(wrapper).toMatchSnapshot();
});

test('Events', () => {
  wrapper.find('textarea').simulate('change', {
    preventDefault: () => {},
    target: { name: 'body', value: 'this is the body' }
  });
  wrapper
    .find('button')
    .at(0)
    .simulate('click', { preventDefault: () => {} });
  wrapper
    .find('button')
    .at(1)
    .simulate('click', { preventDefault: () => {} });
});
