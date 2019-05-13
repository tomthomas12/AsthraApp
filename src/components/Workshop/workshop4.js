import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../events/Description'

var {height,width}=Dimensions.get('window');

export default class workshop4 extends Component {
  render() {
    return (
    <Description  description={"Registration Fee : Rs.600\n\nDate: 8.02.2019\n\nThis workshop is already pre inquired and a lot of participants from south India have shown their interest.This workshop will be conducted by two engineers who have travelled to France after their graduation and studied different historical art forms from around the globe. They have invented and contributed a lot to the modern Indian lifestyle.\n\nCONTACT DETAILS\nAjith Shaji : +91 7907146028 \nEmil Philip :+91  9496035628"} imageUri={require("./img/workshop4.jpg")} Url={'https://docs.google.com/forms/d/e/1FAIpQLSfyRALnE8Q94-3SrW4GuEu6IIgpCEnJQ92D_Dm9HM026M4ddQ/viewform'} eventName={"Loose Legs - Myself and My Moves"} ></Description>
    
      );
  }
};

const styles = StyleSheet.create({




})
