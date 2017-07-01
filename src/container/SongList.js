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
import { NavigationActions } from 'react-navigation'
const SCREEN_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    imageView: {
        position: 'relative'
    },
    image: {
        height: SCREEN_WIDTH / 2,
        width: SCREEN_WIDTH / 2,
        flex: 0,
        backgroundColor: 'transparent'
    },
    numView: {
        position: 'absolute',
        bottom: 45,
        left: 10,
        flexDirection: 'row',
    },
    fontView: {
        width: SCREEN_WIDTH / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fontStyle: {
        fontSize: 15
    },
    nameFontStyle: {
        color: '#666',
        alignSelf: 'flex-start'
    }
})
const navigateAction = (id) => {
    return NavigationActions.navigate({
        routeName: 'Cd',
        params: {id},
    })
}
@connect(state => ({
    list: state.recommend.songList
}), 
  dispatch => ({
    navGo: (id) => dispatch(navigateAction(id))
  })
)
export default class SongList extends Component {
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
                    item.imgurl = item.imgurl.replace(/http/i, 'https');
                    return(
                        <TouchableHighlight  key={item.dissid} onPress={() => {this.props.navGo(1)}}>
                            <View style={styles.imageView}>
                                <Image resizeMode="contain" style={styles.image} source={{uri: item.imgurl}}></Image>
                                <View style={styles.numView}>
                                    <Image style={{height: 15, width: 15}} resizeMode="contain" source={require('../assert/img/music.png')}></Image>
                                    <Text style={{backgroundColor: 'transparent', color: '#fff', marginLeft: 4}}>{(item.listennum / 10000).toFixed(1)}万</Text>
                                </View>
                                <View style={styles.fontView}>
                                    <Text numberOfLines={1} style={styles.fontStyle}>{item.dissname}</Text>
                                    <Text style={styles.nameFontStyle}>{item.author.trim()}</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                        
                    )
                })
            }
          </View>
      </View>
    );
  }
}