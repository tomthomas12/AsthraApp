import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../events/Description'

var {height,width}=Dimensions.get('window');

export default class general2 extends Component {
  render() {
    return (
<Description  description={"Date : February 08, 2019\nPrizes Worth : Rs.15,000\n\nLast Date for Entries : February 04, 2019\n\nInter College Event\nTop 20 teams will be shortlisted based on their ideas\nExhibit your innovative, engineering and business ideas\nEach team can have 2-4 members\nA 9 slides PPT of your project need to be presented\nStudents must bring laptop, and materials for the event\nThe judgement of the jury will be final\nCertificates valid for KTU activity points\n\nCONTACT DETAILS\nAgnes :+91 9747434220\nElias : +91 7558907464"} imageUri={require("./img/general2.jpg")} Url={'https://www.townscript.com/e/idea-is-money-130442'} eventName={"Idea is Money"} ></Description>
    
      );
  }
};

const styles = StyleSheet.create({




})
