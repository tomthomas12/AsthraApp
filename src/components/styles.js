import {StyleSheet} from 'react-native';
var { height } = Dimensions.get('window');
 
var box_count =height/100;
var box_height =box_count*70;
var bottom_height= box_count*30;
 export const styles= StyleSheet.create({
    container: {
      flex:1,
      flexDirection: 'column',
      
    },
    title:{
      
     
      
    },
    title_text:{
      fontSize:35,
      color:'white',
      backgroundColor:'black',
      paddingTop: 20,
      paddingLeft: 25,
      fontFamily:'Feather',
    },
    top_div:{
     
      height: box_height,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent:'flex-end',
      paddingBottom: 40,
    },
    asthra:{
      height:100,
      width:200   
    },
    asthra_date:{
      fontSize:20,
      color:'white',
      fontFamily:'Feather',
    },
    bottom_div:{
      height:height-box_height,
      backgroundColor:'black',
    },
    row:{
      flexDirection:'row',
      flex: 1,
      justifyContent:'space-evenly',
      margin: 10,
    },
    box:{
      width:120,
      height:150,
      backgroundColor:'white',
      alignItems:'center',
      justifyContent:'flex-end',
      paddingBottom: 20,
      borderRadius: 10,
  
      
    },
    box_text:{
      color:'black',
      fontSize:20,
      fontFamily:'Feather',
    }
  });