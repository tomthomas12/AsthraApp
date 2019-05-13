import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../events/Description'

var {height,width}=Dimensions.get('window');

export default class workshop7 extends Component {
  render() {
    return (
    <Description  description={"Registration Fee : FREE\n\nDate: 8.02.2019\n\nHere is a hands on workshop for all the animation lovers. Let's see the Combination Animation and Photoshop to build a 3D model which is used in multimedia. The aim of this workshop is to introduce the field of animation to students and also to provide a guide to the students who are interested in going to this field.  Autodesk 3Ds Max a software for professional 3D computer graphics program for making 3D animations, models, games and images. Adobe Photoshop is a raster graphics editor. A combination of both these tools will be used in training the students for creating the 3d models. By the end the students will have a brief knowledge on the software and can build a 3D model of their own.\n\nCONTACT DETAILS\nJosna Kochikunnel Jose :+91 8304029203  \nSahil Jose: +91 9746790967"} imageUri={require("./img/workshop7.jpg")} Url={'https://www.townscript.com/e/3d-modelling-workshop-124141'} eventName={"3D Modelling(GNOMON) - MAAC Kottayam"} ></Description>
    
      );
  }
};

const styles = StyleSheet.create({




})
