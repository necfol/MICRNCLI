import React, { Component } from 'react';
import { View, Image, Dimensions, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Sound from 'react-native-sound'
import { VibrancyView } from 'react-native-blur';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class PlayBtnView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songName: 'React native Music',
      playStatus: false,
      sound: null,
      playImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAABVCAYAAAA49ahaAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAFF0lEQVR42u3dW0gjVxwG8MmFmATJBWutSawNlqjRaKkVjNbLgw9agpcqtdRSsUqsUnyoFS+YgvhQpNZYpQgK1irekBVW0PUaqBXXGDVKkapBpZYQbyFoPG+F9KFJKuyKu2aSM3NmPvgeA+f8CMOfyZwJhtGBl4mJCQ2fz79UKpWm8fHxPNjrQSJyuXwPwzCXuyAzM/PZzs6OAva6yB6A/Y/qwjDMxWKxnNXV1T9eXV3xYS+OrHkB1VOxWGzt7u6uhL1AMuZeVHdBfHy8cWlpKRX2QsmUh1C9uEVFRcPHx8dvwV4wGfKqqC4Mw1w8Hs+u0+kaYS+a6HktVHdBRETEwdjYGD2C3ZPHoHpxMzIynm1vb8fA3gTR4guqC8MwF5PJdFZVVekvLi6CYW+GKPEZ1VOxWGzt6urSwt4QEYIbqrsgLi7OtLi4SOkRDG9UL25hYeEIVUcwf6G6MAxzcblce0tLS/Pt7S0T9kYDGb+ieiqTyQ5GRkYKYG8WKVR3QVpa2uLW1hbyI1ggUb0jmFar1Z+fnyM7ggUc1VORSGTV6/VIjmDQUN0FSqXSND8//yFsCJRQvbgFBQUjR0dHSIxgREH1jmBNTU0tTqeT1CMYoVA9lUqlluHh4Y9h4yCF6i5ITU1d3NzcVMJGQgnVO4JVVlb+RKYRjPCongqFQltnZ+dXsMGQQnUXxMbGbs3NzWXAhkMJ1Yubl5c3ZrFYJLABUUJ1YRjmCgoKcjQ2Nn53c3PDhg2JDKqnEonEMjQ0VAwbEylUd4FarV7e2NiIp1FxLpPJdFZUVPScnZ0JaFScKxQKbR0dHTU0qh8uCdHR0ebZ2dksGtUPuBqNZuLw8FBGo+JcDofjaGho8PsIRilUT8PDw48GBwc/oVH9cElISUlZNhqNuI9gVEZ1Ydh/I1h5efnPNpsNtxGM8qieCgQCW3t7+9c0qh8uCQqFwuzrXTAa9SVlMBigr6/vcxoV50qlUstdKFL/EkmUsNnsfx77Wfqb+pKyWCzn6OhoAY2KT4FarV5eW1t777GgNOodzKioqD8mJyc/8gWTRnU3JCTkb7wflKMsKpfLtdfX17c6HA4OnqCURGUwGKC0tLT/5OTkTbwxqYgKsrKyZkwmk98fI6ICKoiJidmanp7O9jcmJVDDwsJOent7vwgUJtKofD7/UqfTNcJ6zhUpVM/P01arVQQDEzVUkJOT82R3d/ddmJiooILExMTnCwsLhDqIQVZUIJPJDgYGBj6FDYgEqkAgsLW1tX0DGw4JVDabfV1TU/MDGR5TJwMqyM/PH9vf338bNhYKqCA5Ofm3lZWVD2AjoYAK5HL5ni933mGHUKhisdgK6/FH5FA5HI6jrq6uzW63c2GDkB6VwWCAkpKSX1A56AsbFaSnp8+vr68nwAZAARUoFArz1NRUDuyNI4EaGhr6V09Pz5ewN4wEKo/Hszc3N7dcX18T6gAZKVGZTKazrKys9/T09A3Ymwx0/IEKsrOzn5rNZsq+MBxPVKBSqYwzMzNZsDcFO7igSiQSS39//2ewN0OU+IQaHBx83tra+i3V3uX3UB6Fymazr7VarR7Pwwco5XVRgUajmdjb23sH9sKJnFd+JX1SUtLvBoMhBfaCyZAH/zwhMjLyTzK/IwpG7kUViURWvM4VUSoMBuMFVA6H46itrf3+8vKS/kOax0SlUhmxO/c2i4uLfw3U8W1kYzAYUhISEp7n5uY+WV1dfR/2eujQoeNr/gXVzNsC/CR0GwAAAABJRU5ErkJggg==',
      holdImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAABVCAYAAAA49ahaAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAABl0lEQVR42u3dsU7CQByA8fNiF8JjuDk6A1KLb2j6LobgYEJwEFkwMfokDtXFRcOgvfvkIN8v6XjX/33p1jQNQZIk6dfWy/mwmY7bGONLCOG17xVjfGmm43a9nA+PaZ5emum4DSF85LquLkftMc3Ty9cTke0QX/sd/Dwx5RBd1yWt37Xf8+P9aUnz9FmXdYgMzvY9QA6lRT0KRgUYFWBUgFEBRgUYFWBUgFEBRgUYFWBUgFEBRgUUF/WjwJn+6uAPUCKjAowKMCrAqACjAowKMCrAqACjAowKMCrAqACjAoqLehJCt+8ZUhUX9RgYFWBUgFEBRgUUF9UXf9rJqACjAowKMCrAqACjAowKMCrAqACjAowKMCrAqACjAowKMCrAqACjAowKMCrAqACjAowKMCrAqACjAowKMCrAqIDSor7te4AckqLGGLN+SRJj7M4vRu8lzdNrXcpNZ/XkNuchZldp+6Wu/+k6836/slndDZp60lZVtQ0Jf4Coqmrb1JP2abVI+gPE5iHfPLN6crNZLQb/HlWS9M0nNcbLUFmjGAwAAAAASUVORK5CYII='
    }
  }
  play() {
    if(!this.state.playStatus) {
      this.setState({
        sound: new Sound('104251904.m4a?vkey=EFE8B976CD2B2D871FCA958F2F7B4768103AB8AA76AEA8F78A4BCAA3D3E89FDE076BB272705F05EE80557ACC9F4EF8490EF43F0C4293FDF0&guid=264167871&uin=791294471&fromtag=66', 'https://dl.stream.qqmusic.qq.com', (error) => {
                  if (error) {
                    return;
                  }
                  this.state.sound.play();                  
                })
      })
    } else {
      this.state.sound.pause();
    }
    this.setState({
      playStatus: !this.state.playStatus
    })
  }
  render() {
    return (
        <VibrancyView blurType="xlight" blurAmount={90} style={styles.playBtnView}>
            <Image source={require('../assert/img/qqmusic.png')} resizeMode="contain" style={{height: 40, width: 40}}></Image>
            <Text style={{fontSize: 18}}>{this.state.songName}</Text>
            <TouchableHighlight onPress={() => this.play()}>
              <Image resizeMode="contain" style={{height: 25, width: 25}} source={{uri: this.state.playStatus ? this.state.holdImg : this.state.playImg}}></Image>
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