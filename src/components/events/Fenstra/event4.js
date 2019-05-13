import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event4 extends Component {
  render() {
    return (
<Description  description={"Date : February 07, 2019\nPrize Worth : 8k\n\nRules and Regulations\nMaximum five members per team.\nTotal of 2 rounds.\nTopic will be provided at the spot.\nShooting is only permitted in college campus.\nFinal video must be in mp4, avi or mkv with atleast 480p.\nTime limit for ad film is five minutes.\n\nCONTACT DETAILS\nRatheesh : +91 9605006207\nAshik : +91 9846852168\n\nREGISTRATION DETAILS\nSpot Registration"} imageUri={require("./img/event4.jpg")} Url={''} eventName={"Film Curto - Ad Film Creation"} ></Description>
    
      );
  }
};

const styles = StyleSheet.create({




})
