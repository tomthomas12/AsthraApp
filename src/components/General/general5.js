import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../events/Description'

var {height,width}=Dimensions.get('window');

export default class general5 extends Component {
  render() {
    return (
<Description  description={"Date : February 07, 2019\nPrizes Worth : Rs. 5,000\n\nRegistration Fee : Rs.200\n\nTask Oriented Event\nIndividual players will have to complete different virtual rounds to win the final round\n Short VR workshop and classes will be provided along with it\nCertificates valid for KTU activity points\n\nRegistration Detail\nSpot on Registration\n\nCONTACT DETAILS\nAnto P. Biju :+91 9790024813\nJobin P Thomas : +91 7025410172"} imageUri={require("./img/general5.jpg")} Url={'http://asthra.co.in'} eventName={"VR Maze Challenge"} ></Description>
    
      );
  }
};

const styles = StyleSheet.create({




})
