import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { TextInput, Appbar, Button } from 'react-native-paper';
import Displaylove from './component/Displaylove'

class App extends React.Component {
  state = {
    fname: '',
    sname: '',
    result: "loading"
  }
  submit() {
    fetch('https://love-calculator.p.rapidapi.com/getPercentage?fname=John&sname=Alice', {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "x-rapidapi-key": "5e0316cbb6msh676e614b082cf32p1bda87jsn859bfbcd4a24"
      }
    })
      .then(data => data.json())
      .then(data2 => {
        console.log(data2)
        this.setState({
          result: data2
        })
      })
  }
  render() {
    return (
      <View style={styles.container}>
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
        <TextInput
          label='first Name'
          value={this.state.fname}
          style={{ margin: 20 }}
          onChangeText={text => this.setState({ fname: text })}
        />
        <TextInput
          label='Last name'
          value={this.state.sname}
          style={{ margin: 20 }}
          onChangeText={text => this.setState({ sname: text })}
        />
        <Button icon="tag-faces" mode="contained" style={{ height: 40, marginTop: 20, marginLeft: 30, marginRight: 30 }} onPress={this.submit.bind(this)}>
          Calculate
       </Button>
        <Displaylove style={{ marginTop: 20 }} data={this.state.result} />
      </View>
    );
  }
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});