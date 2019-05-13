import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image, Dimensions,StatusBar,TouchableHighlight,ImageBackground, ScrollView,TouchableWithoutFeedback,Alert} from 'react-native';
import general1 from './General/general1';
import general2 from './General/general2';
import general3 from './General/general3';
import general4 from './General/general4';
import general5 from './General/general5';
import general6 from './General/general6';
import Icon from 'react-native-vector-icons/Ionicons';




import {createStackNavigator,createAppContainer} from 'react-navigation';


var { height,width } = Dimensions.get('window');


 

var device_height =height/100;
var device_width=width/100;


const {height,width}= Dimensions.get('window');

export  class general extends Component{

       
        
    
  render() {
    
    return (
      <View style={styles.container}>
               <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          translucent={true}    
          
          />


<ImageBackground style={styles.topdiv }source={require('./img/general/bg.jpg')}>
<TouchableHighlight style={styles.hamburger} 
           onPress={() => this.props.navigation.goBack(null)}>
           <Icon  name="ios-arrow-back"  color="#fff"  size={height*.04} style={styles.drawerButton}/>
            </TouchableHighlight>
  <View style={styles.name}>
    <Text style={styles.heading}>
      GENERAL
    </Text>
    <Text style={styles.subheading}>
      Events
    </Text>
  </View>
  </ImageBackground>


<View style={styles.bottomdiv}>
  <ScrollView  horizontal={true} style={styles.bottomscrollview}>

   
    <TouchableWithoutFeedback
    onPress={() => this.props.navigation.navigate('General1')}>
      <ImageBackground style={styles.eventBox}source={require('./General/img/general1.jpg')} imageStyle={{ borderRadius: 25 }}>

        <Text style={styles.eventFont}>
          Project Asthra
        </Text>      
      </ImageBackground>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback
    onPress={() => this.props.navigation.navigate('General2')}>
      <ImageBackground style={styles.eventBox}source={require('./General/img/general2.jpg')} imageStyle={{ borderRadius: 25 }}>

        <Text style={styles.eventFont}>
        Idea Is Money
        </Text>      
      </ImageBackground>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback
    onPress={() => this.props.navigation.navigate('General3')}>
      <ImageBackground style={styles.eventBox}source={require('./General/img/general3.jpg')} imageStyle={{ borderRadius: 25 }}>

        <Text style={styles.eventFont}>
        Smart Hackathon
        </Text>      
      </ImageBackground>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback
    onPress={() => this.props.navigation.navigate('General4')}>
      <ImageBackground style={styles.eventBox}source={require('./General/img/general4.jpg')} imageStyle={{ borderRadius: 25 }}>

        <Text style={styles.eventFont}>
        Startup And Project Contest
        </Text>      
      </ImageBackground>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback
    onPress={() => this.props.navigation.navigate('General5')}>
      <ImageBackground style={styles.eventBox}source={require('./General/img/general5.jpg')} imageStyle={{ borderRadius: 25 }}>

        <Text style={styles.eventFont}>
        VR Maze Challenge
        </Text>      
      </ImageBackground>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback
    onPress={() => this.props.navigation.navigate('General6')}>
      <ImageBackground style={styles.eventBox}source={require('./General/img/general6.jpg')} imageStyle={{ borderRadius: 25 }}>

        <Text style={styles.eventFont}>
        Real Life PUBG
        </Text>      
      </ImageBackground>
    </TouchableWithoutFeedback>
    



  </ScrollView>
</View>

      </View>
      
    
    );
  }
}
;
const GeneralScreen= createStackNavigator(
  { Home:general,
    General1:general1,
    General2:general2,
    General3:general3,
    General4:general4,
    General5:general5,
    General6:general6,

    

   
    initialRouteName: "Home"
  

    
 
  
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }  }

 
  
);
export default GeneralScreen;


const styles=StyleSheet.create({
  container:{flex:1,
    flexDirection:'column',
    backgroundColor:'black'
   
  },
  topdiv:{
    flex:60,
    justifyContent:'flex-end',
    
  },
  bottomdiv:{
    flex:40,
    
    
  },
  hamburger:{
    width:height*.09,
    height:height*.09,
    position:'absolute',
    top:height*.05,
    left:height*.03,   
    borderRadius:75,      
    },
  name:{
    alignSelf:'flex-end',
    bottom:height*.05,
    right:(width-3*(height*.14))/3,
    
    
  },
  heading:{
    fontSize:30,
    color:"white",
    fontFamily:'Feather',
    
    fontWeight:"700"
  },
  subheading:{
      alignSelf:'flex-end',
      color:"white",
      fontFamily:'Feather',
  },
  bottomscrollview:{
    backgroundColor:'transparent',
    position:'relative',
    
  },
  eventBox:{
    height:height*.30,
    width:width/2,
    backgroundColor:"#141414", 
    borderRadius:10, 
    marginHorizontal:width/20,
    alignItems: 'center',
  },
  eventFont:{
    color:"white", 
    fontWeight:'700',
    borderRadius:10,
    textShadowColor:'black',
    textShadowRadius:20,
    fontSize:height/35, 
    marginTop:height/5+20, 
    textAlign: 'center',
    paddingHorizontal:10, 
    fontFamily:'Feather',  

  },
  


})
