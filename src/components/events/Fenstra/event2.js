import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event2 extends Component {
  render() {
    return (
<Description  description={"Date : February 07, 2019\nPrize Worth : 15k\n\nRules and Regulations\nThree or four members per team.\nThere will be 3 rounds:\nRound 1 : Find-O-Search\nRound 2 : Word Safari\nFinal Round : Treasure Hunt\n\nThere will be an optional aptitude test if there are more than 12 teams.\nGroup cohesion,communication,cooperation will be analyzed.\nNo limit to the number of teams that can participate from a single college.\nTop 4 teams will be selected for final.\nThe organizers reserve the right to change the rules or nature of rounds at any point of time if the situation demands.\n\nCONTACT DETAILS\nSarath K J : +91 9400358667\nJyothi : +91 9061442396\n\nREGISTRATION DETAILS\nSpot Registration"} imageUri={require("./img/event2.jpg")} Url={''} eventName={"Flabbergast - Mega Event"} ></Description>
    
      );
  }
};

const styles = StyleSheet.create({




})
