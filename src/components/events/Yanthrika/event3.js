import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event3 extends Component {
  render() {
    return (
<Description  description={"Date : February 08, 2019\n\nPrize Worth : 6k\n\nTreasure hunt based game where the contestants have to complete four tasks to reach the end.\n1.Quiz\n2.Circuit Making\n3.Decode The Location\n4.Puzzle Solving\n\nCONTACT DETAILS\nAlen Raju : +91 9400186889 \nSheethal Chakkiath : +91 9497025339"} imageUri={require("./img/event3.jpg")} Url={'https://docs.google.com/forms/d/e/1FAIpQLSeBI4_IY9UDbuo1BehL6DadsZGycVLNCRnjnKexd9oErrZtBg/viewform'} eventName={"Quatre - The Hunt Begins"} ></Description>
    
      );
  }
};

const styles = StyleSheet.create({




})
