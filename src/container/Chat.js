import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
export default class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Necfol',
  };
  render() {
    return (
      <View>
        <Text>Chat with Necfol</Text>
      </View>
    );
  }
}