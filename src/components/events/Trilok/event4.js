import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event4 extends Component {
  render() {
    return (
<Description  description={"Date: 07.02.2019\nPrize Worth :8k\n\nRules and Regulations\nThere can be several number of teams that can participate from a single college.\nThere shall be two members in a team.\nIndividual participants are not allowed to take part.\n\nCONTACT DETAILS\nTeena Jose : +91 9400402642\nAthira M Nair : +91 9400234019\n\nREGISTRATION DETAILS\nSpot Registration"} imageUri={require("./img/event4.jpg")} Url={''} eventName={"Business Quiz Vinjana"} ></Description>    
      );
  }
};

const styles = StyleSheet.create({




})
