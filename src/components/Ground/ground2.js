import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../events/Description'

var {height,width}=Dimensions.get('window');

export default class ground2 extends Component {
  render() {
    return (
<Description  description={"Date : February 07 & 08, 2019\nPrizes Worth : 6k\nEntry Fee: 800 per team if pre-registered or 900 for spot registration.\n\nGame Description\nGame involves teams trying to shoot out the balloons on opponents within a time limit. Each team member can choose one of four roles and the corresponding weapon will be provided. For example, a sniper gets a sniper rifle and a support member gets dual pistols.\n\nYou will be in an arena with obstacles, plants, vehicles, etc. as cover. The team which manages to shoot out the maximum number of the opponents’ balloons within the time limit will win the round. The game will be quite fast and high energy. You are encouraged to continuously move around. The arena is designed in a way to discourage people from sitting in one position alone.\n\nCONTACT DETAILS\nAbdul Hakkim Rahim : +91 8075334878\nDonna Thomas : +91 6282932369"} imageUri={require("./img/ground2.jpg")} Url={'https://docs.google.com/forms/d/e/1FAIpQLSfZQX9K3zfvhejspGiMci-dWcVRdUY8gkw8997nI2lV8KCCtw/viewform'} eventName={"Real Life Pubg Tournament"} ></Description>

    
      );
  }
};

const styles = StyleSheet.create({




})
