import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event5 extends Component {
  render() {
    return (
<Description  description={"Date : February 07, 2019\n\nPrize Worth : 4k\n\nA team based three round event challenging the engineering, problem solving skills and communication skills of players.\n\nLevel 1: Quiz\nWill involve application level questions in which the students are supposed to find answers . Using internet for reference is allowed.\n\nLevel 2: PUBG\nA series of team versus team PUBG battles where the winning teams advance into the final round\n\nLevel 3: Circuit Building Contest\nA spontaneous circuit building contest where students will be asked to build a circuit based on the output provided.\n\nRules and Regulations\nEach team must consist a minimum of 2 or a maximum 5 members.\nTeam players won't be allowed to talk to each other during the event. Writing or texting inorder to communicate is allowed. You can use internet in order to solve problems.\nThe qualification of team to the next round will be solely based on the degree of completion and time taken to do the same.\nThere decision of the Co-ordinators in charge will be final.\nEvent will start at 10:00am. Any team that fails to be present at the venue for a round will be automatically disqualified.\n\nCONTACT DETAILS\nAshlin Shaju : +91 8592806062 \nTinto George Joseph : +91 9562682771"} imageUri={require("./img/event5.jpg")} Url={'https://docs.google.com/forms/d/e/1FAIpQLSeBI4_IY9UDbuo1BehL6DadsZGycVLNCRnjnKexd9oErrZtBg/viewform'} eventName={"Kalopsia - Get Your Squad. Play. Win"} ></Description>      
      );
  }
};

const styles = StyleSheet.create({




})
