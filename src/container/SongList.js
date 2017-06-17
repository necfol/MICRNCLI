import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  Dimensions,
  View
} from 'react-native';
import { connect } from 'react-redux';
const SCREEN_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    image: {
        height: SCREEN_WIDTH / 2,
        width: SCREEN_WIDTH / 2,
        flex: 0,
        backgroundColor: 'transparent'
    },
    fontView: {
        width: SCREEN_WIDTH / 2,
        alignItems: 'center',
        justifyContent: 'center',

    },
    fontStyle: {
        color: '#666',
        fontSize: 15
    },
    nameFontStyle: {
        alignSelf: 'flex-start'
    }
})
@connect(state => (state), 
  dispatch => ({dispatch})
)
export default class SongList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        list: [1,1,1,1,1,1,1,1,1,1]
    }
  }
  componentDidMount() {
  }
  render() {

    return (
      <View>
          <View style={styles.view}>
            {
                this.state.list.map((item, index) => (
                    <View style={styles.imageView} key={index}>
                        <Image resizeMode="contain" style={styles.image} source={{uri: 'https://p.qpic.cn/music_cover/2xmNaxibz1AbHy9icrXcAZ2rUy79DO1wLDcTqa4YZw7QPJG4FoMUjPOQ/300?n=1'}}></Image>
                        <View style={styles.fontView}>
                            <Text numberOfLines={1} style={styles.fontStyle}>如果老爸在追一次老妈如果老爸在追一次老妈如果老爸在追一次老妈如果老爸在追一次老妈</Text>
                            <Text style={styles.nameFontStyle}>selena</Text>
                        </View>
                    </View>
                ))
            }
          </View>
      </View>
    );
  }
}