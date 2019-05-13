import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event3 extends Component {
  render() {
    return (
      <Description description={"Date : February 08, 2019\nPrize Worth : 7k\n\nCreate interesting articles using the provided scrap materials.\n\nCONTACT DETAILS\nEdwin : +91 9446846007\nVishnu : +91 9539464375"} imageUri={require('./img/event4.jpg')} Url={'https://goo.gl/FoT3iD'} eventName={"Bits and Pieces"}></Description>
      );
  }
};

const styles = StyleSheet.create({




})
