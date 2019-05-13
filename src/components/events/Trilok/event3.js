import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event3 extends Component {
  render() {
    return (
      <Description  description={"Date: 07.02.2019\nPrize Worth : 8k\n\nRules and Regulation\nThere can be several number of teams that can participate from a single college.\nThere shall be four members in each team.\nParticipants should get their own laptops and internet facility.\n\nCONTACT DETAILS\nAmrin Zaina Noushad : +91 7012513435\nJose George : +91 9961778277\n\nREGISTRATION DETAILS\nSpot Registration\n"} imageUri={require("./img/event3.jpg")} Url={''} eventName={"Best Management Team Yuktha"} ></Description>
      );
  }
};

const styles = StyleSheet.create({




})
