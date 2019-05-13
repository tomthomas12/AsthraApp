import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event5 extends Component {
  render() {
    return (
<Description  description={"Date : February 07, 2019\nPrize Worth : 4k\n\nAn intra college event for the students of SJCET  irrespective of department.\n\nRules and regulations\nMaximum of three  members in a group.\nOne from each  group has to attend the quiz(Round 1). Best 10 teams will progress to next round.\nEach team should identify maximum images in the assigned time limit.Top 5 teams will be proceeded to next round.(Round 2)\nTask should be completed within the given  time limit.(Round 3)\nDecision of the panel will be final.\nUse of electronic gadget are strictly prohibited.\n\n\nCONTACT DETAILS\nJoyal Babu: +91 8606435899\nAkshaya Sasikumar : +91 9496429453"} imageUri={require("./img/event5.jpg")} Url={''} eventName={"Ravenclaw"} ></Description>
    
      );
  }
};

const styles = StyleSheet.create({




})
