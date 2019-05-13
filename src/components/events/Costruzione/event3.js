import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event3 extends Component {
  render() {
    return (
<Description description={"Registration Fee :FREE ,Date : February 7,2019\nPrize worth: 5k\n\nGUIDELINES:\nTotal 3 rounds\nMaximum 15 groups\nTwo members per groups\nFor all branches\n\nCONTACT DETAILS\nSidhart : +91 9497433077\nSithara : +91 8921481164"} imageUri={require('./img/event3.jpg')} Url={'https://docs.google.com/forms/d/e/1FAIpQLSf6PoFJxNDPTB2p1xM85DFYdDspCkV-02T9Uyk--xrphQ66pA/viewform'} eventName={"Intellect-Intra College Quiz competition"}></Description>
    
      );
  }
};

const styles = StyleSheet.create({




})
