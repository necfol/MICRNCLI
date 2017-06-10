import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  StatusBar,
  View
} from 'react-native';
import { Button } from 'react-native-elements';
import MyStatusBar from '../component/MyStatusBar.js'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6'
  }
})
export default class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: null,
      title: '首页',
    };
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <MyStatusBar backgroundColor="#f6f6f6"/>
        <Text>Hello, MIC App!</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Necfol' })}
          icon={{name: 'home', size: 32}}
          buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
          textStyle={{textAlign: 'center'}}
          title='MIC' />
        {/*<Button
          raised
          onPress={() => navigate('Chat', { user: 'Necfol' })}
          icon={{name: 'home', size: 32}}
          buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
          textStyle={{textAlign: 'center'}}
          title={`Welcome to\nReact Native Elements`} />*/}
      </View>
    );
  }
}