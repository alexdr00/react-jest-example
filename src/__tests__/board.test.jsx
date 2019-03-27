import React from 'react';
import Board from '../Board';

import { shallow, mount } from 'enzyme';

it('Renders without crashing', () => {
  const squares = Array(9).fill(null)
  shallow(<Board squares={squares}/>)
});

it('Calls onClick event on click of a board square', () => {
  const squares = Array(9).fill(null);
  const onClick = jest.fn();
  const wrapper = mount(
    <Board squares={squares} onClick={onClick}/>
  );

  wrapper.find('button.square').first().simulate('click');
  expect(onClick).toHaveBeenCalledWith(0);

});

