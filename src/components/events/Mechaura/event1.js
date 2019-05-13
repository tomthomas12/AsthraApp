import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event1 extends Component {
  render() {
    return (
      <Description description={"Date : February 07, 2019\nPrize Worth :  11k\n\nUse your technical and analytical skills to crack the riddles and be the last team standing.\n\nCONTACT DETAILS\nSreehari : +91 9747232968\nKiran : +91 9947808295"} imageUri={require('./img/event1.jpg')} Url={'https://goo.gl/FoT3iD'} eventName={"Mechaura Quest"}></Description>
      );
  }
};

const styles = StyleSheet.create({




})
