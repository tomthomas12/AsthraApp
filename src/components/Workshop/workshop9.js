import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../events/Description'

var {height,width}=Dimensions.get('window');

export default class workshop9 extends Component {
  render() {
    return (
    <Description  description={"Registration Fee : FREE\n\nDate: 7.02.2019\n\nApplied CS with Android is a program initiated by Google to provide students with hands-on coding practice and enhance their career trajectory. The program take students through a variety of android puzzle applications by building them with the necessary logic required. Data Structures and Algorithms fundamentals are the most basic skills of any student pursuing computer science. The course walks you through some of the popular interesting algorithms and their applications. Knowledge of Java and basic data structures are the prerequisites of this course. During this workshop multiple aspects of the course will be dealt with and an application will be built during the hands-on coding session.\n\nPlease note : Free workshop attendees must register with Rs.100 as part of Asthra 2019 registration at the entrance\n\nCONTACT DETAILS\nJithu K Jose :+91-9495680703\nElby Mariam Chandy: +91-7559902541"} imageUri={require("./img/workshop9.jpg")} Url={'https://www.townscript.com/e/applied-cs-with-android-040132'} eventName={"Applied Skills with Android - Google Developers Group"} ></Description>
    
      );
  }
};

const styles = StyleSheet.create({




})
