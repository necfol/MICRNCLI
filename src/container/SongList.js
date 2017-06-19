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
        justifyContent: 'center'
    },
    fontStyle: {
        color: '#666',
        fontSize: 15
    },
    nameFontStyle: {
        alignSelf: 'flex-start'
    }
})
@connect(state => ({
    list: state.recommend.songList
}), 
  dispatch => ({dispatch})
)
export default class SongList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var { list } = this.props;
    console.log(list);
    return (
      <View>
          <View style={styles.view}>
            {
                list.map((item, index) => {
                    item.imgurl = item.imgurl.replace(/http/i, 'https');
                    return(
                        <View style={styles.imageView} key={item.listennum}>
                            <Image resizeMode="contain" style={styles.image} source={{uri: item.imgurl}}></Image>
                            <View style={styles.fontView}>
                                <Text numberOfLines={1} style={styles.fontStyle}>{item.dissname}</Text>
                                <Text style={styles.nameFontStyle}>{item.author.trim()}</Text>
                            </View>
                        </View>
                    )
                })
            }
          </View>
      </View>
    );
  }
}