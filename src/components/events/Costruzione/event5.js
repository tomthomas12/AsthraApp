import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event5 extends Component {
  render() {
    return (
      <Description description={"Registration Fee : FREE  ,Date : February 8,2019\nPrize worth : 6k\n\nGUIDELINES:\nSubjects : Construction of study,low cost,easy to build houses in flood affected areas.\nOriginal idea presentation (not more than 5-6 slides)\nBest ideas to be choosen and awards given\n\nCONTACT DETAILS\nPreena : +91 9544829968\nMerlin : +91 7034719291"} imageUri={require('./img/event5.jpg')} Url={'https://docs.google.com/forms/d/e/1FAIpQLSf6PoFJxNDPTB2p1xM85DFYdDspCkV-02T9Uyk--xrphQ66pA/viewform'} eventName={"Resurgo - Paper presentation"}></Description>

      );
  }
};

const styles = StyleSheet.create({




})
