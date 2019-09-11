import { createStore, compose} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';

export const store = createStore(
  reducers,
  composeWithDevTools(),
);
