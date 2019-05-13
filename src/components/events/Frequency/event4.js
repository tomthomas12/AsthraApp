import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event4 extends Component {
  render() {
    return (
      <Description  imageUri={require("./img/event4.jpg")} Url={'https://bit.ly/2t9S1pj'} eventName={"Alegra 2k19"} description={"Date : February 08, 2019\nPrize Worth :4.5k\n\nAlegra 2k19 is a fun event packed with bulks of knowledge that takes every person on a wonderful journey with limitless possibilities of finding your true self.\n\nRules and Regulations\nMinimum time and maximum output is the qualification to next stage.\nParticipants must carry their ID card.\nStudents from any branch can participate.\n\nCONTACT DETAILS\nAngitha Maria Mathew : +91 9562702852\nJasmine Joseph : +91 9605306474"} ></Description>

      );
  }
};

const styles = StyleSheet.create({




})
