import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image, Dimensions,StatusBar,ImageBackground, ScrollView,TouchableWithoutFeedback,TouchableHighlight,Alert} from 'react-native';
import ground1 from './Ground/ground1';
import ground2 from './Ground/ground2';
import ground3 from './Ground/ground3';
import ground4 from './Ground/ground4';
import ground5 from './Ground/ground5';
import ground6 from './Ground/ground6';
import Icon from 'react-native-vector-icons/Ionicons';
import {createStackNavigator,createAppContainer} from 'react-navigation';


var { height,width } = Dimensions.get('window');


 

var device_height =height/100;
var device_width=width/100;


const {height,width}= Dimensions.get('window');

export  class ground extends Component{

       
        
    
  render() {
    
    return (
      <View style={styles.container}>
               <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          translucent={true}    
          
          />


<ImageBackground style={styles.topdiv }source={require('./img/ground/bg.jpg')}>
<TouchableHighlight style={styles.hamburger} 
           onPress={() => this.props.navigation.goBack(null)}>
           <Icon  name="ios-arrow-back"  color="#fff"  size={height*.04} style={styles.drawerButton}/>
            </TouchableHighlight>
  <View style={styles.name}>
    <Text style={styles.heading}>
      GROUND
    </Text>
    <Text style={styles.subheading}>
      Events
    </Text>
  </View>
  </ImageBackground>


<View style={styles.bottomdiv}>
  <ScrollView  horizontal={true} style={styles.bottomscrollview}>

   
    <TouchableWithoutFeedback
    onPress={() => this.props.navigation.navigate('Ground1')}>
      <ImageBackground style={styles.eventBox}source={require('./Ground/img/ground1.jpg')} imageStyle={{ borderRadius: 25 }}>

        <Text style={styles.eventFont}>
          Amphibian Drift
        </Text>      
      </ImageBackground>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback
    onPress={() => this.props.navigation.navigate('Ground2')}>
      <ImageBackground style={styles.eventBox}source={require('./Ground/img/ground2.jpg')} imageStyle={{ borderRadius: 25 }}>

        <Text style={styles.eventFont}>
        Airsoft Battleground
        </Text>      
      </ImageBackground>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback
    onPress={() => this.props.navigation.navigate('Ground3')}>
      <ImageBackground style={styles.eventBox}source={require('./Ground/img/ground3.jpg')} imageStyle={{ borderRadius: 25 }}>

        <Text style={styles.eventFont}>
        Line Follower
        </Text>      
      </ImageBackground>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback
    onPress={() => this.props.navigation.navigate('Ground4')}>
      <ImageBackground style={styles.eventBox}source={require('./Ground/img/ground4.jpg')} imageStyle={{ borderRadius: 25 }}>

        <Text style={styles.eventFont}>
        Inverse Cycle Race
        </Text>      
      </ImageBackground>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback
    onPress={() => this.props.navigation.navigate('Ground5')}>
      <ImageBackground style={styles.eventBox}source={require('./Ground/img/ground5.jpg')} imageStyle={{ borderRadius: 25 }}>

        <Text style={styles.eventFont}>
        Frictionless Ball Challenge
        </Text>      
      </ImageBackground>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback
    onPress={() => this.props.navigation.navigate('Ground6')}>
      <ImageBackground style={styles.eventBox}source={require('./Ground/img/ground6.jpg')} imageStyle={{ borderRadius: 25 }}>

        <Text style={styles.eventFont}>
        Tyre Flip
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
const yanthrika= createStackNavigator(
  { Home:ground,
    Ground1:ground1,
    Ground2:ground2,
    Ground3:ground3,
    Ground4:ground4,
    Ground5:ground5,
    Ground6:ground6,

   
    initialRouteName: "Home"
  

    
 
  
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }  }

 
  
);
export default yanthrika;


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
  name:{
    alignSelf:'flex-end',
    bottom:height*.05,
    right:(width-3*(height*.14))/3,
    
  },
  heading:{
    fontSize:30,
    color:"white",
    
    fontWeight:"700",
    fontFamily:'Feather',
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
  hamburger:{
    width:height*.09,
    height:height*.09,
    position:'absolute',
    top:height*.05,
    left:height*.03,   
    borderRadius:75,      
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
