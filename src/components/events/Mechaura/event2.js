import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event2 extends Component {
  render() {
    return (
      <Description description={"Date : February 07 & 08, 2019\nPrize Worth : 4k\n\nRide a Human Powered Vehicle (HPVC) in minimum time.\n\nCONTACT DETAILS\nAswin : +91 8547350418\nGeorge : +91 9496259783\nEva : +91 9497631380"} imageUri={require('./img/event3.jpg')} Url={'https://goo.gl/FoT3iD'} eventName={"Wild Ride"}></Description>
      );
  }
};

const styles = StyleSheet.create({




})
