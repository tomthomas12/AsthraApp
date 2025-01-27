import React, {Component} from 'react';
import {Platform,Modal, StyleSheet, Text, View,Image, Dimensions,StatusBar,ImageBackground, ScrollView,TouchableWithoutFeedback,TouchableHighlight,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import event1 from './Fenstra/event1';
import event2 from './Fenstra/event2';
import event3 from './Fenstra/event3';
import event4 from './Fenstra/event4';




var { height,width } = Dimensions.get('window');


 

var device_height =height/100;
var device_width=width/100;


const {height,width}= Dimensions.get('window');


export  class event extends Component{
  state = {
    display: false
  }

  triggerModal() {
    this.setState(prevState => {
      return {
        display: true
      }
    });
  }
  closeModal() {
    this.setState(prevState => {
      return {
        display: false
      }
    });
  }
  
        
    
  render() {
    
    
    return (
      <View style={styles.container}>
      
               <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          translucent={true}    
          
          />



<ImageBackground style={styles.topdiv }source={require('./img/mca/bg.jpg')}>
<TouchableHighlight style={styles.hamburger} 
           onPress={() => this.props.navigation.goBack(null)}>
           <Icon  name="ios-arrow-back"  color="#fff"  size={height*.04} style={styles.drawerButton}/>
            </TouchableHighlight>

  <View style={styles.name}>
  
    <Text style={styles.heading}>
      Fenstra
    </Text>
    <Text style={styles.subheading}>
      Dept of MCA
    </Text>
  </View>
  </ImageBackground>


<View style={styles.bottomdiv}>
  <ScrollView  horizontal={true} style={styles.bottomscrollview}>

   
    <TouchableWithoutFeedback  onPress={() => this.props.navigation.navigate('Event1')}         >
    
      <ImageBackground style={styles.eventBox}source={require('./Fenstra/img/event1.jpg')} imageStyle={{ borderRadius: 25 }}>
     
        <Text style={styles.eventFont}>
          Koodaus
        </Text>   
         
      </ImageBackground>
    </TouchableWithoutFeedback>

    <TouchableWithoutFeedback
     onPress={() => this.props.navigation.navigate('Event2')}   >
    
      <ImageBackground style={styles.eventBox}source={require('./Fenstra/img/event2.jpg')} imageStyle={{ borderRadius: 25 }}>
     
        <Text style={styles.eventFont}>
          Flabbergast
        </Text>   
         
      </ImageBackground>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback
     onPress={() => this.props.navigation.navigate('Event3')}>
      <ImageBackground style={styles.eventBox}source={require('./Fenstra/img/event3.jpg')} imageStyle={{ borderRadius: 25 }}>

        <Text style={styles.eventFont}>
        Last Man Standing
        </Text>      
      </ImageBackground>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback
     onPress={() => this.props.navigation.navigate('Event4')}>
      <ImageBackground style={styles.eventBox}source={require('./Fenstra/img/event4.jpg')} imageStyle={{ borderRadius: 25 }}>

        <Text style={styles.eventFont}>
        Film Curto
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
const Fenstra= createStackNavigator(
  {
    Home:event,    
    Event1:event1,
    Event2:event2,
    Event3:event3,
    Event4:event4,
    
    initialRouteName: "Home"
  

    
 
  
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }  }

 
  
);
export default Fenstra;



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
  eventBox:{
    height:height*.30,
    width:width/2,
    backgroundColor:"#141414", 
    borderRadius:10, 
    marginHorizontal:width/20,
    alignItems:'center',
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
  hamburger:{
    width:height*.09,
    height:height*.09,
    position:'absolute',
    top:height*.05,
    left:height*.03,   
    borderRadius:75,      
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
  


})
