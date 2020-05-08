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
        <Text style={styles.text1}>Awaisehsane727@gmail.com</Text>
       </View>
        )
    }
    else
    if(prop.data.message)
    { 
        return (
        <View style={styles.container}>
        <Text style={styles.text}>Sorry..! Something Went Wrog.. Try Again..!</Text>
        <Text style={styles.text1}>Awaisehsane727@gmail.com</Text>
       </View>
        )     
    }
    {
    return(
        <View style={styles.container}>
         <Text style={styles.text}>{prop.data.percentage}%</Text>
         <Text style={styles.text}>{prop.data.result}</Text>
        </View>

    )
}
}
export default Displaylove

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent:'center'
    },
    text:
    {
    fontSize:30,
    textAlign:'center',
    marginLeft:10,
    marginRight:10,
    marginTop:20,
    color:'#8565c4'
    },
    text1:
    {
    fontSize:12,
    textAlign:'center',
    marginLeft:150,
    marginRight:5,
    marginTop:120,
    color:'#8565c4'
    }
    
  });