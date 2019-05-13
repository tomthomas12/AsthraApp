
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
  ToastAndroid,
  Dimensions,
  ImageBackground
} from 'react-native';

var {height,width}=Dimensions.get('window')
export default class Notification extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true, // check if json data (online) is fetching
      dataSource: [], // store an object of json data
    };
  }

  componentDidMount() {
    return fetch("http://asthra.co.in/asthra_app/notification.json")
          .then((response) => response.json())
          .then((responseJson) => {
            // set state value
            this.setState({
              isLoading: false, // already loading
              dataSource: responseJson.info
            });
          })
          .catch((error) => {
            ToastAndroid.show(error.toString(), ToastAndroid.SHORT);
          });
  }

  render() {
    // show waiting screen when json data is fetching
    if(this.state.isLoading) {
      return(
        <View style={{flex: 1, backgroundColor:"black"}}>
        <ImageBackground style={styles.head} source={require('./src/images/bg.jpg')}>
                    <Text style={{color:"white", fontSize:height/30, fontWeight:'700' ,fontFamily:'Feather',}}>
                        NOTIFICATIONS
                    </Text>
          </ImageBackground>
          <ActivityIndicator style={{paddingTop:height/2.5}}/>
        </View>
      )
    }

    return(
      <View style={{flex: 1,backgroundColor:"black"}}>
        <ImageBackground style={styles.head} source={require('./src/images/bg.jpg')}>
                    <Text style={{color:"white", fontSize:width/50, fontWeight:'700',fontFamily:'Feather', }}>
                        NOTIFICATIONS
                    </Text>
          </ImageBackground>

        <FlatList style={{marginTop:height/20}}
          data={this.state.dataSource}
          renderItem={({item}) => {
            return (
              <View style={{flex:9, marginHorizontal:width/10, }}>
                <Text style={styles.info}>{item.noti} </Text>
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
  info: {
    fontSize: width/25,
     color:"white",  
     
     paddingTop: height/40  ,
     fontFamily:'Feather',
  },
  head:{
    height: height/8,
    width: '100%',
    alignItems:"center",
    justifyContent:"center",
    fontWeight: '700',   
},

});