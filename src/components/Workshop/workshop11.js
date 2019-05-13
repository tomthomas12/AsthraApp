import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../events/Description'

var {height,width}=Dimensions.get('window');

export default class workshop11 extends Component {
  render() {
    return (
    <Description  description={"Registration Fee : Rs.100\n\nDate: 7.02.2019\n\nBasically three hours talk \n\n1) 15mins current Electric vehicle market or scenario.\n\n2) 15 mins small history\n\n3) 15 mins parts identification\n\n4) 15 mins architecture\n\n5) 1 hr  advanced motors and motor controls used in electric vehicles . (Basic , types, functions, construction, final drive, examples)\n\n6) 30mins advance EV batteries (Basic, function, architecture, types, configuration)\n\n7) 15 mins charging station and chargers (types and function) \n\n 8) 15 mins open house session\n\nCONTACT DETAILS\nTinto George: +91 9562682771\nAshlin Shaju :+91 8592806062"} imageUri={require("./img/workshop11.jpg")} Url={''} eventName={"Talk on - MODERN ELECTRIC VECHICLES"} ></Description>
    
      );
  }
};

const styles = StyleSheet.create({




})
