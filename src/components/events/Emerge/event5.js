import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event5 extends Component {
  render() {
    return (
      <Description description={"Date : February 07, 2019\nPrize Worth : 5k\nTheme - Paper Presentation\nArduino:Infinity Challenge is a multi round event based on arduino knowledge. Systems and softwares will be provided. It consists of debugging, programming and hardware developing.\nROUND 1 : DEBUGGING\nROUND 2 : PROGRAMMING\nROUND 3 : HARDWARE DEVELOPING\n\nRules and Regulations\nA team of 2 members can participate in it.\nMinimum time and maximum output is the qualification to next stage.\nParticipants must carry their ID card.\nNo electronic equipments are allowed.\nStudents from any branch can participate\n\nCONTACT DETAILS\nSarin Sudhakar : +91 9656654314\nRadhika R Nair : +91 9605988395"} imageUri={require('./img/event5.jpg')} Url={'http://bit.ly/2Sg5RVb'} eventName={"Arduino : Infinity Challenge"}></Description>

      );
  }
};

const styles = StyleSheet.create({




})
