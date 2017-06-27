import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
@connect(state => ({state}), dispatch => ({dispatch}))
export default class Cd extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <Text>Hello cd</Text>
      </View>
    );
  }
}