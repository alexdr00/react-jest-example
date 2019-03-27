import React from 'react';
import Game from '../Game';

import { shallow, mount } from 'enzyme';

const playTurn = (wrapper, atSquare) => {
  const turn = wrapper.find('button.square').at(atSquare);
  turn.simulate('click');
};

it('Renders without crashing', () => {
  shallow(<Game/>)
});

it('Renders game status correctly', () => {
  const wrapper = mount(<Game/>);

  const firstPlayer = wrapper.find('div.game-info').children().first().text();
  expect(firstPlayer).toEqual('Next player: X');

  const button = wrapper.find('button.square').first();

  button.simulate('click');

  const secondPlayer = wrapper.find('div.game-info').children().first().text();
  expect(secondPlayer).toEqual('Next player: O');
});

it('Renders the correct winner', () => {
  const wrapper = mount(<Game/>);

  // Turn 1
  playTurn(wrapper, 3);
  // Turn 2
  playTurn(wrapper, 0);
  // Turn 3
  playTurn(wrapper, 4);
  // Turn 4
  playTurn(wrapper, 8);
  // Turn 5 (end)
  playTurn(wrapper, 5);

  const winner = wrapper.find('div.game-info').children().first().text();
  expect(winner).toEqual('Winner: X');
});

it('Renders history correctly', () => {
  const wrapper = mount(<Game/>);

  playTurn(wrapper, 5);
  playTurn(wrapper, 2);

  const movesHistory = wrapper.find('.moves-history').children();
  expect(movesHistory.length).toEqual(3);

  const initialHistoryButton = movesHistory.at(0).text();
  const secondHistoryButton = movesHistory.at(1).text();

  expect(initialHistoryButton).toEqual('Go to game start');
  expect(secondHistoryButton).toEqual('Go to move #1');
});





