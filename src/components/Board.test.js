import React from 'react';
import { shallow, mount } from 'enzyme';
import Board from './Board';

// Render board with 9 squares
it('renders without crashing', () => {
  let squares = Array(9).fill(null);
    shallow(<Board squares={squares}/>);
});

// Simulate a click on the board
it ('Calls onClick event when a board square is clicked', () => {
  let squares = Array(9).fill(null);
  const click = jest.fn();
  let wrapper = mount(<Board squares={squares} onClick = {click}/>);
  wrapper.find('button.square').first().simulate('click');
  expect(click).toBeCalledWith(0);
});