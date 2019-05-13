import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event4 extends Component {
  render() {
    return (
<Description  description={"Date : February 07, 2019\n\nPrize Worth : 4k\n\n	It's a circuit designing in proteus. We are providing a circuit diagram and the candidates should draw it in proteus within time limit. One who completes it in minimum time gets the prize.\n\nIt's a technical fun game event which is having different levels. One who completes each level will get a present. Levels are divided as follows:\n\nLevel 1: Puzzle Solving\nA small puzzle is given to the candidate,he/she must complete it in least time.\n\nLevel 2: LED Blinking\nA small circuit with incomplete connection will be provided, one should complete the circuit and light the led. There will be time limit\n(Note: Circuit will be there for cross-checking\n\nLevel 3: Snake Xenzia\nScore maximum points within time limit. There will be keys for moving the snake.\n\nLevel 4: Led Colour Matching\nIn short span of time participant should blink the exact colour led that has been requested. There will be rotating nobe which helps to blink the exact led.\n\nLevel 5: BullsEye\nIts a game played using darts. One who hits close to the bullseye wins the game. \n(Note: limited number of arrows can be thrown)\n\nLevel 6: Ring Toss\nParticipant throw rings to a fixed target for limited chances wins the game.\n\nLevel 7: Balloons Cracking\nParticipants are provided with a gun. Using this gun he/she should crack  the balloon. There will be limited amount  of pellets. One who cracks maximum number of balloons will be the winner.\n\nNote: One who completes ELIXIR can join into ESPERO. If he/she is unable to do ELIXIR they can directly enter into ESPERO"} imageUri={require("./img/event4.jpg")} Url={'https://docs.google.com/forms/d/e/1FAIpQLSeBI4_IY9UDbuo1BehL6DadsZGycVLNCRnjnKexd9oErrZtBg/viewform'} eventName={"Elixir - Proteus Circuit Designing"} ></Description>
    
      );
  }
};

const styles = StyleSheet.create({




})
