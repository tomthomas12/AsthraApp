import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event2 extends Component {
  render() {
    return (
      <Description description={"Date : February 07, 2019\nPrize Worth : 6k\n\nExperience the electrical carnival of fun tasks\n\nRules and Regulations\n\nA team of two members are allowed.\nParticipants must carry their ID cards.\nNo electronic equipments are allowed.\nStudents from any branch can participate.\nThe first 5 teams with maxumum points in the semi technical round will be shortlisted for the technical round.\n\nCONTACT DETAILS\nFebin Varghese : +91 830106770\nCecil Susan Kurian : +91 9495745943"} imageUri={require('./img/event2.jpg')} Url={'http://bit.ly/2HH1mPp'} eventName={"Elektriker 2.0"}></Description>

      );
  }
};

const styles = StyleSheet.create({




})
