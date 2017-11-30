/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import * as firebase from 'firebase';

var {height,width} = Dimensions.get('window');
export default class Login extends Component {
  constructor(){
    super()
    this.state={
      Email :"",
      Password :"",
    }
  }
  async Login(Email,Password){
    try{
      const { navigate } = this.props.navigation;      
      await firebase.auth().signInWithEmailAndPassword(Email,Password);
      navigate('Dashboard');
    }catch (error){
      alert(error.toString());
  }
}
  static navigationOptions = {
      header : null
  };
  render() {
       const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}

      >
      <Image source={require ('./login.png')}
      style ={{height:200,alignSelf:'center',marginTop:50}}
      />
            <TextInput
      placeholder='Email'
      placeholderTextColor='white'
      underlineColorAndroid='transparent'
      style={{height:40,marginTop:0, width:200 ,borderColor :'white',borderWidth: 2, alignSelf : 'center',color:'white',borderRadius:10}}
      onChangeText={(Email) => this.setState({Email})}
      />
      <TextInput
      placeholder='Password'
      placeholderTextColor='white'
      underlineColorAndroid='transparent'
      secureTextEntry={true}
      style={{height:40,marginTop:10, width:200 ,borderColor :'white',borderWidth: 2, alignSelf : 'center',color:'white',borderRadius:10}}
      onChangeText={(Password) => this.setState({Password})}
      />
      <TouchableOpacity  onPress={() => this.Login(this.state.Email,this.state.Password)}>
      <View style={{height:40,width:200,backgroundColor:'#ffffff', marginTop : 10, alignSelf : 'center',borderRadius:10}}>
      <Text style={{alignSelf:'center',marginTop :10,color :'#0d0d0d'}}>
     
      Login
      </Text>
      </View>
      </TouchableOpacity>

      <View style={{marginLeft:80,marginTop:10,flexDirection:'row'}}>
      <Text style={{color:'blue'}}>
      New to Evento? Sign Up Now
      </Text>
      <TouchableOpacity onPress={()=>navigate('Signup')}>
      <Text style={{color:'white', marginLeft : 10}}>
      Sign Up
      </Text>
      </TouchableOpacity>


      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height : height,
    width : width,
    backgroundColor: '#71BEAE',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
