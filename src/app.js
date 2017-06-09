import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppWithNav from './root.js';
import confStore from './configStore.js';
const store = confStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNav />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('MICRNCLI', () => App);
