import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableHighlight,
  Image,
  Dimensions,
  View
} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import SearchBar from 'react-native-search-bar';
import MySwiper from '../component/MySwiper.js';
import MyStatusBar from '../component/MyStatusBar.js'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6'
  },
  logoView: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 44,
    flexDirection: 'row',
    paddingLeft: 15,
    paddingBottom: 5,
    paddingRight: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e8e8e8'
  },
  logo: {
    height: 44,
    width: 220,
  },
  scan: {
    height: 30,
    width: 30
  }
})
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: null,
      title: '首页',
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      showsCancelButtonFlag: false
    };
  }
  componentDidMount() {
    // this.refs.searchBar.focus();
    // this.setState({showsCancelButtonFlag: true});
  }
  _onFocus() {
    this.setState({showsCancelButtonFlag: true});
  }
  _onPressScan() {
      const navigateAction = NavigationActions.navigate({
        routeName: 'Scan',
        params: {}
      })
      this.props.navigation.dispatch(navigateAction)
  }
  render() {
    const { navigate } = this.props.navigation;
    console.log(this.state.showsCancelButtonFlag)
    return (
      <View style={styles.container}>
        <MyStatusBar backgroundColor="#f6f6f6"/>
        <View style={styles.logoView}>
          <Image
            style={styles.logo}
            resizeMode="stretch"
            source={require('../assert/img/logo.png')}
          />
          <TouchableHighlight onPress={() => this._onPressScan()} activeOpacity={1} underlayColor="#f3f3f3">
            <Image
              style={styles.scan}
              resizeMode="contain"
              source={require('../assert/img/scanning.png')}
            />
          </TouchableHighlight>
        </View>
        <ScrollView>
          <SearchBar
            ref='searchBar'
            placeholder='Search Products'
            searchBarStyle="prominent"
            onFocus={() => this._onFocus()}
            showsCancelButton={this.state.showsCancelButtonFlag}
            />
          <MySwiper></MySwiper>
          <Button
            onPress={() => navigate('Chat', { user: 'Necfol' })}
            icon={{name: 'home', size: 32}}
            buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
            textStyle={{textAlign: 'center'}}
            title='MIC' />
        </ScrollView>
      </View>
    );
  }
}