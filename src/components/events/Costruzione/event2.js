import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event2 extends Component {
  render() {
    return (
      <Description description={"Registration Fee : FREE  ,Date : February 7,2019\nPrize worth : 6k\n\nGUIDELINES\nTwo members per team\nIn first round,screening test shall be conducted for 1 hour and top 5 team will be selected.\nIn final round,task will be given and top 2 winners will be decided based on the accuracy within short time.\n\nCONTACT DETAILS\nSam T Sabu : +91 9947681659\nHarsha : +91 7558080932"} imageUri={require('./img/event2.jpg')} Url={'https://docs.google.com/forms/d/e/1FAIpQLSf6PoFJxNDPTB2p1xM85DFYdDspCkV-02T9Uyk--xrphQ66pA/viewform'} eventName={"Critique-Survey Hunt"}></Description>

      );
  }
};

const styles = StyleSheet.create({




})
