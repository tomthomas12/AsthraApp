import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event3 extends Component {
  render() {
    return (
      <Description  imageUri={require("./img/event3.jpg")} Url={'https://goo.gl/AqyHWZ'} eventName={"Trapped In The Past - Battle Of Brains"} description={"Date : February 07, 2019\nPrize Worth : 8k\n\nRules and Regulations\nA team must consists of 2-3 members.\nThere will be 3 rounds.\nMinimum time and maximum output is the qualification to next stage.\nParticipants must carry their ID card.\nStudents from any branch can participate.\n\nCONTACT DETAILS\nAnna Tomy : +91 8547990975\nAbin George : +91 9497371761"} ></Description>

      );
  }
};

const styles = StyleSheet.create({




})
