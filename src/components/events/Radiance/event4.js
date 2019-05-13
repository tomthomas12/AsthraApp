import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event4 extends Component {
  render() {
    return (
<Description  description={"Date : February 07, 2019\nPrize Worth :8k\n\n“Explore your Way to the Coding World”\n\nRound 1 :Aptitude\nRound 2 : Blind Coding - The team/player has to test their coding skills by solving the given problem without looking at their monitors.\nRound 3 : CTF - CTF stands for Capture The Flag. The team/Player is required to capture the flags by solving the challenges.\n\nRules and regulations\nMaximum 2 participants per team\nPlayers would be eliminated after each round.\nPen drives are prohibited.\nParticipants can use laptops, mobiles, internet and other online tools(Only in Round 3>>CTF)\nThe team/Player with maximum points will be crowned as the winner.\nThe decisions of the coordinators will be final.\nID cards are mandatory. \n\nCONTACT DETAILS\nSanthosh Thomas : +91 9074134303\nAishwarya Michael : +91 9650363552"} imageUri={require("./img/event4.jpg")} Url={'http://bit.ly/2sPYAge'} eventName={"Technathon"} ></Description>
    
      );
  }
};

const styles = StyleSheet.create({




})
