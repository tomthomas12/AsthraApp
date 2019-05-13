import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event3 extends Component {
  render() {
    return (
<Description  description={"Date : February 07, 2019\nPrize Worth : 8k\n\nIt is the multi-round technical event which welcome the participants to exhibit their talent in webpage designing, that enlights to the era of advertisement.\n\nRound 1 : Google the Pic.\nRound 2 : Web page designing\n\nRules and regulations\nMaximum 2 members per group.\nParticipants will be given 2 hours to design a website.\nParticipants are not allowed to deviate from the topics given to them.\nParticipants are suppose to design a website based on the topics given.\nParticipants are prohibited from bringing their own resources.\nParticipants can use only permitted development tools.\nDecision of the judges will be final. \n\nCONTACT DETAILS\nMeenu R. : +91 9446783741\nShain Tom Mathew : +91 8281262188\n\nREGISTRATION DETAILS"} imageUri={require("./img/event3.jpg")} Url={'https://bit.ly/2UDVE2r'} eventName={"Markup 3.0"} ></Description>    
      );
  }
};

const styles = StyleSheet.create({




})
