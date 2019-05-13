import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event2 extends Component {
  render() {
    return (
      <Description  description={"Date: 07.02.2019\nPrize Worth : 8k\n\nRules and Regulations\nThere can be several number of teams that can participate from a single college.\nThere shall be minimum 3 or maximum 4 members in a team.\nParticipants should get their own laptops and internet facility.\n\nCONTACT DETAILS\nAnil P Thomas : +91 9605123273\nAnwin John : +91 8157800452\n\nREGISTRATION DETAILS\nSpot Registration"} imageUri={require("./img/event2.jpg")} Url={''} eventName={"Product Launch Udbhava"} ></Description>
      );
  }
};

const styles = StyleSheet.create({




})
