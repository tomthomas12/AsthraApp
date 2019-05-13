import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../events/Description'

var {height,width}=Dimensions.get('window');

export default class workshop3 extends Component {
  render() {
    return (
    <Description  description={"Registration Fee : Rs.600\n\nAttention friends, Asthra 2k19 brings to you a one day special workshop on a Visual Effect\nVisual Effect as a technology for visual simulation of reality and it’s influence to the representation Of a contemporary Hollywood cinematography. It focus mainly on the exploration of narrative forms and style through the comparison of film theory research during classical and post-classical film era.\n\nTopics: Aftereffects basic tools, Green screen Removing & keying, Rotoscoping.\n\nCONTACT DETAILS\nAbhijith Ravindran : 91 9496158140"} imageUri={require("./img/workshop3.jpg")} Url={'https://www.townscript.com/e/vfx-workshop-121011'} eventName={"Visual Effects (VFX) - MAAC,Kottayam"} ></Description>
    
      );
  }
};

const styles = StyleSheet.create({




})
