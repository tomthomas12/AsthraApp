import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event4 extends Component {
  render() {
    return (
      <Description description={"Date : February 08, 2019\nPrize Worth : 5k\n\n“Every project is a coordination between your enthusiasm and ability”.GET IT DONE!!!\nOur environmental balance is seriously destabilized by our own activities. A solution for one of the same may be proposed.\n(Topic will be given prior to the competition).\n\nRules and Regulations\nEach team shall contain a maximum of 3 members.\n3-4 minutes presentation with 5 slides.\nThe slides should contain : Introduction, Problem definition and Problem solution.\nParticipants must carry their ID cards.\n\nCONTACT DETAILS\nSandra Saji : +91 9496410498\nPraveena Sajan : +91 9497254049"} imageUri={require('./img/event4.jpg')} Url={'http://bit.ly/2Wy0W0Y'} eventName={'Conjure Up Conceptions'}></Description>

      );
  }
};

const styles = StyleSheet.create({




})
