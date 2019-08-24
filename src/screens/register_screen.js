import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
} from 'react-native';
import { CheckBox } from 'native-base';


export default class register_screen extends Component {

  constructor(props) {
    super(props);
    this.state = {
        name   : '', 
        email   : '',
        password: '',
        isteacher: false
    }

    this.onRegister = this.onRegister.bind(this);
  }

  onRegister = (viewId) => {
    this.props.navigation.navigate('login_screen')
      /*
    fetch('http://794394c0.ngrok.io/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "name": this.state.name,
        "email": this.state.email,
        "password": this.state.password,
        "type": this.state.isteacher ? "Teacher" : "Student"
    })
  })
    .then((response) => response.json())
    .then((responseJson) => {
        this.props.navigation.navigate('login_screen')
    })
    .catch((error) => {
      console.error(error);
    });
    */
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.loginText}>Teacher</Text>
            <CheckBox
             onPress={() => this.setState({ isteacher: !this.state.isteacher})}
            checked={this.state.isteacher}/>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="User Name"
              underlineColorAndroid='transparent'
              onChangeText={(name) => this.setState({name})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View> 

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onRegister('register')}>
          <Text style={styles.loginText}>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});