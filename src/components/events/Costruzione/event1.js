import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event1 extends Component {
  render() {
    return (
<Description description={"Registration Fee : 600   ,Date    : 7.02.2019\n\nBridge design is one of the oldest topic of civil engineering. You will be introduced to various types of \nbridges and moving loads. This training gives you a unique opportunity to experience a hands on feel of \na civil engineering project. The participants will design on fabricate their own bridge and test for \nmaximum load. The discussion about implementing the knowledge gained to develop good btech or  mtech project.\nIIT Bombay authorized certificates will be provided for KTU credit points.\n\nCONTACT DETAILS\nJob Jose:  +91 9656527729\nGokul RG Nair : +91 9656451890"} imageUri={require('./img/event1.jpg')} Url={'https://www.townscript.com/e/bridge-designing-workshop-200244'} eventName={"Bridge Designing - IIT Bombay"}></Description>
      );
  }
};

const styles = StyleSheet.create({




})
