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
        backgroundColor: '#ededed',
        flex: 1
    },
    imageView: {
        position: 'relative',
        width: SCREEN_WIDTH - 30,
        height: SCREEN_WIDTH / 3,
        backgroundColor: '#fff',
        marginLeft: 15,
        marginTop: 10,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        overflow: 'hidden',
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 0
    },
    imageTextView: {
        height: SCREEN_WIDTH / 3,
        width: SCREEN_WIDTH / 2,
        overflow: 'hidden',
        flex: 0,
        position: 'relative',
        backgroundColor: 'transparent'
    },
    image: {
        height: SCREEN_WIDTH / 3,
        width: SCREEN_WIDTH / 2,
        overflow: 'hidden',
        flex: 0,
        backgroundColor: 'transparent'
    },
    textView: {
        paddingLeft: 5,
        paddingRight: 5,
        flex: 1
    },
    fontText: {
         position: 'absolute', 
         bottom: 10, 
         left: 4,
         color: '#fff',
    }
})
@connect(state => ({
    topList: state.rank.topList
}), 
  dispatch => ({dispatch})
)
export default class Rank extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var { topList } = this.props;
    return (
      <View>
          <View style={styles.view}>
            {
                topList.map((item, index) => {
                    return (
                        <View style={styles.imageView} key={item.id}>
                            <View style={styles.imageTextView}>
                                <Image style={styles.image} source={{uri: item.picUrl}}></Image>
                                <Text style={styles.fontText}>{(item.listenCount / 10000).toFixed(1)}万</Text>
                            </View>
                            <View style={styles.textView}>
                                <Text numberOfLines={2} style={{color: '#666'}}>{item.topTitle}</Text>
                                {
                                    item.songList && item.songList.map((sitem, sindex) => {
                                        return (
                                            <View key={sindex}>
                                                <Text>{sindex + 1}{sitem.songname}-{sitem.singername}</Text>
                                            </View>
                                        )
                                    })
                                }
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