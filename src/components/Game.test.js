import React from 'react';
import { shallow, mount } from 'enzyme';
import Game from './Game';
import Square from './Square'

it('renders without crashing', () => {
  shallow(<Game />);
});






// Button test 
it('renders game status correctly', () => {
  const wrapper = mount(<Game/>)
  const firstPlayer = wrapper.find('div.gameInfo').children().first().text()
  expect(firstPlayer).toEqual('Next player is X')

  const button = wrapper.find('button.square').first()
  button.simulate('click')
  const secondPlayer = wrapper.find('div.gameInfo').children().first().text()
  expect(secondPlayer).toEqual('Next player is O')
});

// First clicked square should be X
it ('the first clicked square should have text equal to X', () =>{
  const wrapper = mount(<Game />)
  const button = wrapper.find('button.square').first();
  button.simulate('click');
  expect(button.at(0).text()).toEqual('X');
});

// Second clicked square should be O
it ('the second clicked square should have text equal to O', () => {
  const wrapper = mount(<Game />)
	const button = wrapper.find("button.square");
	button.at(0).simulate('click');
	button.at(1).simulate('click');
	expect(button.at(1).text()).toEqual('O');
});

// Player X win test
it('correctly displays which player won the game', () => {
  const wrapper = mount(<Game/>)
  const playerX = wrapper.find('div.gameInfo').children().first().text()
  expect(playerX).toEqual('Next player is X')

  const button = wrapper.find('button.square').first()
  button.simulate('click')
  // Player one or X clicks on top left square
  // Current Board:
  // X | 1 | 2
  // ----------
  // 3 | 4 | 5
  // ----------
  // 6 | 7 | 8
  const playerO = wrapper.find('div.gameInfo').children().first().text()
  expect(playerO).toEqual('Next player is O')

  // Player O turn: Click on top middle square
  const turn2 = wrapper.find('button.square').at(1)
  turn2.simulate('click');
  // Current Board:
  // X | O | 2
  // ----------
  // 3 | 4 | 5
  // ----------
  // 6 | 7 | 8
  
  // Player X turn: Click on middle square
  const turn3 = wrapper.find('button.square').at(4)
  turn3.simulate('click');
  // Current Board:
  // X | O | 2
  // ----------
  // 3 | X | 5
  // ----------
  // 6 | 7 | 8

  // Player O turn: Click on middle right square
  const turn4 = wrapper.find('button.square').at(5)
  turn4.simulate('click')
  // Current Board:
  // X | O | 2
  // ----------
  // 3 | X | O
  // ----------
  // 6 | 7 | 8

  // Player X turn: Click bottom right square
  const turn5 = wrapper.find('button.square').at(8)
  turn5.simulate('click')
  // Current Board:
  // X | O | 2
  // ----------
  // 3 | X | O
  // ----------
  // 6 | 7 | X

  const winner = wrapper.find('div.gameInfo').children().first().text()
  expect(winner).toEqual("Winner is X");

});







// Tie test
it('correctly displays that there is a tie', () => {
  const wrapper = mount(<Game />);
  // Store HTML element value in playerX 
  const playerX = wrapper.find('div.gameInfo').children().first().text();
  // The first player should equal to 'Next player is X'
  expect(playerX).toEqual('Next player is X')

  const button = wrapper.find('button.square').first()
  // Player one or X clicks on top left square
  // Current Board:
  // X | 2 | 3
  // ----------
  // 4 | 5 | 6
  // ----------
  // 7 | 8 | 9
  button.simulate('click')
  const playerO = wrapper.find('div.gameInfo').children().first().text()
  expect(playerO).toEqual('Next player is O')

  // Player O turn: Click on top middle square
  const turn2 = wrapper.find('button.square').at(1)
  turn2.simulate('click');
  // Current Board:
  // X | O | 2
  // ----------
  // 3 | 4 | 5
  // ----------
  // 6 | 7 | 8
  
  // Player X turn: Click on middle left square
  const turn3 = wrapper.find('button.square').at(3)
  turn3.simulate('click');
  // Current Board:
  // X | O | 2
  // ----------
  // X | 4 | 5
  // ----------
  // 6 | 7 | 8

  // Player O turn: Click on bottom left square
  const turn4 = wrapper.find('button.square').at(6)
  turn4.simulate('click')
  // Current Board:
  // X | O | 2
  // ----------
  // X | 4 | 5
  // ----------
  // O | 7 | 8

  // Player X turn: Click on top right square
  const turn5 = wrapper.find('button.square').at(2)
  turn5.simulate('click')
  // Current Board:
  // X | O | X
  // ----------
  // X | 4 | 5
  // ----------
  // O | 7 | 8

  // Player O turn: Click on middle square
  const turn6 = wrapper.find('button.square').at(4)
  turn6.simulate('click')
  // Current Board:
  // X | O | X
  // ----------
  // X | O | 5
  // ----------
  // O | 7 | 8

  // Player X turn: Click on bottom middle button
  const turn7 = wrapper.find('button.square').at(7)
  turn7.simulate('click')
  // Current Board:
  // X | O | X
  // ----------
  // X | O | 5
  // ----------
  // O | X | 8

  // Player O turn: Click on middle right square
  const turn8 = wrapper.find('button.square').at(5)
  turn8.simulate('click')
  // Current Board:
  // X | O | X
  // ----------
  // X | O | O
  // ----------
  // O | X | 8

  // Player X turn: Click on bottom right square
  const turn9 = wrapper.find('button.square').at(8)
  turn9.simulate('click')
  // Current Board:
  // X | O | X
  // ----------
  // X | O | O
  // ----------
  // O | X | X

  const tie = wrapper.find('div.gameInfo').children().first().text()
  expect(tie).toEqual("Tie!");

});





// Horizontal Win Check
it('correctly displays which player won the game', () => {
  const wrapper = mount(<Game/>)
  const playerX = wrapper.find('div.gameInfo').children().first().text()
  expect(playerX).toEqual('Next player is X')

  const button = wrapper.find('button.square').first()
  button.simulate('click')
  // Player one or X clicks on top left square
  // Current Board:
  // X | 1 | 2
  // ----------
  // 3 | 4 | 5
  // ----------
  // 6 | 7 | 8
  const playerO = wrapper.find('div.gameInfo').children().first().text()
  expect(playerO).toEqual('Next player is O')

  // Player O turn: Click on middle left
  const turn2 = wrapper.find('button.square').at(3)
  turn2.simulate('click');
  // Current Board:
  // X | 1 | 2
  // ----------
  // O | 4 | 5
  // ----------
  // 6 | 7 | 8
  
  // Player X turn: Click on the top middle square
  const turn3 = wrapper.find('button.square').at(1)
  turn3.simulate('click');
  // Current Board:
  // X | X | 2
  // ----------
  // O | 4 | 5
  // ----------
  // 6 | 7 | 8

  // Player O turn: Click on middle square
  const turn4 = wrapper.find('button.square').at(4)
  turn4.simulate('click')
  // Current Board:
  // X | X | 2
  // ----------
  // O | O | 5
  // ----------
  // 6 | 7 | 8

  // Player X turn: Click on the top right square
  const turn5 = wrapper.find('button.square').at(2)
  turn5.simulate('click')
  // Current Board:
  // X | X | X
  // ----------
  // O | O | 5
  // ----------
  // 6 | 7 | 8

  const winner = wrapper.find('div.gameInfo').children().first().text()
  expect(winner).toEqual("Winner is X");

});





// Vertical Win Check
it('correctly displays which player won the game', () => {
  const wrapper = mount(<Game/>)
  const playerX = wrapper.find('div.gameInfo').children().first().text()
  expect(playerX).toEqual('Next player is X')

  const button = wrapper.find('button.square').first()
  button.simulate('click')
  // Player one or X clicks on top left square
  // Current Board:
  // X | 1 | 2
  // ----------
  // 3 | 4 | 5
  // ----------
  // 6 | 7 | 8
  const playerO = wrapper.find('div.gameInfo').children().first().text()
  expect(playerO).toEqual('Next player is O')

  // Player O turn: Click on top middle square
  const turn2 = wrapper.find('button.square').at(1)
  turn2.simulate('click');
  // Current Board:
  // X | O | 2
  // ----------
  // 3 | 4 | 5
  // ----------
  // 6 | 7 | 8
  
  // Player X turn: Click on middle square left
  const turn3 = wrapper.find('button.square').at(3)
  turn3.simulate('click');
  // Current Board:
  // X | O | 2
  // ----------
  // X | 4 | 5
  // ----------
  // 6 | 7 | 8

  // Player O turn: Click on middle square
  const turn4 = wrapper.find('button.square').at(4)
  turn4.simulate('click')
  // Current Board:
  // X | O | 2
  // ----------
  // X | O | 5
  // ----------
  // 6 | 7 | 8

  // Player X turn: Click bottom left square
  const turn5 = wrapper.find('button.square').at(6)
  turn5.simulate('click')
  // Current Board:
  // X | O | 2
  // ----------
  // X | O | 5
  // ----------
  // X | 7 | 8

  const winner = wrapper.find('div.gameInfo').children().first().text()
  expect(winner).toEqual("Winner is X");

});






// Test for checking overwriting
it ('does not allow players to overwrite their own and the other plays moves', () => {
  const wrapper = mount(<Game/>)
  const playerX = wrapper.find('div.gameInfo').children().first().text()
  expect(playerX).toEqual('Next player is X')

  const button = wrapper.find('button.square').first()
  button.simulate('click')
  // Player one or X clicks on top left square
  // Current Board:
  // X | 1 | 2
  // ----------
  // 3 | 4 | 5
  // ----------
  // 6 | 7 | 8
  const playerO = wrapper.find('div.gameInfo').children().first().text()
  expect(playerO).toEqual('Next player is O')

  // Attempts to click on the same
  const turn2 = wrapper.find('button.square').at(0);
  turn2.simulate('click');

  const value = wrapper.find('button.square').at(0).text()
  expect(value).toEqual('X');
});



it('there are 3 elements in the list when we are 2 moves in', () => {
  const wrapper = mount(<Game />)
  const button = wrapper.find('button.square')
  button.at(0).simulate('click');
  button.at(1).simulate('click');
  expect(wrapper.find('li').length).toBe(3);
});

it('it restores back to a previous state in the game', () => {
  const wrapper = mount(<Game />)
  const button = wrapper.find('button.square');
  button.at(0).simulate('click');
  // Player one or X clicks on top left square
  // Current Board:
  // X | 1 | 2
  // ----------
  // 3 | 4 | 5
  // ----------
  // 6 | 7 | 8
  button.at(1).simulate('click');
  // Player O: clicks on top middle square
  // Current Board:
  // X | O | 2
  // ----------
  // 3 | 4 | 5
  // ----------
  // 6 | 7 | 8
  const goBack = wrapper.find('li');
  goBack.at(1).children().simulate('click');
  // Player O: clicks on top middle square
  // Current Board:
  // X | 1 | 2
  // ----------
  // 3 | 4 | 5
  // ----------
  // 6 | 7 | 8
  expect(wrapper.find('button.square').at(0).text()).toBe("X");
  expect(wrapper.find('button.square').at(1).text()).toBe("");
})

