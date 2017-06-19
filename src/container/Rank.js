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
        height: SCREEN_WIDTH / 3 + 10,
        backgroundColor: '#fff',
        marginLeft: 15,
        marginTop: 10,
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 0
    },
    image: {
        height: SCREEN_WIDTH / 3,
        width: SCREEN_WIDTH / 2,
        borderRadius: 8,
        flex: 0,
        backgroundColor: 'transparent'
    },
    textView: {
        paddingLeft: 5,
        paddingRight: 5,
        flex: 1
    },
    fontText: {
        color: '#666'
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
                            <Image style={styles.image} source={{uri: item.picUrl}}></Image>
                            <View style={styles.textView}>
                                <Text numberOfLines={2} style={styles.fontText}>{item.topTitle}</Text>
                                <Text style={styles.fontText}>{(item.listenCount / 10000).toFixed(1)}万</Text>
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