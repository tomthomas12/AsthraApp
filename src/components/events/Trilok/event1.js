import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event1 extends Component {
  render() {
    return (
      <Description  description={"Registration Fee : Rs.100\nDate: 07.02.2019\nPrize Worth : 10k\n\nRules and Regulations\nBest manager is an individual event.\nBest manager competition is open for both UG and PG students.\nThere can be maximum two participants from each college.\nAll participants should mandatorily bring their college ID card.\nParticipants dress code - Business casual.\nRules and details of the rounds shall be described on the spot.\nParticipants should carry their updated resume.\nDecision of the judges will be final.\n\nCONTACT DETAILS\nChitra Das : +91 8848975353\nAbraham : +91 9633275929\n\nREGISTRATION DETAILS:Spot Registration"} imageUri={require("./img/event1.jpg")} Url={''} eventName={"Manager Pramukh"} ></Description>
      );
  }
};

const styles = StyleSheet.create({




})
