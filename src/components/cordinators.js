import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Entypo';


var {height,width}=Dimensions.get('window');

export default class contact extends Component {
  render() {
    return (
      <View style={styles.container}>
      
        <View style={styles.top}>
            <ImageBackground source={require('./img/bg.jpg')} style={styles.nav}>
            <TouchableHighlight style={styles.hamburger}
           onPress={() => this.props.navigation.goBack()}>
           <Icon  name="ios-arrow-back"  color="#fff"  size={height*.04} style={styles.drawerButton}/>
            </TouchableHighlight>
                <Text style={{color:"white", fontSize:height/30, fontWeight:'700',paddingBottom:height*.01,fontFamily:'Feather', }}>CONTACT</Text>
            </ImageBackground>
        </View>
        <View style={styles.data}>
            <View style={styles.inner_container}>
                <View style={styles.contact}>
                    <View style={styles.profile_image}>
                    <Image source={require('./img/cordinators/jilse.jpg')} style={styles.coordinators}>
                    </Image>
                    </View>
                    <View style={styles.profile_name}>
                    <Text style={styles.text}>
                        Dr.Jilse Sebastian
                    </Text>
                    <Text style={{color:"white", fontSize:width/32,fontFamily:'Feather',}}>Staff Coordinator</Text>
                    </View>
                    <View style={styles.profile_call}>
                    <TouchableWithoutFeedback
                         onPress = { () => {Linking.openURL('tel:+919447568494');}}    >
                    <Icon name="ios-call" size={30} style={{color:'white'}}/>
                    </TouchableWithoutFeedback>
                    </View>
                </View>
                
                <View style={styles.contact}>
                    <View style={styles.profile_image}>
                    <Image source={require('./img/cordinators/anto.jpg')} style={styles.coordinators}>
                    </Image>
                    </View>
                    <View style={styles.profile_name}>
                    <Text style={styles.text}>
                        Anto P Biju
                    </Text>
                    <Text style={{color:"white", fontSize:width/32,fontFamily:'Feather',}}>Student Coordinator</Text>
                    </View>
                    <View style={styles.profile_call}>
                    <TouchableWithoutFeedback
                        onPress = { () => {Linking.openURL('tel:+919790024813');}}    >
                        <Icon name="ios-call" size={30} style={{color:'white'}}/>
                    </TouchableWithoutFeedback>
                    </View>
                </View>
                <View style={styles.contact}>
                    <View style={styles.profile_image}>
                    <Image source={require('./img/cordinators/thomas.jpg')} style={styles.coordinators}>
                    </Image>
                    </View>
                    <View style={styles.profile_name}>
                    <Text style={styles.text}>
                        Thomas Cyriac
                    </Text>
                    <Text style={{color:"white", fontSize:width/32,fontFamily:'Feather',}}>Student Coordinator</Text>
                    </View>
                    <View style={styles.profile_call}>
                    <TouchableWithoutFeedback
                         onPress = { () => {Linking.openURL('tel:+919562357366');}}    >
                    <Icon name="ios-call" size={30} style={{color:'white'}}/>
                    </TouchableWithoutFeedback>
                    </View>
                </View>
                <View style={styles.social}>
                <TouchableWithoutFeedback
                         onPress = { () => {Linking.openURL('http://asthra.co.in');}}    >
                    <Icon name="ios-globe" size={30} style={{color:'white'}}/>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                         onPress = { () => {Linking.openURL('https://www.google.com/maps/place/St.+Joseph\'s+College+of+Engineering+and+Technology,+Palai/@9.7268467,76.7239061,17z/data=!3m1!4b1!4m5!3m4!1s0x3b07cc024cb7c83f:0xc8944aaebb3ba492!8m2!3d9.7268467!4d76.7260948');}}    >
                    <Icons name="location" size={30} style={{color:'white'}}/>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                         onPress = { () => {Linking.openURL('https://www.instagram.com/asthra_sjcet/');}}    >
                    <Icon name="logo-instagram" size={30} style={{color:'white'}}/>
                </TouchableWithoutFeedback>
                </View>

                
                

            </View>

        </View>
        

        
        

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
    fontSize:width/19,
    fontWeight:'bold',
    color:'white',
    
    },
data:{
    flex:9,
    backgroundColor:'#161616',
    justifyContent:'center',
    alignItems:'center'

},
hamburger:{
    width:height*.06,
    height:height*.06,
    position:'absolute',
    top:height*.05,
    left:height*.01,   
    borderRadius:75, 
    alignContent:'center',        
    justifyContent:'flex-end',
    alignItems:'center'
},
inner_container:{
    height:height*.75,
    width:width*.850,
    backgroundColor:'#232323',
    flexDirection:'column',
    justifyContent:'flex-start',
    elevation:60,
    paddingTop: height/20,
    paddingHorizontal: width/10
},
contact:{
    flex:20,

    flexDirection:'row',
    borderBottomColor:"grey",
    borderBottomWidth:.5,
    paddingTop:height/30,
    paddingBottom:height/40

},
profile_image:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',


},
profile_name:{
    flex:3,
    justifyContent:'center',
    marginLeft:width/15,
    
    
},
profile_call:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
    
},
border:{
    borderBottomWidth:width*.7,
    borderBottomColor: 'grey',
    
    alignSelf: 'center',
    

},
coordinators:{
    height:height*.09,
    width:height*.09,
    borderRadius: 50,
    
    
  },
  text:{
    color:'white',
    fontSize: width/25,
    fontWeight:"700",
  },
social:{
    flex:40,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    marginHorizontal:width/15
    
    
},
social_row:{
    
    color:'white',
    

}
   



})
