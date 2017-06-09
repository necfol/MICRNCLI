import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppWithNav from './root.js';
import confStore from './configStore.js';
const store = confStore();
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNav />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('MICRNCLI', () => App);
