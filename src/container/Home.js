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
import ScrollableTabView from 'react-native-scrollable-tab-view';
import axios from 'axios';
import Recommend from '../container/Recommend.js';
import Rank from '../container/Rank.js';
import MyStatusBar from '../component/MyStatusBar.js'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6'
  },
  tabStyle: {
    backgroundColor: 'transparent'
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
  }
  _onFocus() {
    this.setState({showsCancelButtonFlag: true});
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <MyStatusBar backgroundColor="#f6f6f6"/>
        <ScrollView>
          <SearchBar
            ref='searchBar'
            placeholder='搜索 歌曲/专辑/歌手'
            searchBarStyle="prominent"
            onFocus={() => this._onFocus()}
            showsCancelButton={this.state.showsCancelButtonFlag}
            />
          <ScrollableTabView tabBarUnderlineStyle={styles.tabStyle} tabBarActiveTextColor="#000" tabBarInactiveTextColor="#999">
            <Recommend tabLabel="推荐"></Recommend>
            <Rank tabLabel="排行榜"></Rank>
          </ScrollableTabView>
        </ScrollView>
      </View>
    );
  }
}