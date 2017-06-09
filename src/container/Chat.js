import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
@connect(state => ({state}), dispatch => ({dispatch}))
export default class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.navigation.state;
  }
  static navigationOptions = ({navigation}) => {
      return ({
        title: `Chat with ${navigation.state.params.user}`,
      })
  };
  render() {
    return (
      <View>
        <Text>Hello {this.state.params.user}</Text>
      </View>
    );
  }
}