import React, { Component } from 'react';
import { View, Image, Dimensions, Text, StyleSheet, TouchableHighlight } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob'
import Sound from 'react-native-sound'
import { VibrancyView } from 'react-native-blur';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class PlayBtnView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // http://ws.stream.qqmusic.qq.com/104251904.m4a?fromtag=46
      playImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAABVCAYAAAA49ahaAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAFF0lEQVR42u3dW0gjVxwG8MmFmATJBWutSawNlqjRaKkVjNbLgw9agpcqtdRSsUqsUnyoFS+YgvhQpNZYpQgK1irekBVW0PUaqBXXGDVKkapBpZYQbyFoPG+F9KFJKuyKu2aSM3NmPvgeA+f8CMOfyZwJhtGBl4mJCQ2fz79UKpWm8fHxPNjrQSJyuXwPwzCXuyAzM/PZzs6OAva6yB6A/Y/qwjDMxWKxnNXV1T9eXV3xYS+OrHkB1VOxWGzt7u6uhL1AMuZeVHdBfHy8cWlpKRX2QsmUh1C9uEVFRcPHx8dvwV4wGfKqqC4Mw1w8Hs+u0+kaYS+a6HktVHdBRETEwdjYGD2C3ZPHoHpxMzIynm1vb8fA3gTR4guqC8MwF5PJdFZVVekvLi6CYW+GKPEZ1VOxWGzt6urSwt4QEYIbqrsgLi7OtLi4SOkRDG9UL25hYeEIVUcwf6G6MAxzcblce0tLS/Pt7S0T9kYDGb+ieiqTyQ5GRkYKYG8WKVR3QVpa2uLW1hbyI1ggUb0jmFar1Z+fnyM7ggUc1VORSGTV6/VIjmDQUN0FSqXSND8//yFsCJRQvbgFBQUjR0dHSIxgREH1jmBNTU0tTqeT1CMYoVA9lUqlluHh4Y9h4yCF6i5ITU1d3NzcVMJGQgnVO4JVVlb+RKYRjPCongqFQltnZ+dXsMGQQnUXxMbGbs3NzWXAhkMJ1Yubl5c3ZrFYJLABUUJ1YRjmCgoKcjQ2Nn53c3PDhg2JDKqnEonEMjQ0VAwbEylUd4FarV7e2NiIp1FxLpPJdFZUVPScnZ0JaFScKxQKbR0dHTU0qh8uCdHR0ebZ2dksGtUPuBqNZuLw8FBGo+JcDofjaGho8PsIRilUT8PDw48GBwc/oVH9cElISUlZNhqNuI9gVEZ1Ydh/I1h5efnPNpsNtxGM8qieCgQCW3t7+9c0qh8uCQqFwuzrXTAa9SVlMBigr6/vcxoV50qlUstdKFL/EkmUsNnsfx77Wfqb+pKyWCzn6OhoAY2KT4FarV5eW1t777GgNOodzKioqD8mJyc/8gWTRnU3JCTkb7wflKMsKpfLtdfX17c6HA4OnqCURGUwGKC0tLT/5OTkTbwxqYgKsrKyZkwmk98fI6ICKoiJidmanp7O9jcmJVDDwsJOent7vwgUJtKofD7/UqfTNcJ6zhUpVM/P01arVQQDEzVUkJOT82R3d/ddmJiooILExMTnCwsLhDqIQVZUIJPJDgYGBj6FDYgEqkAgsLW1tX0DGw4JVDabfV1TU/MDGR5TJwMqyM/PH9vf338bNhYKqCA5Ofm3lZWVD2AjoYAK5HL5ni933mGHUKhisdgK6/FH5FA5HI6jrq6uzW63c2GDkB6VwWCAkpKSX1A56AsbFaSnp8+vr68nwAZAARUoFArz1NRUDuyNI4EaGhr6V09Pz5ewN4wEKo/Hszc3N7dcX18T6gAZKVGZTKazrKys9/T09A3Ymwx0/IEKsrOzn5rNZsq+MBxPVKBSqYwzMzNZsDcFO7igSiQSS39//2ewN0OU+IQaHBx83tra+i3V3uX3UB6Fymazr7VarR7Pwwco5XVRgUajmdjb23sH9sKJnFd+JX1SUtLvBoMhBfaCyZAH/zwhMjLyTzK/IwpG7kUViURWvM4VUSoMBuMFVA6H46itrf3+8vKS/kOax0SlUhmxO/c2i4uLfw3U8W1kYzAYUhISEp7n5uY+WV1dfR/2eujQoeNr/gXVzNsC/CR0GwAAAABJRU5ErkJggg=='
    }
  }
  play() {
    RNFetchBlob.fetch('GET', 'https://ws.stream.qqmusic.qq.com/104251904.m4a?fromtag=46', {
        // Authorization : 'Bearer access-token...',
        // more headers  ..
      })
      // when response status code is 200
      .then((res) => {
        console.log('=============')
        // the conversion is done in native code
        let base64Str = res.base64()
        // the following conversions are done in js, it's SYNC
        let text = res.text()
        let json = res.json()
        console.log(json)
      })
      // Status code is not 200
      .catch((errorMessage, statusCode) => {
        console.log('=============',errorMessage)
        // error handling
      })    
    // var s = new Sound('/104251904.m4a?fromtag=46', 'http://ws.stream.qqmusic.qq.com', (e) => {
    //   if (e) {
    //     console.log(e);
    //   } else {
    //     s.play();
    //   }
    // });  
  }
  render() {
    return (
        <VibrancyView blurType="xlight" blurAmount={90} style={styles.playBtnView}>
            <Image source={require('../assert/img/qqmusic.png')} resizeMode="contain" style={{height: 40, width: 40}}></Image>
            <TouchableHighlight onPress={() => this.play()}>
              <Image resizeMode="contain" style={{height: 25, width: 25}} source={{uri: this.state.playImg}}></Image>
            </TouchableHighlight>
        </VibrancyView>
    );
  }
}
 
const styles = StyleSheet.create({
  playBtnView: {
    height: 60,
    width: SCREEN_WIDTH,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 25,
    paddingRight: 25,
    alignItems: 'center'
  }
});