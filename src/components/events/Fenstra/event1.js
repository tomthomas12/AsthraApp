import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event1 extends Component {
  render() {
    return (
<Description  description={"Date: 07.02.2019\nPrize Worth : 8k\n\nRules and Regulations\nTotal of three rounds.\nAny number of team from a particular college.\nDecision of the judging committee will be final.\n\nCONTACT DETAILS\nHaris : +91 8129403169\nJoyal : +91 9061243470\n\nREGISTRATION DETAILS\nSpot Registration"} imageUri={require("./img/event1.jpg")} Url={''} eventName={"Koodaus - Where Coders Unite"} ></Description>
    
      );
  }
};

const styles = StyleSheet.create({




})
