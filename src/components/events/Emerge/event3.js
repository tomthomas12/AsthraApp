import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event3 extends Component {
  render() {
    return (
      <Description description={"Date : February 07 & 08, 2019\nPrize Worth : 5k\n\nThe cave you fear to enter holds the treasure you seek.\nRules and Regulations\nA team of three members is allowed.\nParticipants must carry their ID cards.\nNo electronic equipments are allowed.\nStudents from any branch can participate.\n\nCONTACT DETAILS\nJithin Babu : +91 9496352540\nDeepthi Mary John : +91 9497323723&emsp"} imageUri={require('./img/event3.jpg')} Url={'http://bit.ly/2Wy0W0Y'} eventName={"Mystery Cave"}></Description>

      );
  }
};

const styles = StyleSheet.create({




})
