import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,ScrollView,TouchableWithoutFeedback,TouchableHighlight,Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageZoom from 'react-native-image-pan-zoom';
import {createStackNavigator,createAppContainer} from 'react-navigation';


var {height,width}=Dimensions.get('window');

export default class map extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:'black'}}>
       
        <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={width}
                       imageHeight={height*0.7}>
                <Image style={{width:width, height:height*0.7}}
                       source={require('./img/map.jpg')}/>
            </ImageZoom>
      </View>
      
    );
  }
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#161616',
      },
  top:{
      flex:1.4,
      },
  nav:{
      flex:1,
      width:'100%',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent:'flex-end',
      },
  bot:{  
      flex:9,
      backgroundColor: 'black',
      },
  head:{
        fontSize:width/20,
        width: '100%',
        alignItems:"center",
        justifyContent:"flex-end",
        fontWeight: '700',
        paddingBottom: height*.01,
        
    },
      hamburger:{
        width:height*.09,
        height:height*.09,
        position:'absolute',
        top:height*.05,
        left:height*.03,   
        borderRadius:75,      
        },
    })
