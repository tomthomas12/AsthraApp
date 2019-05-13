import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../events/Description'

var {height,width}=Dimensions.get('window');

export default class workshop5 extends Component {
  render() {
    return (
    <Description  description={"Registration Fee : Rs.300\n\nDate: 8.02.2019\n\nTensorflow Bootcamp workshop is joined effort by The Nexus SJCET, Palai and Tinkerhub Community inorder to foster machine learning among students. This workshop will cover neural networks, different types of neural networks, tensorflow basics, building neural network's using tensorflow with a hands on session.\n\nSPEAKER: Gopikrishnan Sasikumar\n\nCONTACT DETAILS\nHanna Elsa: +91 8606012538\nAnandu R :+91 7012835996"} imageUri={require("./img/workshop5.jpg")} Url={'https://www.townscript.com/e/tensorflow-bootcamp-004133'} eventName={"Tensorflow Bootcamp"} ></Description>
    
      );
  }
};

const styles = StyleSheet.create({




})
