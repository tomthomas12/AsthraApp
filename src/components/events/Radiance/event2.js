import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event2 extends Component {
  render() {
    return (
      <Description  description={"Date : February 08, 2019\nPrize Worth : 10k\n\nCrack. Code. Conquer.\n\nEnsnare your senses and bewitch your minds with idiosyncratic quandaries ahead!\n\nRound 1: Crypt your Mind >> Decipher the given set of Cipher text.\nRound 2: <Code_it/>  Showcase your depth in C language.\nRound 3:  Hackaholix >> Inspect the web page and crack the passwords. \n\nRules and Regulations\nA team can consist of maximum 2 individuals.\nTeam with maximum points will be crowned as the winner.\nUse of smartphones and other electronic gadgets is strictly prohibited.\nInternet facility and online tools will be provided as and when required.\nThe decisions of the coordinators will be final.\n\nCONTACT DETAILS</h4>Andrews P George : +91 81298 84007\nAneesha Shali George: +91 98461 90243\n\nREGISTRATION DETAILS"} imageUri={require("./img/event2.jpg")} Url={'https://bit.ly/2UA1bag'} eventName={"Invictus 2.0"} ></Description>
      );
  }
};

const styles = StyleSheet.create({




})
