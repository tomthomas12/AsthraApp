import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event2 extends Component {
  render() {
    return (
<Description  description={"Date : February 07, 2019\n\nPrize Worth : 2k\n\nSingle level event comprising 2 tasks . A team of 2 who completes the event with least time is awarded the winner.\n\nCONTACT DETAILS\nEmil Philip : +91 9497035628\nAmal K George : +91 8943081395"} imageUri={require("./img/event2.jpg")} Url={'https://docs.google.com/forms/d/e/1FAIpQLSeBI4_IY9UDbuo1BehL6DadsZGycVLNCRnjnKexd9oErrZtBg/viewform'} eventName={"Otro Lado"} ></Description>
    
      );
  }
};

const styles = StyleSheet.create({




})
