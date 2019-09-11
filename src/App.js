/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { store } from './services/store';
import NavigationService from './services/navigation';
import AppContainer from './AppContainer';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer
          ref= {(navigatorRef) => NavigationService.setTopLevelNavigator(navigatorRef)}
        />
      </Provider>
    );
  }
}

export default App;