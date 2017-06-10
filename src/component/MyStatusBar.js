import React, { Component, PropTypes } from 'react';
import {
  StatusBar,
  StyleSheet,
  Platform,
  View
} from 'react-native';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  }
})
export default class MyStatusBar extends Component {
    constructor(props) {
        super(props);
        this.backgroundColor = this.props.backgroundColor;
        if(this.props.hidden) {
            styles.statusBar = 0;
        }
    }
    render() {
        return (
        <View style={[styles.statusBar, { backgroundColor: this.backgroundColor }]}>
            <StatusBar backgroundColor={this.backgroundColor} {...this.props} />
        </View>
        );
    }
}
MyStatusBar.PropTypes = {
  backgroundColor: PropTypes.string.isRequired
};