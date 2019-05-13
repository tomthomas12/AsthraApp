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
class Departments extends Component{
    render(){
        return(
            <View style={styles.box}>
                <ImageBackground source={this.props.imageUri} style={{height:height,width:width, resizeMode:"cover"}}>
                    <Text style={styles.text}>
                    {this.props.name}
                    </Text>
                    <Text style={{fontSize:15, color:"white", fontWeight:"500",fontFamily:'Feather',marginLeft:width/10+5,marginTop:-5}}>
                        {this.props.deptName}
                    </Text>
                </ImageBackground>
                
          </View>
        )
    }
}
export default Departments;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box:{backgroundColor:"#232323", width:width/2+70, height:height/3+70, marginLeft:width/10, elevation:20},
    text:{color:"white", fontWeight:"700",fontSize:width/10, marginTop:height/4+30,marginLeft:width/10+5,fontFamily:'Feather',}
})
