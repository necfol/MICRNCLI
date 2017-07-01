import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation'
import LinearGradient from 'react-native-linear-gradient'
import MyNav from '../component/MyNav.js'
import MyStatusBar from '../component/MyStatusBar.js'
import { getcd } from '../action/cd.js'
const SCREEN_HEIGHT = Dimensions.get('window').height
const navigateAction = NavigationActions.back({
    key: null
})
var styles = StyleSheet.create({
  linearGradient: {
    height: 40,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  }
})
@connect(state => ({state}), 
        (dispatch, id) => ({
            navGo: () => dispatch(navigateAction),
            getCd: (id) => dispatch(getcd)
        })
)
export default class Cd extends Component {
  constructor(props) {
    super(props)
    this.state = {
        backgroundColor: `rgba(135, 130, 139, 0)`
    }
  }
  handleScroll(event) {
        this.setState({
            backgroundColor: `rgba(135, 130, 139, ${event.nativeEvent.contentOffset.y / 90})`
        })
  }
  componentDidMount() {
      this.props.getCd(this.props.id)
      console.log(this.props.id)
  }
  render() {
    return (
        <View style={{flex: 1}}>
            <MyStatusBar backgroundColor="#f6f6f6"/>
            <View style={{flex: 1, position: 'relative'}}>
                <Image style={{height: 350}} resizeMode="cover" source={{uri: 'https://p.qpic.cn/music_cover/nFEeTlC0NpakOMniakpfc5libIBhk6RIkxSfu3KlEAlI99BVn5bSNrkQ/600?n=1'}}>
                </Image>
                <View style={{position: 'absolute', top: 0, left: 0}}>
                    <MyNav textColor="#fff" backText="歌单" backgroundColor={this.state.backgroundColor} backFunc={() => {this.props.navGo()}}></MyNav>
                    <ScrollView style={{backgroundColor: 'rgba(246,246,246,0)', flex: 0, height: SCREEN_HEIGHT}} scrollEventThrottle={1} onScroll={e => this.handleScroll(e)}>
                        <View style={{height: 250}}></View>
                        <LinearGradient colors={['rgba(135, 130, 139,0)', 'rgba(135, 130, 139,1)']} style={styles.linearGradient}>
                        </LinearGradient>                        
                        {
                            [1,2,3,4,4,5,2,3,2,4,3,4,5,42,3,4,4,5,2,3,2,4,3,4,5,42,2,454,2,23,34,32,43,43,43,3,4,343,3,3,3,43,43,43,43,43,43].map((item, index) => (
                                <Text key={index}>haha</Text>
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
        </View>
    );
  }
}