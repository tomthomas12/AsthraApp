import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../events/Description'

var {height,width}=Dimensions.get('window');

export default class ground3 extends Component {
  render() {
    return (
<Description  description={"Date : February 08, 2019\nRegistration: Rs.100\n\nSpot registrations are available\n\nParticipants should have a valid college ID \nRegistered participants should collect their ASTHRA ID's for participating in any event from the registration desk \nNo accommodation will be provided\nE- Certificates will be provided\n *preference will be given to online registrations\n\nCONTACT DETAILS\nAbdul Hakkim Rahim : +91 8075334878\nDonna Thomas : +91 6282932369"} imageUri={require("./img/ground3.jpg")} Url={'https://docs.google.com/forms/d/e/1FAIpQLSfZQX9K3zfvhejspGiMci-dWcVRdUY8gkw8997nI2lV8KCCtw/viewform'} eventName={"Line follower"} ></Description>

    
      );
  }
};

const styles = StyleSheet.create({




})
