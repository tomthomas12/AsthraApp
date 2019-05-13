import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event2 extends Component {
  render() {
    return (
      <Description  imageUri={require("./img/event2.jpg")} Url={'https://goo.gl/iWsK15'} eventName={"Blood In The Wire"} description={"Date : February 07, 2019\nPrize Worth : 3k\nEveryone's suspect...Can you figure out who did what?\n\nRules and Regulations\n\nA team of two or three members will be our investigation team.\nThe use of electronic gadget are strictly prohibited.\nFailure in completion of a level at the given time will not result in elimination. So team can move to next level.\n\nCONTACT DETAILS\nAshik Muhammed Saih : +91 9495332436\nSeby Antony : +91 994683632"} ></Description>

      );
  }
};

const styles = StyleSheet.create({




})
