import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event3 extends Component {
  render() {
    return (
<Description  description={"Date : February 07, 2019\nPrize Worth : 3k\n\nRules and Regulations\n\nGame modes will be decided by the committee.\nParticipants in a team for all rounds will be same.\nAny number of team from a particular college.\nCheating may lead to disqualification.\n\nCONTACT DETAILS\nMartin : +91 8848611511\nSahith : +91 7034928501\n\nREGISTRATION DETAILS\nSpot Registration"} imageUri={require("./img/event3.jpg")} Url={''} eventName={"Last Man Standing - Chicken Dinner Awaits"} ></Description>
    
      );
  }
};

const styles = StyleSheet.create({




})
