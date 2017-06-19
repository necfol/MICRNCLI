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
    list: state.recommend.mvList
}), 
  dispatch => ({dispatch})
)
export default class MvList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var { list } = this.props;
    return (
      <View>
          <View style={styles.view}>
            {
                list.map((item, index) => {
                    item.picurl = item.picurl.replace(/http/i, 'https');
                    return (
                        <View style={styles.imageView} key={item.mv_id}>
                            <Image style={styles.image} source={{uri: item.picurl}}></Image>
                            <View style={styles.textView}>
                                <Text numberOfLines={2} style={styles.fontText}>{item.mvtitle}</Text>
                                <Text style={styles.fontText}>{item.singer_name}</Text>
                                <Text style={styles.fontText}>发行时间:{item.pub_date}</Text>
                                <Text style={styles.fontText}>播放量:{(item.listennum / 10000).toFixed(1)}</Text>
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