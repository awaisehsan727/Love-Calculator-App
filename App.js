import React from 'react';
import { StyleSheet, View, StatusBar, TouchableWithoutFeedback, Alert, Keyboard, ScrollView,ImageBackground,Text } from 'react-native';
import { TextInput, Appbar, Button } from 'react-native-paper';
import Displaylove from './component/Displaylove'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      sname: '',
      result: "loading"
    }
  }
  submit() {
    if (this.state.fname == '' || this.state.sname == '') {
      Alert.alert(
        "Warning",
        'Some thing went Wrong.... please Enter all Fields'
      )
    }
    else {
      fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "love-calculator.p.rapidapi.com",
          "x-rapidapi-key": "b15632a744msh02c17d5f151c924p15daaajsne70af54766f6"
        }
      })
        .then(data => data.json())
        .then(data2 => {
          console.log(data2)
          this.setState({
            result: data2
          })
        })
      this.setState(
        {
          fname: '',
          sname: ''
        }
      )
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <ImageBackground source={require('./images/Back.jpg')} style={styles.BackImage}> */}
          <StatusBar backgroundColor='#8565c4' barStyle="light-content" />
          <Appbar.Header>
            {/* <Appbar.BackAction
          onPress={this._goBack}
        /> */}
            <Appbar.Content
              title="Love % Calculator"
              style={{ alignItems: 'center' }}
            />
            {/* <Appbar.Action icon="magnify" onPress={this._handleSearch} />
         <Appbar.Action icon="dots-vertical" onPress={this._handleMore} /> */}
          </Appbar.Header>
          <ScrollView>
            <TextInput
              label='Enter Name (Male)'
              value={this.state.fname}
              style={{ margin: 20,backgroundColor:'white' }}
              onChangeText={text => this.setState({ fname: text })}
            />
            <TextInput
              label='Enter Name (Female)'
              value={this.state.sname}
              style={{ margin: 20,backgroundColor:'white' }}
              onChangeText={text => this.setState({ sname: text })}
            />

            <Button icon="tag-faces" mode="contained" style={{ height: 40, marginTop: 20, marginLeft: 30, marginRight: 30 }} onPress={() => {
              this.submit();
            }}
            >
              Calculate
       </Button>

            <Displaylove style={{ marginTop: 20 }} data={this.state.result} />
          </ScrollView>
          <Text style={styles.text1}>Awaisehsane727@gmail.com</Text>
          {/* </ImageBackground> */}
      </View>
    );
  }
}
export default App;
const styles = StyleSheet.create({
          container: {
          flex: 1,
    backgroundColor: '#e8f4f8',
  },
  BackImage:
  {
    width: '100%', 
    height: '100%'
  },
  text1:
    {
    fontSize:12,
    textAlign:'center',
    marginLeft:200,
    marginRight:5,
    marginTop:10,
    marginBottom:10,
    color:'#8565c4',
    fontWeight: "bold"
    }
});