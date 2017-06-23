import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  ActivityIndicator,
  TouchableHighlight,
  Image,
  Dimensions,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import SearchBar from 'react-native-search-bar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import axios from 'axios';
import { getrecommend } from '../action/recommend.js'
import { getrank } from '../action/rank.js'
import Recommend from '../container/Recommend.js';
import Rank from '../container/Rank.js';
import MyStatusBar from '../component/MyStatusBar.js'
import PlayBtnView from '../component/PlayBtnView.js'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6'
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  tabStyle: {
    backgroundColor: 'transparent'
  }
})
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
@connect(state => ({
    visible: state.recommend.mvList && state.recommend.mvList.length > 0
  }), 
  dispatch => ({
      getrecommend: () => dispatch(getrecommend()),
      getrank: () => dispatch(getrank())
  })
)
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
    this.props.getrecommend();
    this.props.getrank();
  }
  _onFocus() {
    this.setState({showsCancelButtonFlag: true});
  }
  render() {
    const { navigate } = this.props.navigation;
    let renderView;
    console.log(this.props.visible)
    return (
      <View style={styles.container}>
        <MyStatusBar backgroundColor="#f6f6f6"/>
        {this.props.visible ? (
          <View style={{flex: 1}}>
            <ScrollView>
              <SearchBar
                ref='searchBar'
                placeholder='搜索 歌曲/专辑/歌手'
                searchBarStyle="prominent"
                onFocus={() => this._onFocus()}
                showsCancelButton={this.state.showsCancelButtonFlag}
                />
              <ScrollableTabView tabBarUnderlineStyle={styles.tabStyle} tabBarActiveTextColor="#000" tabBarInactiveTextColor="#999">
                <Recommend ref="recommend" tabLabel="推荐"></Recommend>
                <Rank ref="rank" tabLabel="排行榜"></Rank>
              </ScrollableTabView>
            </ScrollView>
            <PlayBtnView></PlayBtnView>
          </View>
        ) : (
          <ActivityIndicator
            style={[styles.centering, {height: 80}]}
            size="large" />
        )}
      </View>
    );
  }
}