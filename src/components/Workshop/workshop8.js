import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../events/Description'

var {height,width}=Dimensions.get('window');

export default class workshop8 extends Component {
  render() {
    return (
    <Description  description={"Registration Fee : Rs.600\n\nDate: 8.02.2019\n\nEmbedded systems are not only one of the most important fields for current computer-based applications, it is also one of the most challenging fields of software engineering: embedded systems must meet real-time requirements, are safety critical and distributed over multiple processors. Embedded systems are used in many areas -- from vehicles and mobile phones to washing machines and printers. Nowadays it is impossible to imagine our life without them. The increasing complexity and real-time requirements require new modeling techniques as well as application of formal methods.\n\nCONTACT DETAILS\nAswin Suresh : +91 9400722952 \nSwathy Sanjeev: +91 7561821379"} imageUri={require("./img/workshop8.jpg")} Url={'https://www.townscript.com/e/embedded-system-and-designing-414442'} eventName={"Embedded System Designing"} ></Description>
    
      );
  }
};

const styles = StyleSheet.create({




})
