import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableHighlight,
  Image,
  View
} from 'react-native';
import { Button } from 'react-native-elements';
import MyStatusBar from '../component/MyStatusBar.js'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#f6f6f6'
  },
  logoView: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 44,
    flexDirection: 'row'
  },
  logo: {
    height: 44,
    width: 240,
  },
  scan: {
    height: 30,
    width: 30
  }
})
export default class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: null,
      title: '首页',
    };
  };
  _onPressScan() {
    alert(1)
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <MyStatusBar backgroundColor="#f6f6f6"/>
        <View style={styles.logoView}>
          <Image
            style={styles.logo}
            resizeMode="stretch"
            source={require('../assert/img/logo.png')}
          />
          <TouchableHighlight onPress={this._onPressScan} activeOpacity={1} underlayColor="#f3f3f3">
            <Image
              style={styles.scan}
              resizeMode="contain"
              source={require('../assert/img/scanning.png')}
            />
          </TouchableHighlight>
        </View>
        <Text>Hello, MIC App!</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Necfol' })}
          icon={{name: 'home', size: 32}}
          buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
          textStyle={{textAlign: 'center'}}
          title='MIC' />
      </View>
    );
  }
}