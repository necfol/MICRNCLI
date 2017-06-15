import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  View
} from 'react-native';
import Swiper from 'react-native-swiper';
import axios from 'axios';
const { width } = Dimensions.get('window');
const SCREEN_HEIGHT = Dimensions.get('window').height;
const loading = require('../assert/img/loading.gif');
const styles = StyleSheet.create({
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  image: {
    width,
    flex: 1,
    backgroundColor: 'transparent'
  },

  loadingView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.5)'
  },
  loadingImage: {
    width: 60,
    height: 60
  },
  dot: {
    marginBottom: 0
  }
})
const Slide = props => {
  return (
    <View style={styles.slide}>
        <Image onLoad={() => props.loadHandle(props.i)} style={styles.image} source={props.uri} />
        {
        !props.loaded && <View style={styles.loadingView}>
            <Image style={styles.loadingImage} source={loading}/>
        </View>
        }
    </View>
  )
}
export default class MySwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgList: [
        require('../assert/img/online.jpg'),
        require('../assert/img/wood.jpg'),
      ],
      loadQueue: [0, 0]
    };
  }
  componentDidMount() {
    axios.get('http://127.0.0.1:3838/v8/fcg-bin/fcg_first_yqq.fcg', {
      params: {
        tpl:'v12',
        page:'other',
        rnd:0,
        g_tk:new Date().getTime(),
        loginUin:0,
        hostUin:0,
        inCharset:'utf8',
        outCharset:'GB2312',
        notice:0,
        platform:'yqq',
        needNewCode:0
      }
    })
    .then(function (response) {
      console.log(response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  loadHandle (i) {
    let loadQueue = this.state.loadQueue
    loadQueue[i] = 1
    this.setState({
      loadQueue
    })
  }
  render() {
    return (
      <View>
          <Swiper loadMinimal loadMinimalSize={1} activeDotColor="#f6f6f6" style={styles.wrapper} height={160} loop={true}>
            {
              this.state.imgList.map((item, i) => <Slide
                loadHandle={() => this.loadHandle(i)}
                loaded={!!this.state.loadQueue[i]}
                uri={item}
                i={i}
                key={i} />)
            }
          </Swiper>
      </View>
    );
  }
}