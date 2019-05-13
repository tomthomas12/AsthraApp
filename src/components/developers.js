import React,{Component} from 'react';
import {View,Text,ScrollView,StyleSheet,Dimensions,Image,Linking, ImageBackground,TouchableHighlight,TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

var {height,width}=Dimensions.get('window');

export default class dev extends Component{
    render(){
        return(

            <View style={{backgroundColor:'black'}}>
               
          
                <ImageBackground style={styles.head} source={require('./img/bg.jpg')}>
                <TouchableHighlight style={styles.hamburger} 
           onPress={() => this.props.navigation.goBack()}>
           <Icon  name="ios-arrow-back"  color="#fff"  size={height*.04} style={styles.drawerButton}/>
            </TouchableHighlight>
                
                    <Text style={{color:"white", fontSize:height/30, fontWeight:'700',fontFamily:'Feather', }}>
                        DEVELOPERS
                    </Text>
                </ImageBackground>
            <ScrollView>
                <View style={styles.container}>
                
                    <View style={styles.developer}>
                        
                        <Image source={require('./img/developers/rithin.jpg')} style={styles.coordinators}>
                        </Image>
                        <Text style={styles.name}>Rithin Jose</Text>
                        <View style={styles.profile}>
                        <TouchableWithoutFeedback
                             onPress = { () => {Linking.openURL('https://www.instagram.com/rithinja/');}}    >
                            <Icon name="logo-instagram" style={styles.icon} size={height/20}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                             onPress = { () => {Linking.openURL('https://www.linkedin.com/in/rithin-jose-a71b0a15a/');}}    >
                            <Icon name="logo-linkedin" style={styles.icon} size={height/20}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                             onPress = { () => {Linking.openURL('https://rithinjose.me/');}}    >
                            <Icon name="ios-globe" style={styles.icon} size={height/20}/>
                        </TouchableWithoutFeedback>                         
                        </View>
                    </View>
                    <View style={styles.developer}>
                        
                        <Image source={require('./img/developers/johan.jpg')} style={styles.coordinators}>
                        </Image>
                        <Text style={styles.name}>Johan Issac</Text>
                        <View style={styles.profile}>
                        <TouchableWithoutFeedback
                             onPress = { () => {Linking.openURL('https://www.instagram.com/johanissac/');}}    >
                            <Icon name="logo-instagram" style={styles.icon} size={height/20}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                             onPress = { () => {Linking.openURL('https://www.linkedin.com/in/johan-issac-b8a316150/');}}    >
                            <Icon name="logo-linkedin" style={styles.icon} size={height/20}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                             onPress = { () => {Linking.openURL('http://johanissac.me/');}}    >
                            <Icon name="ios-globe" style={styles.icon} size={height/20}/>
                        </TouchableWithoutFeedback>
                            
                        </View>
                    </View>
                    <View style={styles.developer}>
                        
                        <Image source={require('./img/developers/justin.jpg')} style={styles.coordinators}>
                        </Image>
                        <Text style={styles.name}>Justin Johny</Text>
                        <View style={styles.profile}>
                        <TouchableWithoutFeedback
                             onPress = { () => {Linking.openURL('https://www.instagram.com/just_in_johny_mathew/');}}    >
                            <Icon name="logo-instagram" style={styles.icon} size={height/20}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                             onPress = { () => {Linking.openURL('https://www.linkedin.com/in/justinjohnymathew/');}}    >
                            <Icon name="logo-linkedin" style={styles.icon} size={height/20}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                             onPress = { () => {Linking.openURL('https://justinjohny.me/');}}    >
                            <Icon name="ios-globe" style={styles.icon} size={height/20}/>
                        </TouchableWithoutFeedback>
                            
                        </View>
                    </View>
                    <View style={styles.developer}>
                        
                        <Image source={require('./img/developers/santhul.jpg')} style={styles.coordinators}>
                        </Image>
                        <Text style={styles.name}>Santhul Joseph</Text>
                        <View style={styles.profile}>
                        <TouchableWithoutFeedback
                             onPress = { () => {Linking.openURL('https://www.instagram.com/santhuljoseph/');}}    >
                            <Icon name="logo-instagram" style={styles.icon} size={height/20}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                             onPress = { () => {Linking.openURL('https://www.linkedin.com/in/santhul-joseph-9a8a85148/');}}    >
                            <Icon name="logo-linkedin" style={styles.icon} size={height/20}/>
                        </TouchableWithoutFeedback>
                        
                            
                        </View>
                    </View>
                    <View style={styles.developer}>
                        
                        <Image source={require('./img/developers/jobson.jpg')} style={styles.coordinators}>
                        </Image>
                        <Text style={styles.name}>Jobson  P Varghese</Text>
                        <View style={styles.profile}>
                        <TouchableWithoutFeedback
                             onPress = { () => {Linking.openURL('https://www.instagram.com/jobson_varghese/');}}    >
                            <Icon name="logo-instagram" style={styles.icon} size={height/20}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                             onPress = { () => {Linking.openURL('https://www.linkedin.com/in/jobson-varghese-a54856168/');}}    >
                            <Icon name="logo-linkedin" style={styles.icon} size={height/20}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                             onPress = { () => {Linking.openURL('https://jobsonvarghese.me/');}}    >
                            <Icon name="ios-globe" style={styles.icon} size={height/20}/>
                        </TouchableWithoutFeedback>
                            
                        </View>
                    </View>
                    <View style={styles.developer}>
                        
                        <Image source={require('./img/developers/joy.jpg')} style={styles.coordinators}>
                        </Image>
                        <Text style={styles.name}>Alen Joy</Text>
                        <View style={styles.profile}>
                        <TouchableWithoutFeedback
                             onPress = { () => {Linking.openURL('https://www.instagram.com/alen_joy_/');}}    >
                            <Icon name="logo-instagram" style={styles.icon} size={height/20}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                             onPress = { () => {Linking.openURL('https://www.linkedin.com/in/alenjoy/');}}    >
                            <Icon name="logo-linkedin" style={styles.icon} size={height/20}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                             onPress = { () => {Linking.openURL('https://alenjoy.me/');}}    >
                            <Icon name="ios-globe" style={styles.icon} size={height/20}/>
                        </TouchableWithoutFeedback>
                            
                        </View>
                    </View>
                    <View style={styles.developer1}>
                        
                        <Image source={require('./img/developers/shinu.jpg')} style={styles.coordinators}>
                        </Image>
                        <Text style={styles.name}>Shinu Shaju</Text>
                        <View style={styles.profile}>
                        <TouchableWithoutFeedback
                             onPress = { () => {Linking.openURL('https://www.instagram.com/shinu_shaju/');}}    >
                            <Icon name="logo-instagram" style={styles.icon} size={height/20}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                             onPress = { () => {Linking.openURL('https://www.linkedin.com/in/shinushaju/');}}    >
                            <Icon name="logo-linkedin" style={styles.icon} size={height/20}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                             onPress = { () => {Linking.openURL('http://shinushaju.me/');}}    >
                            <Icon name="ios-globe" style={styles.icon} size={height/20}/>
                        </TouchableWithoutFeedback>
                            
                        </View>
                    </View>
                </View>                   
            </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    head:{
        height: height/8,
        width: '100%',
        alignItems:"center",
        justifyContent:"flex-end",
        fontWeight: '700',
        paddingBottom: height*.01,
        
    },
    container:{
        width:width,
        backgroundColor: 'black',
        paddingTop: height/40,
        paddingBottom: height/30,
    },
    developer:{
        flex:1,
        backgroundColor:'#232323',
        borderRadius: 8,
        height: height/3,
        marginTop: width/20,
        marginHorizontal: width/10,
        alignItems:'center',
        elevation:20
    },
    developer1:{
        flex:1,
        backgroundColor:'#232323',
        borderRadius: 8,
        height: height/3,
        marginTop: width/20,
        marginHorizontal: width/10,
        alignItems:'center',
        elevation:20,
        marginBottom:height/7,

    },
    coordinators:{
        height:height/8,
        width:height/8,
        borderRadius: 50,
        marginTop: height/20,
      },
      name:{
          color:'white',
          marginTop: height/65,
          fontSize: width/20,
          fontWeight: '700',
          fontFamily:'Feather',
      },
      profile:{
         flex:1,
         flexWrap:'wrap',
         flexDirection:'row',
      },
      icon:{
          marginTop:height/65,
          marginHorizontal:width/30,
          color:"white",
          

      },
      hamburger:{
        width:height*.09,
        height:height*.09,
        position:'absolute',
        top:height*.05,
        left:height*.01,   
        borderRadius:75,   
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center'        
             
        },  
})