import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../events/Description'

var {height,width}=Dimensions.get('window');

export default class workshop2 extends Component {
  render() {
    return (
    <Description  description={"Registration Fee : FREE\n\nDate: 7.02.2019\n\nAdoption of machine learning and artificial intelligence is critical for success in the era of rapid digital transformation, it’s even more important how institutions make structure data for driving insights. Nowadays all kind of industry is driven by data. Some 80% of all digital data is unstructured, Kesher said during a keynote at the AI Summit in San Francisco. The vast majority of data representing the digital universe, however, is and will remain unstructured. And although unstructured documents are widely used as key inputs and “systems” for core business activities. Structured, organized data is critical for accurate and dynamic adjustment of outputs in continuously changing environments. Unstructured data is, more or less, useless to analyse the current situation and make critical decisions. Data modelling is required to make structured data from unstructured data. Wikidata is the ultimate data modelling platform to make structured data for any kind of data. Wikidata is flexible enough to model various kinds of data sets using collaborative inputs. Through this introductory talk/workshop, I would like to introduce the process of data modelling for various kinds of items using Wikidata. Also how to get the structured data output from Wikidata using its Query service and APIs\n\nSPEAKER: Ranjith Siji\n\nCONTACT DETAILS\nAlex K Joseph : +91 9446203466 \nChrissie Aldo: +91 9061126524 "} imageUri={require("./img/workshop2.jpg")} Url={'https://www.townscript.com/e/structured-data-modeling-for-ai-using-wikidata-021203'} eventName={"Data Modelling using Wikidata - Wikipedia"} ></Description>
    
      );
  }
};

const styles = StyleSheet.create({




})
