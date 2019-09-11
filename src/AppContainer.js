import React from 'react';

import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import StartGame from './views/StartGame';
import PlayGame from './views/PlayGame';
import GameOver from './views/GameOver';
import ClearStage from './views/ClearStage';


const SwitchNavigator = createSwitchNavigator(
  {
    StartGame, PlayGame, GameOver, ClearStage
  },
  {
    initialRouteName: 'StartGame',
  },
);


export default createAppContainer(SwitchNavigator);
