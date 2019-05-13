import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../events/Description'

var {height,width}=Dimensions.get('window');

export default class workshop10 extends Component {
  render() {
    return (
    <Description  description={"Registration Fee : Rs.600\n\nDate: 7.02.2019\n\nBridge design is one of the oldest topic of civil engineering. You will be introduced to various types of bridges and moving loads. This training gives you a unique opportunity to experience a hands on feel of a civil engineering project. The participants will design on fabricate their own bridge and test for maximum load. The discussion about implementing the knowledge gained to develop good btech or mtech project.\n\nIIT Bombay authorized certificates will be provided for KTU credit points.\n\nCONTACT DETAILS\nJob Jose:  +91 9656527729\nGokul RG Nair : +91 9656451890"} imageUri={require("./img/workshop10.jpg")} Url={'https://www.townscript.com/e/bridge-designing-workshop-200244'} eventName={"Bridge Designing - IIT Bombay"} ></Description>
    
      );
  }
};

const styles = StyleSheet.create({




})
