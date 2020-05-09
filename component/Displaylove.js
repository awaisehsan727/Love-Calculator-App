import React from 'react';
import { StyleSheet, View, StatusBar,Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const Displaylove = (prop)=>
{
    if(prop.data=="loading")
    {
     return(
     
        <View style={styles.container}>
        <Text style={styles.text}>Enter Names and check your love with Other and Enjoy</Text>
       </View>
        )
    }
    else
    if(prop.data.message)
    { 
        return (
        <View style={styles.container}>
        <Text style={styles.text}>Sorry..! Something Went Wrog.. Try Again..!</Text>
       </View>
        )     
    }
    {
    return(
        <View style={styles.container}>
         <Text style={styles.text}>{prop.data.percentage}%</Text>
         <Text style={styles.textr}>{prop.data.result}</Text>
        </View>

    )
}
}
export default Displaylove

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e8f4f8',
      justifyContent:'center',
      marginTop:30
    },
    text:
    {
    fontSize:50,
    textAlign:'center',
    marginLeft:15,
    marginRight:15,
    marginTop:50,
    color:'#8565c4',
    fontWeight:'bold'
    },
    textr:
    {
    fontSize:25,
    textAlign:'center',
    marginLeft:15,
    marginRight:15,
    color:'#8565c4',
    fontWeight:'bold'
    }
    
  });