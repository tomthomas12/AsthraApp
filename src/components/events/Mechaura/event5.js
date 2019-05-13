import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event5 extends Component {
  render() {
    return (
<Description description={"Registration Fee : 450  ,Date : February 08, 2019\n\nAttention bike lovers, Asthra 2K19 brings to you a one-day workshop featuring two of the most exotic bike brands in the world.\nBrace yourself, the Italian pioneers in speed racing is coming all the way to SJCET to showcase their flagship bikes- The Monster and Multistrada in association with EVM Autokraft Cochin to exhibit Ducati’s proprietary engineering marvel THE DVT® Technology along with static run to illustrate the performance parameters of the Italian speedster.\n\nTime travel to JAWA era as we bring you a collection of JAWA bikes in association with Trivandrum Jawa Yezdi Motor club from the year 1960 to 1996. This session will also include simple bike hacks and road safety class by Mr. Sreejith K S.\n\nCONTACT DETAILS\nHarishankar : +91 9633380133\nAbhinav : +91 9048194479"} imageUri={require('./img/event5.jpg')} Url={'https://www.townscript.com/e/crossroads-044243'} eventName={"Crossroads"}></Description>
    
      );
  }
};

const styles = StyleSheet.create({




})
