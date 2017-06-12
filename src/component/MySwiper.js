import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  View
} from 'react-native';
import Swiper from 'react-native-swiper';
const { width } = Dimensions.get('window');
const SCREEN_HEIGHT = Dimensions.get('window').height;
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
  }
})
const Slide = props => {
  return (
    <View style={styles.slide}>
        <Image onLoad={() => props.loadHandle(props.i)} style={styles.image} source={{uri: props.uri}} />
        {/*{
        !props.loaded && <View style={styles.loadingView}>
            <Image style={styles.loadingImage} />
        </View>
        }*/}
    </View>
  )
}
export default class MySwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgList: [
        'https://pic.made-in-china.com/8f4j00DBvtbdgqbLVp/made-in-china.jpg',
        'https://pic.made-in-china.com/8f4j00meZTquBkkDVN/made-in-china.jpg',
        'https://pic.made-in-china.com/8f4j00bCZaKpVMrDWn/made-in-china.jpg',
      ],
      loadQueue: [0, 0, 0]
    };
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
          <Swiper loadMinimal loadMinimalSize={1} style={styles.wrapper} height={160} loop={false}>
            {
              this.state.imgList.map((item, i) => <Slide
                loadHandle={() => this.loadHandle()}
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