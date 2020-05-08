import React from 'react';
import { StyleSheet, View, StatusBar,Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const Displaylove = (prop)=>
{
    if(prop.data=="loading")
    {
     return<Text style={styles.text}>Just wait !...Something is Doing for you</Text>
    }
    else
    // if(prop.data.message)
    // {
    //     console.log()
    //     return <Text style={styles.text}>Sorry..! Something Went Wrog.. Try Again..!</Text>   
    // }
    {
    return(
        <View style={styles.container}>
         <Text style={styles.text}>{prop.data.percentage}</Text>
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
    marginTop:20
    }
    
  });