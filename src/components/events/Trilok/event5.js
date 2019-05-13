import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event5 extends Component {
  render() {
    return (
<Description  description={"Date: 07.02.2019\nPrize Worth : 2k\n\nRules and Regulations\nTheme will be provided on the spot.\nMobile or SLR, DSLR allowed.\nLate submission not permitted.\nCollege students are also allowed for the participation.\n\nCONTACT DETAILS\nGeorge G Plathottam : +91 8606033440\nAmjid Bin Shihab : +91 6282477208\n\nREGISTRATION DETAILS\nSpot Registration"} imageUri={require("./img/event5.jpg")} Url={''} eventName={"Spot Photography"} ></Description>
    
      );
  }
};

const styles = StyleSheet.create({




})
