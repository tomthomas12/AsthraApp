import React, {Component} from 'react';
import {Platform, StyleSheet,Model,Text, View,Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,StatusBar,ImageBackground, ScrollView,SafeAreaView} from 'react-native';
var { height,width } = Dimensions.get('window');
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';



import GroundScreen from './ground'
import department from './departments'
import WorkshopScreen from './workshop';
import GeneralScreen from './general'


var device_height =height/100;
var device_width=width/100;
console.log(width);



const {height,width}= Dimensions.get('window')
export class MiddleBox extends Component  { 
render(){
    return(
        <View style={styles.middleBox}>
            <Text style={styles.boxTextNum}>{this.props.num}</Text>
            <Text style={styles.boxTextText}>{this.props.text}</Text>
        </View>
    )
}
}


 export class HomeScreen extends Component{
  


  render() {
   
    return (
        <View style={styles.container}>
         <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          translucent={true}    
          
          />
           <View style={styles.topdiv}>
           <ImageBackground source={require("./img/bg.jpg")} style={styles.bgImage}>
           <TouchableHighlight style={styles.hamburger}
           onPress={() => this.props.navigation.toggleDrawer()}>
           <Icon  name="ios-menu"  color="#fff"  size={height*.04} style={styles.drawerButton}/>
            </TouchableHighlight>
            
                <Image style={styles.asthraImage} source={require("./img/logo.png")}/>
            </ImageBackground>
           </View>
           <View style={styles.middlediv}>
           <View  style={styles.asthraRow1}>
            <View>
              <Text style={styles.text_asthra}>ASTHRA</Text>
            </View>
            <View>
              <Text style={styles.text_2019}> 2019</Text>
            </View>
            <View style={styles.text_line}/>            
          </View>
          <View style={{flexDirection:"row"}}>
            <View style={{flex:3}}>
                <Text style={styles.asthraRow2}>Two Day Technical Fiesta</Text>
            </View>
            
          </View>

          
          
          
            </View>
            <View style={styles.bottomdiv}>
                <ScrollView scrollEventThrottle={16} horizontal={true} showsHorizontalScrollIndicator={false} style={styles.bottomdiv} alwaysBounceHorizontal={false}>
                
                    <TouchableWithoutFeedback
                        onPress={() => this.props.navigation.navigate('Events')}>
                            <ImageBackground  source={require("./img/image4.jpg")} style={{backgroundColor:"#232323", width:width/2, height:height/3, marginLeft:width/10,marginRight:width/20, elevation:20, alignItems: "center"}}>
                                <Text style={{color:"white",fontSize:width/20, marginTop:height/4,fontWeight:"700",fontFamily:'Feather',}}>
                                    EVENTS
                                </Text>
                            </ImageBackground>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={() => this.props.navigation.navigate('Workshops')}>
                            <ImageBackground  source={require("./img/image2.jpg")} style={{backgroundColor:"#232323", width:width/2, height:height/3, marginLeft:width/10,marginRight:width/20, elevation:20, alignItems: "center"}}>
                                <Text style={{color:"white",fontSize:width/20, marginTop:height/4,fontWeight:"700",fontFamily:'Feather',}}>
                                    WORKSHOPS
                                </Text>
                            </ImageBackground>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={() => this.props.navigation.navigate('General')}>
                            <ImageBackground  source={require("./img/image1.jpg")} style={{backgroundColor:"#232323", width:width/2, height:height/3, marginLeft:width/10,marginRight:width/20, elevation:20, alignItems: "center"}}>
                                <Text style={{color:"white",fontSize:width/20, marginTop:height/4,fontWeight:"700",fontFamily:'Feather',}}>
                                    GENERAL
                                </Text>
                            </ImageBackground>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={() => this.props.navigation.navigate('GroundEvents')}>
                            <ImageBackground  source={require("./img/image3.jpg")} style={{backgroundColor:"#232323", width:width/2, height:height/3, marginLeft:width/10,marginRight:width/20, elevation:20, alignItems: "center"}}>
                                <Text style={{color:"white",fontSize:width/20, marginTop:height/4,fontWeight:"700",fontFamily:'Feather',}}>
                                    GROUND EVENTS
                                </Text>
                            </ImageBackground>
                    </TouchableWithoutFeedback>


         
                    
                </ScrollView>
                <View style={{justifyContent:'center',paddingBottom:height*.02}}>
                <Image style={styles.asthraImage1} source={require("./img/TYPO.png")}/>
                </View>
                
            </View>
            
            <View style={styles.middleRow}>
                <MiddleBox num={"60+"} text={'Events'}/>
                <MiddleBox num={"8"} text={'Departments'}/>
                <MiddleBox num={"7|8"} text={'February'}/>
            </View>
            
        </View>
        
 
        
      
    );
  }
};
 const Stack = createStackNavigator(
    {
     Home:{screen:HomeScreen,
        headerMode: 'none',

    },
      
      Events:department,
      Workshops:WorkshopScreen,
      General:GeneralScreen,
      GroundEvents:GroundScreen,     
      
   
    initialRouteName: "Home"
  }, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }  }

   
    
  );
  export default Stack;

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#161616"
    },
    topdiv:{flex:28

    },
    middlediv:{
        flex:22,
        flexDirection:'column',
        padding: 'auto',
        justifyContent:'flex-end',
        alignItems:'flex-start',
        paddingTop:height*.05,
        alignContent:'flex-end',
        paddingBottom:height*.05,
        paddingLeft: (width-3*(height*.14))/3,
        paddingRight: (width-3*(height*.14))/3,

    },    
    bottomdiv:{
        flex:50,
        
        
        

    },
    bgImage:{
        height:device_height*30,
        width:width,
        resizeMode:"cover",
        justifyContent:'center',
        alignItems:'center'
    },
    asthraImage:{
        height:device_height*10,
        width:device_height*18,
        alignSelf:'center',
        resizeMode: 'contain'
     },
      asthraImage1:{
        height:device_height*6,
        width:width-45,
        justifyContent:'center',
        alignContent:'center',
        alignSelf:'center',
        resizeMode: 'contain',
        
     },
     hamburger:{
        width:height*.06,
        height:height*.06,
        position:'absolute',
        top:height*.05,
        left:height*.01,   
        borderRadius:75, 
        alignContent:'center',        
        justifyContent:'center'
 },
    drawerButton:{
        alignSelf:'center',
        alignContent:'center',
        justifyContent:'center'
    },
    
     middleRow:{
         width:width,
        position:"absolute",
        justifyContent:"space-between",
        flexDirection: 'row',
        top:height*.24,
        paddingLeft: (width-3*(height*.13))/3,
        paddingRight: (width-3*(height*.13))/3,
      
    },

     middleBox:{
        
        height:height*.13,
        width:height*.13,        
        backgroundColor:"#6236ce",
        borderRadius:10,
        elevation: 10,
        alignItems:"center",
        alignContent: 'center',
        justifyContent:'center'
        },
    boxTextNum:{
        fontWeight:"700",
        color:"white",
        fontSize:width/15,
        fontFamily:'Feather',
    },
    boxTextText:{
        color:"white",
        fontWeight:"700",
        fontSize:width/28,
        fontFamily:'Feather',
    },
    text_asthra:{
        color:"#6236ce",
        fontWeight:"700",
        fontSize:width/13,
        fontFamily:'Feather',
        flex:1
    },
    text_2019:{
        color:"white",
        fontWeight:"700",
        fontSize:width/13,
        fontFamily:'Feather',
        flex:1
    },
    text_line:
    { flex:1,
        height:20,
        width:1,
        borderTopWidth:1,
        borderTopColor:"white",
        marginTop: 17,
        marginLeft:5 
    },
    asthraRow1:{
        flexDirection:"row",
       
    },
  asthraRow2:{
      color:"white",
      fontWeight:"700",      
       marginTop:5
    },
    eventBox:{
        backgroundColor:"#232323",
        width:width/2,
        height:height*.2,
        elevation:20,
        alignItems: "center",
        paddingLeft: (width-3*(height*.14))/3,
        paddingRight: (width-3*(height*.14))/3,
},
text_line1:{
    flex:1,
        height:20,
        width:1,
        borderTopWidth:1,
        borderTopColor:"transparent",
        marginTop: 17,
        marginLeft:5 
},
text_asthra1:{
    color:"white",
    fontWeight:"700",
    fontSize:width/13,
    flex:1,
    fontFamily:'Feather',
},
text_20191:{
    color:"#6236ce",
    fontWeight:"700",
    fontSize:width/13,
    flex:1,
    fontFamily:'Feather',
},
    
    
  
  
  })


