import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../events/Description'

var {height,width}=Dimensions.get('window');

export default class general1 extends Component {
  render() {
    return (
<Description  description={"Date : February 08, 2019\nPrizes Worth : Rs.10,000\n\nLast Date for Entries : February 05, 2019\n\nIntra College Event\nProject competition exclusively for SJCET students\nTop 10 teams will be shortlisted and mentioned\nThe judgement of the jury will be final\nCertificates valid for KTU activity points\n\nCONTACT DETAILS\nDayney : +91 8921068496\nSharon :+91 9400284764"} imageUri={require("./img/general1.jpg")} Url={'https://www.townscript.com/e/project-asthra-2k19-142242'} eventName={"Project Asthra 2019"} ></Description>
    
      );
  }
};

const styles = StyleSheet.create({




})
