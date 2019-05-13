import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event5 extends Component {
  render() {
    return (
<Description  imageUri={require("./img/event5.jpg")} Url={'https://bit.ly/2t1gYCY'} eventName={"Spectra"} description={"Date : February 08, 2019\nPrize Worth : 5k\n\ntriple-tiered event built to technically and inlectually challenge your inner engineeer.\n\nRules and Regulations\nA team must consists of 2-3 members.\nParticipants must carry their ID card.\nStudents from any branch can participate.\n\nCONTACT DETAILS\nAmalu Saji : +91 9961055161\nSidharth S : +91 9526311414"} ></Description>
    
      );
  }
};

const styles = StyleSheet.create({




})
