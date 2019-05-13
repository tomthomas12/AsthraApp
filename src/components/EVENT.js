import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ImageBackground
} from 'react-native';

var { height,width } = Dimensions.get('window');
class Events extends Component{
    render(){
        return(
            <View style={styles.box}>
                <Image source={this.props.imageUri} style={{height:height/3+10,width:width, resizeMode:"cover"}}/>
                   <View style={{alignItems:"center", marginTop:height/50}}>
                    <Text style={styles.text}>
                        {this.props.name}
                    </Text>
                   </View>
                    
                    
                
                
          </View>
        )
    }
}
export default Events;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box:{backgroundColor:"#232323", width:width/2+70, height:height/3+70, marginLeft:width/10, elevation:20},
    text:{color:"white", fontWeight:"700",fontSize:width/20,fontFamily:'Feather',}
})
