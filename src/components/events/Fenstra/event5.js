import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event5 extends Component {
  render() {
    return (
      <Description  description={"Round 1: Quiz. Here the participants will be given a simple quiz with 10 questions.\n\nRound 2: blind coding The team/player has to test their coding skills by solving the given problem  without looking at their monitors.\n\nRound 3: CTF It is a competition or quest where the player/team will be given a clue to solve. The clues mostly will be digital. They can be solved using online tools, basic computer knowledge and programming. Solving a clue will reveal a string or flag which should be submitted for completion of a task and the reveal of the next clue."} imageUri={require("./img/event5.jpg")} Url={''} ></Description>
    
      );
  }
};

const styles = StyleSheet.create({




})
