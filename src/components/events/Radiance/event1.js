import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event1 extends Component {
  render() {
    return (
      <Description  description={"Date : February 08, 2019\nPrize Worth : 12k\n\nIt’s like a treasure hunt that consists of both technical and non-technical rounds. Every challenges can be easily completed by simple logics and tricks. A clear vision would help you to chase it out. \n\nRules and regulations\nMaximum two members in a group.\nPrelims will be conducted.\nElimination process will take place after prelims.\nTime limit will be alloted for some specific levels.\nElectronic devices are strictly prohibited. \n\nCONTACT DETAILS\nAllen James : +91 7012767815\nStephy Jolly : +91 9846710851\n\nREGISTRATION DETAILS"} imageUri={require("./img/event1.jpg")} Url={'https://goo.gl/forms/kpZF2f7HexXCASLm2'} eventName={"Avengers Hunt"} ></Description>
    
      );
  }
};

const styles = StyleSheet.create({




})
