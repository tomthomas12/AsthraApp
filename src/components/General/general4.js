import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../events/Description'

var {height,width}=Dimensions.get('window');

export default class general4 extends Component {
  render() {
    return (
<Description  description={"Date : February 07, 2019\nPrizes Worth : Rs. 30,000\n\nLast Date for Entries : February 05, 2019\n\nInter College Event\nParticipants can exhibit your startup products\nPrototypes and young projects with respect to any engineering or business field can be exhibited\nEach team can have 1-5 members\nA 10 slides PPT of your project need to be presented\nThe judgement of the jury will be final\nCertificates valid for KTU activity points\n\nCONTACT DETAILS\nVishnu :+91 9544148221\nAbhay :+91 9746821352 "} imageUri={require("./img/general4.jpg")} Url={'https://www.townscript.com/e/mega-startup-and-project-contest-322143'} eventName={"Startup & Project Contest"} ></Description>
    
      );
  }
};

const styles = StyleSheet.create({




})
