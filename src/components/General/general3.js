import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../events/Description'

var {height,width}=Dimensions.get('window');

export default class general3 extends Component {
  render() {
    return (
<Description  description={"Date : February 07, 2019 \nPrizes Worth : Rs. 20,000\n\nLast Date for Entries : February 05, 2019\nInter College Even\nTop 20 teams will be shortlisted based on their ideas\nEach team can have 2-5 members\nSoftware and Hardware solutions can be presented\nStudents shall present a complete solution of the problem statement given to them by the end!\nStudents must bring their own laptops and project materials for the event\nThe judgement of the jury will be final\nCertificates valid for KTU activity points\n\nCONTACT DETAILS\nVineeth :+91 8891313935\nGouri :+91 8921498828"} imageUri={require("./img/general3.jpg")} Url={'https://www.townscript.com/e/smart-hackathon-113314'} eventName={"Smart Hackathon"} ></Description>
    
      );
  }
};

const styles = StyleSheet.create({




})
