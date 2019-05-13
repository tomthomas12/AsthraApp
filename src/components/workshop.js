import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image, Dimensions,TouchableHighlight,StatusBar,ImageBackground, ScrollView,TouchableWithoutFeedback,Alert} from 'react-native';
import workshop1 from './Workshop/workshop1';
import workshop2 from './Workshop/workshop2';
import workshop3 from './Workshop/workshop3';
import workshop4 from './Workshop/workshop4';
import workshop5 from './Workshop/workshop5';
import workshop6 from './Workshop/workshop6';
import workshop7 from './Workshop/workshop7';
import workshop8 from './Workshop/workshop8';
import workshop9 from './Workshop/workshop9';
import workshop10 from './Workshop/workshop10';
import workshop11 from './Workshop/workshop11';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';



var { height,width } = Dimensions.get('window');


 

var device_height =height/100;
var device_width=width/100;


const {height,width}= Dimensions.get('window');

export class workshop extends Component{

       
        
    
  render() {
    
    return (
      <View style={styles.container}>
               <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
          translucent={true}    
          
          />


<ImageBackground style={styles.topdiv }source={require('./img/workshop/bg.jpg')}>
<TouchableHighlight style={styles.hamburger} 
           onPress={() => this.props.navigation.goBack(null)}>
           <Icon  name="ios-arrow-back"  color="#fff"  size={height*.04} style={styles.drawerButton}/>
            </TouchableHighlight>
  <View style={styles.name}>
    <Text style={styles.heading}>
      WORKSHOP
    </Text>
    <Text style={styles.subheading}>
      Asthra Workshops
    </Text>
  </View>
  </ImageBackground>


<View style={styles.bottomdiv}>
  <ScrollView  horizontal={true} style={styles.bottomscrollview}>

   
    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Workshop1')}
    >
      <ImageBackground style={styles.eventBox}source={require('./Workshop/img/workshop1.jpg')} imageStyle={{ borderRadius: 25 }}>

        <Text style={styles.eventFont}>
        Cross Roads
        </Text>      
      </ImageBackground>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback
    onPress={() => this.props.navigation.navigate('Workshop2')}>
      <ImageBackground style={styles.eventBox}source={require('./Workshop/img/workshop2.jpg')} imageStyle={{ borderRadius: 25 }}>

        <Text style={styles.eventFont}>
        Data Modelling
        </Text>      
      </ImageBackground>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback
    onPress={() => this.props.navigation.navigate('Workshop3')}>
      <ImageBackground style={styles.eventBox}source={require('./Workshop/img/workshop3.jpg')} imageStyle={{ borderRadius: 25 }}>

        <Text style={styles.eventFont}>
        VFX
        </Text>      
      </ImageBackground>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback
    onPress={() => this.props.navigation.navigate('Workshop4')}>
      <ImageBackground style={styles.eventBox}source={require('./Workshop/img/workshop4.jpg')} imageStyle={{ borderRadius: 25 }}>

        <Text style={styles.eventFont}>
          Loose Legs
        </Text>      
      </ImageBackground>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback
    onPress={() => this.props.navigation.navigate('Workshop5')}>
      <ImageBackground style={styles.eventBox}source={require('./Workshop/img/workshop5.jpg')} imageStyle={{ borderRadius: 25 }}>

        <Text style={styles.eventFont}>
        TensorFlow
        </Text>      
      </ImageBackground>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback
    onPress={() => this.props.navigation.navigate('Workshop6')}>
      <ImageBackground style={styles.eventBox}source={require('./Workshop/img/workshop6.jpg')} imageStyle={{ borderRadius: 25 }}>

        <Text style={styles.eventFont}>
        KSUM-Startup        
        </Text>      
      </ImageBackground>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback
    onPress={() => this.props.navigation.navigate('Workshop7')}>
      <ImageBackground style={styles.eventBox}source={require('./Workshop/img/workshop7.jpg')} imageStyle={{ borderRadius: 25 }}>

        <Text style={styles.eventFont}>
        3D Modelling
        </Text>      
      </ImageBackground>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback
    onPress={() => this.props.navigation.navigate('Workshop8')}>
      <ImageBackground style={styles.eventBox}source={require('./Workshop/img/workshop8.jpg')} imageStyle={{ borderRadius: 25 }}>

        <Text style={styles.eventFont}>
        Embedded System Designing
        </Text>      
      </ImageBackground>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback
    onPress={() => this.props.navigation.navigate('Workshop9')}>
      <ImageBackground style={styles.eventBox}source={require('./Workshop/img/workshop9.jpg')} imageStyle={{ borderRadius: 25 }}>

        <Text style={styles.eventFont}>
        Applied Skills With Android
        </Text>      
      </ImageBackground>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback
    onPress={() => this.props.navigation.navigate('Workshop10')}>
      <ImageBackground style={styles.eventBox}source={require('./Workshop/img/workshop10.jpg')} imageStyle={{ borderRadius: 25 }}>

        <Text style={styles.eventFont}>
        Bridge Designing
        </Text>      
      </ImageBackground>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback
    onPress={() => this.props.navigation.navigate('Workshop11')}>
      <ImageBackground style={styles.eventBox}source={require('./Workshop/img/workshop11.jpg')} imageStyle={{ borderRadius: 25 }}>

        <Text style={styles.eventFont}>
        Invited Talk
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
const WorkshopScreen= createStackNavigator(
  {
    Home:workshop,    
    Workshop1:workshop1,
    Workshop2:workshop2,
    Workshop3:workshop3,
    Workshop4:workshop4,
    Workshop5:workshop5,
    Workshop6:workshop6,
    Workshop7:workshop7,
    Workshop8:workshop8,
    Workshop9:workshop9,
    Workshop10:workshop10,
    Workshop11:workshop11,

    initialRouteName: "Home"
  

    
 
  
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }  }

 
  
);
export default WorkshopScreen;


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
