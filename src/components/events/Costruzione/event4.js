import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event4 extends Component {
  render() {
    return (
      <Description description={"Registration Fee : FREE  ,Date : February 8,2019\nPrize worth: 5k\n\nGUIDELINES:\nMaximum 10 teams\nmembers per team\n200 stick and glue will be provided.\n\nCONTACT DETAILS\nHarry : +91 8547948429\nJibin : +918281363995"} imageUri={require('./img/event4.jpg')} Url={'https://docs.google.com/forms/d/e/1FAIpQLSf6PoFJxNDPTB2p1xM85DFYdDspCkV-02T9Uyk--xrphQ66pA/viewform'} eventName={"Ponte - Bridge Building"}></Description>

      );
  }
};

const styles = StyleSheet.create({




})
