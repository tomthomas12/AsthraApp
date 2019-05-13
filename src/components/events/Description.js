import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';


var {height,width}=Dimensions.get('window');

export default class Description extends Component {
  _handlePress = () => {
    Linking.openURL(this.props.Url);
  }
  render() {
    if(this.props.Url!=""){
    return (
      <View style={{flex:1,backgroundColor:'black'}}>
      <ScrollView style={{flex:1, }}>
        <View style={{ backgroundColor:"black",}}>
        <ImageBackground source={this.props.imageUri} style={{flex:4,justifyContent:"center", alignItems:"center", height:height/3,resizeMode:'cover'}}>
        
      </ImageBackground>
      
      <View style={{flex:6, marginHorizontal:width/20, paddingTop:height/20, }}>
      <Text style={{color:"white",fontSize:height/25,fontWeight:'700',textAlign:'center',paddingBottom:height/20}}>{this.props.eventName}</Text>
        <View >
         <Text style={{color:'white',fontFamily:'Feather',}}>{this.props.description}</Text>
        </View>
        <TouchableWithoutFeedback
        onPress = {this._handlePress}   >
        <View style={{justifyContent:"center", alignItems:"center",}}>
          <View style={{width:width*.3,height:height/20, resizeMode:"fill", justifyContent:"center", margin:height/20, backgroundColor:"#6236ce", borderRadius:10}}>
            <Text style={{color:"white", textAlign:"center", fontWeight:"700",fontFamily:'Feather',}}>
              REGISTER
            </Text>
          </View>
        </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
      </ScrollView>
      </View>
    
      );}
      else{
        return (
          <View style={{flex:1,backgroundColor:'black'}}>
          <ScrollView style={{flex:1, }}>
            <View style={{ backgroundColor:"black",}}>
            <ImageBackground source={this.props.imageUri} style={{flex:4,justifyContent:"center", alignItems:"center", height:height/3,resizeMode:'cover'}}>
            
          </ImageBackground>
          
          <View style={{flex:6, marginHorizontal:width/20, paddingTop:height/20, }}>
          <Text style={{color:"white",fontFamily:'Feather',fontSize:height/25,fontWeight:'700',textAlign:'center',paddingBottom:height/20}}>{this.props.eventName}</Text>
            <View >
             <Text style={{color:'white',fontFamily:'Feather',}}>{this.props.description}</Text>
            </View>
            
          </View>
        </View>
          </ScrollView>
          </View>
        )

      }
  }
};

const styles = StyleSheet.create({




})
