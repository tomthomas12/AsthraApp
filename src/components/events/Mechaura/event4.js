import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event4 extends Component {
  render() {
    return (
      <Description description={"Date : February 07, 2019\nPrize Worth : 2k\n\nReplace the damaged tyre in minimum time with the help of car jack and other tools.\n\nCONTACT DETAILS\nAbin : +91 7902618355\nJohns : +91 8606844962"} imageUri={require('./img/event2.jpg')} Url={'https://goo.gl/FoT3iD'} eventName={"Pit Stop"}></Description>

      );
  }
};

const styles = StyleSheet.create({




})
