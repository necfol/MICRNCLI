import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  View
} from 'react-native';
import { connect } from 'react-redux';
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
        <Image onLoad={() => props.loadHandle(props.i)} style={styles.image} resizeMode="contain" source={{uri: props.uri}} />
        {
        !props.loaded && <View style={styles.loadingView}>
            <Image style={styles.loadingImage} source={loading}/>
        </View>
        }
    </View>
  )
}
@connect(state => {
  return {
    focus: state.recommend.focus
  }
}, 
  dispatch => ({dispatch})
)
export default class MySwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadQueue: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
  }
  componentDidMount() {
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
          <Swiper loadMinimal loadMinimalSize={1} activeDotColor="#f6f6f6" style={styles.wrapper} height={150} loop={true}>
            {
              this.props.focus.map((item, i) => <Slide
                loadHandle={() => this.loadHandle(i)}
                loaded={!!this.state.loadQueue[i]}
                uri={item.pic}
                i={i}
                key={i} />)
            }
          </Swiper>
      </View>
    );
  }
}