import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './container/Home.js';
import ChatScreen from './container/Chat.js';
import QRCodeScanner from 'react-native-qrcode-scanner';

const paramsToProps = (SomeComponent) => { 
    return class extends Component {
        static navigationOptions = SomeComponent.navigationOptions;
        render() {
            const {navigation, ...otherProps} = this.props
            const {state: {params}} = navigation
            return <SomeComponent {...this.props} {...params} />
        }
    }
}

const packScan = (SomeComponent) => {
    return class extends Component {
      static navigationOptions = ({ navigation }) => ({
        title: `扫描`,
      });
      onSuccess() {
        console.log('+++++++++++')
      }
      render() {
          return <SomeComponent onRead={() => this.onSuccess()}/>
      }
    }  
}

export const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { 
    screen: paramsToProps(ChatScreen)
  },
  Scan: {
    screen: packScan(QRCodeScanner)
  }
});
