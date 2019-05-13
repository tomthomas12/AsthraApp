import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../Description'

var {height,width}=Dimensions.get('window');

export default class event1 extends Component {
  render() {
    return (
      <Description  imageUri={require("./img/event1.jpg")} Url={'https://docs.google.com/forms/d/e/1FAIpQLSf7sWuEZJZLTQB8dedme7vo9EGa0_4-aPbhD3YYv9AarTyhTw/viewform'} eventName={"Dark Race"} description={"Date : 07.02.2019\nPrize Worth : 1.5k\n\nThe Dark race is an event that consist of two car racing at a time, through a track incorporating dark and harsh terrain.\n\nRules and regulations2 cars at a time, the participants should complete 3 laps without any mistakes.\nNo one is allowed to touch the car while riding. If the car get fliped and stucked, the participant will be eliminated from the race.\nWhether the participant is able to restore the car properly on track unless an external actions or only with the remote, he can continue the race.\nThere will be several stages to complete by the participants with ccertain rules and regulations.\nOnly single person will be allowed to ride and other assist.\nThe first person who completes three laps, will be the winner. And the track of semifinal and final will be much more conjusted and tough.\nIf any participant fails to finish the race in fixed time, they will be disqualified. But they can complete their lap in next three minutes.\n\nCONTACT DETAILS\nChristo Johns : +91 8137886689\nSandesh S : +91 7902801309"} ></Description>

      );
  }
};

const styles = StyleSheet.create({




})
