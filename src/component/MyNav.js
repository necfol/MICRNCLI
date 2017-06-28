import React, { Component, PropTypes } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  Image,
  Platform,
  TouchableHighlight,
  Dimensions,
  View
} from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  navView: {
    width: SCREEN_WIDTH,
    height: 45,
    alignItems: 'center',
    position: 'relative',
    flexDirection: 'row'
  }
})
export default class MyNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: this.props.style,
            backFunc: this.props.backFunc,
        }
    }
    render() {
        return (
            <View style={[styles.navView,{backgroundColor: this.props.backgroundColor}, {zIndex: this.props.zIndex}, this.state.style]}>
                <TouchableHighlight onPress={() => this.state.backFunc()}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image style={{flex: 0, height: 40, width: 40}} resizeMode="contain" source={require('../assert/img/back.png')}></Image>
                        <Text style={{fontSize: 16, color: this.props.textColor}}>{this.props.backText}</Text>
                    </View>
                </TouchableHighlight>
                <Text numberOfLines={1} style={{position:'absolute', textAlign: 'center', left:1 / 4 * SCREEN_WIDTH, color: this.props.textColor, width: 1 / 2 * SCREEN_WIDTH, fontSize: 16}}>
                    {this.props.title}
                </Text>
            </View>
        );
    }
}
MyNav.PropTypes = {
    backgroundColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    backFunc: PropTypes.func.isRequired,
};