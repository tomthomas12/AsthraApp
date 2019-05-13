import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../events/Description'

var {height,width}=Dimensions.get('window');

export default class workshop6 extends Component {
  render() {
    return (
    <Description  description={"Date : 07.02.2019\n\nRegistration Fee :300\n\nSo what's the secret to building a successful startup? You have to be passionate, committed and willing to work for the long haul. Many startups don't fail. Rather, their leaders just tend to give up too soon. Be hands on, set realistic goals for growth and development and take your startup journey one step at a time.Understanding the steps and principles here can be the difference between a failed startup and a successful one.\n\nCONTACT DETAILS\nSajan Jospeh :+91 7559973083 \nJobin P Thomas : +91 7025410172 "} imageUri={require("./img/workshop6.jpg")} Url={'https://www.townscript.com/e/how-to-build-a-startup-201044'} eventName={"Starting Trouble : How to build a Startup - KSUM"} ></Description>
    
      );
  }
};

const styles = StyleSheet.create({




})
