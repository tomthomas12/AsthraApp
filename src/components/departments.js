import React,{Component} from 'react';
import {View,Text,ScrollView,StyleSheet,Dimensions,Image,TouchableWithoutFeedback,TouchableHighlight, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import radiance from './events/radiance';
import trilok from './events/trilok';
import fenstra from './events/fenstra';
import mechaura from './events/mechaura';
import emerge from './events/emerge';
import frequency from './events/frequency';
import yanthrika from './events/yanthrika';
import Costruzione from './events/coztruzione';






var {height,width}=Dimensions.get('window');

export  class dep extends Component{
    render(){
        return(

            <View style={{backgroundColor:'black'}}>
                <ImageBackground style={styles.head} source={require('./img/bg.jpg')}>
                <TouchableHighlight style={styles.hamburger} 
           onPress={() => this.props.navigation.goBack(null)}>
           <Icon  name="ios-arrow-back"  color="#fff"  size={height*.04} style={styles.drawerButton}/>
            </TouchableHighlight>
                    <Text style={{color:"white", fontSize:height/30, fontWeight:'700',fontFamily:'Feather', }}>
                        EVENTS
                    </Text>
                </ImageBackground>
                
            <ScrollView>
                <View style={styles.container}>
                <TouchableWithoutFeedback
                        onPress={() => this.props.navigation.navigate('Trilok')}>
                <View style={styles.department}>
                    <ImageBackground source={require('./img/dep.jpg')} style={{width:'100%',}} imageStyle={{borderRadius:8}}>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'white',fontSize:height/30,fontWeight:'600',fontFamily:'Feather',}}>TRILOK</Text>
                        <Text style={{color:'white',fontSize:width/35,fontFamily:'Feather',}}>Department of Master of Business Administration</Text>
                    </View>         
                    </ImageBackground>
                </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                        onPress={() => this.props.navigation.navigate('Fenstra')}>
                <View style={styles.department}>
                    <ImageBackground source={require('./img/dep.jpg')} style={{width:'100%',}} imageStyle={{borderRadius:8}}>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'white',fontSize:height/30,fontWeight:'600',fontFamily:'Feather',}}>FENSTRA</Text>
                        <Text style={{color:'white',fontSize:width/35,fontFamily:'Feather',}}>Department of Master of Computer Applications</Text>
                    </View>                     
                        </ImageBackground>
                </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                        onPress={() => this.props.navigation.navigate('Radiance')}>
                    <View style={styles.department}>
                        <ImageBackground source={require('./img/dep.jpg')} style={{width:'100%',}} imageStyle={{borderRadius:8}}>
                        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{color:'white',fontSize:height/30,fontWeight:'600',fontFamily:'Feather',}}>RADIANCE</Text>
                            <Text style={{color:'white',fontSize:width/35,fontFamily:'Feather',}}>Department of Computer Science and Engineering</Text>
                        </View>                     
                            </ImageBackground>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                        onPress={() => this.props.navigation.navigate('Mechaura')}>
                <View style={styles.department}>
                    <ImageBackground source={require('./img/dep.jpg')} style={{width:'100%',}} imageStyle={{borderRadius:8}}>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'white',fontSize:height/30,fontWeight:'600',fontFamily:'Feather',}}>MECHAURA</Text>
                        <Text style={{color:'white',fontSize:width/35,fontFamily:'Feather',}}>Department of Mechanical Engineering</Text>
                    </View>                     
                        </ImageBackground>
                </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                        onPress={() => this.props.navigation.navigate('Emerge')}>
                <View style={styles.department}>
                    <ImageBackground source={require('./img/dep.jpg')} style={{width:'100%',}} imageStyle={{borderRadius:8}}>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'white',fontSize:height/30,fontWeight:'600',fontFamily:'Feather',}}>EMERGE</Text>
                        <Text style={{color:'white',fontSize:width/35,fontFamily:'Feather',}}>Department of Electrical and Electronics Engineering</Text>
                    </View>                     
                        </ImageBackground>
                </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                        onPress={() => this.props.navigation.navigate('Frequency')}>
                    <View style={styles.department}>
                    <ImageBackground source={require('./img/dep.jpg')} style={{width:'100%',}} imageStyle={{borderRadius:8}}>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'white',fontSize:height/30,fontWeight:'600',fontFamily:'Feather',}}>FREQUENCY</Text>
                        <Text style={{color:'white',fontSize:width/35,fontFamily:'Feather',}}>Department of Electronics and Communication Engineering</Text>
                    </View>                     
                        </ImageBackground>
                </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                        onPress={() => this.props.navigation.navigate('Costruzione')}>
                    <View style={styles.department}>
                    <ImageBackground source={require('./img/dep.jpg')} style={{width:'100%',}} imageStyle={{borderRadius:8}}>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'white',fontSize:height/30,fontWeight:'600',fontFamily:'Feather',}}>COSTRUZIONE</Text>
                        <Text style={{color:'white',fontSize:width/35,fontFamily:'Feather',}}>Department of Civil Engineering</Text>
                    </View>                     
                        </ImageBackground>  
                </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                        onPress={() => this.props.navigation.navigate('Yanthrika')}>
                    <View style={styles.department1}>
                    <ImageBackground source={require('./img/dep.jpg')} style={{width:'100%',}} imageStyle={{borderRadius:8}}>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'white',fontSize:height/30,fontWeight:'600',fontFamily:'Feather',}}>YANTHRIKA</Text>
                        <Text style={{color:'white',fontSize:width/35,fontFamily:'Feather',}}>Department of Applied Electronics and Instrumentation</Text>
                    </View>                     
                        </ImageBackground>
                </View>
                </TouchableWithoutFeedback>
                
                
                
                
                
                    
                      
                    </View>               
            </ScrollView>
            </View>
        );
    }
}
const department = createStackNavigator(
    {
      Home:dep,    
      Trilok:trilok,
      Fenstra:fenstra,
      Radiance:radiance,
      Mechaura:mechaura,
      Emerge:emerge,
      Frequency:frequency,
      Yanthrika:yanthrika,
      Costruzione:Costruzione,
      
      initialRouteName: "Home"
    

      
   
    
  }, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }  }

   
    
  );
  export default department;


const styles = StyleSheet.create({
    head:{
        height: height/8,
        width: '100%',
        alignItems:"center",
        justifyContent:"flex-end",
        fontWeight: '700',
        paddingBottom: height*.01,
        
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
    container:{
        width:width,
        backgroundColor: 'black',
        paddingTop: height/20,
        paddingBottom: height/30,
    },
    department:{
        flex:1,
        borderRadius: 8,
        height: height/7,
        marginTop: width/20,
        marginHorizontal: width/10,
        alignItems:'center',
        elevation:20,
        flexDirection:'row',
    },
    department1:{
        flex:1,
        backgroundColor:'#232323',
        borderRadius: 8,
        height: height/7,
        marginTop: width/20,
        marginHorizontal: width/10,
        alignItems:'center',
        elevation:20,
        marginBottom:height/7,
        flexDirection:'row',
    },
   
})