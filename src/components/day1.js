
// **********************************

// change json package link 

//***********************************
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Alert,
  Dimensions,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

var {height,width}=Dimensions.get('window')
export default class notifications extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true, // check if json data (online) is fetching
      dataSource: [], // store an object of json data
    };
  }

  componentDidMount() {
    return fetch("http://asthra.co.in/asthra_app/day1.json")
          .then((response) => response.json())
          .then((responseJson) => {
            // set state value
            this.setState({
              isLoading: false, // already loading
              dataSource: responseJson.info
            });
          })
          .catch((error) => {
            
            Alert.alert(
                'Error',
                'No Internet Connection',
                [
                  {text: 'Go Back', onPress: () => this.props.navigation.goBack(),}
                  
                ],
                {cancelable: false},
              );
			
          });
  }

  render() {
    // show waiting screen when json data is fetching
    if(this.state.isLoading) {
      return(
        <View style={{flex: 1, backgroundColor:"black"}}>
        <ImageBackground style={styles.head} source={require('./img/bg.jpg')}>
        <TouchableHighlight style={styles.hamburger} 
           onPress={() => this.props.navigation.goBack(null)}>
           <Icon  name="ios-arrow-back"  color="#fff"  size={height*.04} style={styles.drawerButton}/>
            </TouchableHighlight>
                    <Text style={{color:"white", fontSize:width/30, fontWeight:'700' }}>
                    TODAY'S EVENTS
                    </Text>
          </ImageBackground>
          <ActivityIndicator style={{paddingTop:height/2.5}}/>
        </View>
      )
    }

    return(
      <View style={{flex: 1,backgroundColor:"black"}}>
        <ImageBackground style={styles.head} source={require('./img/bg.jpg')}>
        <TouchableHighlight style={styles.hamburger} 
           onPress={() => this.props.navigation.goBack(null)}>
           <Icon  name="ios-arrow-back"  color="#fff"  size={height*.04} style={styles.drawerButton}/>
            </TouchableHighlight>
                    <Text style={{color:"white", fontSize:height/30, fontWeight:'700' }}>
                        TODAY'S EVENTS
                    </Text>
          </ImageBackground>

        <FlatList style={{marginTop:height/20}}
          data={this.state.dataSource}
          renderItem={({item}) => {
            return (
            <View style={{alignItems:'center',}}>
              <View style={style=styles.notificationBox}> 
                
                    <Text style={styles.name}>{item.name} </Text>
                    
                    <Text style={styles.department}>{item.department} </Text>
                    <Text style={styles.venue}>{item.venue} </Text>
              </View>
            </View>
            )
          }}
         
          keyExtractor={(item, index) => index.toString()}
        />
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
        paddingBottom: height*.013,
        fontFamily:'Feather',
    },
 info: {
    fontSize: width/27,
     color:"white",  
     margin:height/20,
     marginLeft:width/width,
     marginRight:width/width,
     fontFamily:'Feather',

  },
  

notificationBox:{
    backgroundColor:'#161616',
    height:height/6,
    width:width*0.9,
    marginBottom:height/20,
    justifyContent:'center',
    alignItems:'center', 
},
name:{
fontSize:height/35,
color:'white',
fontWeight:'500',
textAlign:'center',
fontFamily:'Feather',
},
department:{
    fontSize:height/35,
    color:'white',
    fontFamily:'Feather',
},
venue:{
    fontSize:height/35,
    color:'white',
    fontFamily:'Feather',
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
});
