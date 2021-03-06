import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Dimensions,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import MySwiper from '../component/MySwiper.js';
import SongList from './SongList.js';
import MvList from './MvList.js';
const SCREEN_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  textView: {
      width: SCREEN_WIDTH,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center'
  },
  text: {
      color: '#333'
  }
})
export default class Recommend extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    return (
      <View>
        <MySwiper></MySwiper>
        <View style={styles.textView}>
            <Text>热门歌单</Text>
        </View>
        <SongList></SongList>
        <MvList></MvList>
      </View>
    );
  }
}