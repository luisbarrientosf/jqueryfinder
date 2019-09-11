import {
  RESET_SCORE,
  ADD_POINT
} from '../actions/types';

const INITIAL_STATE = {
  highscore: 0,
  score: 0,
};

export default (state = INITIAL_STATE, action) => {
  const { type } = action;
  const { score, highscore } = state;
  switch (type) {
    case ADD_POINT:
      return {
        score: score + 1,
        highscore: score + 1 > highscore ? score + 1 : highscore
      };
    case RESET_SCORE:
      return {
        ...state,
        score: 0
      }
    default:
      return state;
  }
};
