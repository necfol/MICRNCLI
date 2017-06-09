import React, { Component } from 'react';
import {
  Text,
  Button,
  View
} from 'react-native';
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, MIC App!</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Necfol' })}
          title="Chat with Necfol"
        />
      </View>
    );
  }
}