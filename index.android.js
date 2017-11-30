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
  TouchableOpacity
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './dashboard';
import * as firebase from 'firebase';
var {height,width} = Dimensions.get('window');
const config = {
  apiKey: "AIzaSyDzJf-JzC00lNQE-dbB2EMclTzBC4XfeWQ",
  authDomain: "yogiprasetya-84280.firebaseapp.com",
  databaseURL: "https://yogiprasetya-84280.firebaseio.com",
  projectId: "yogiprasetya-84280",
  storageBucket: "yogiprasetya-84280.appspot.com",
  messagingSenderId: "371758995832"
};
firebase.initializeApp(config);
export default class yogiprasetya extends Component {
  static navigationOptions = {
      header : null
  };
  render() {
     const { navigation } = this.props;
     const { navigate } = this.props.navigation;
    return (
    <View style={{height: height, width: null, backgroundColor:"green", flex:1,alignItems:'center', justifyContent:'center'}}>
       <Login navigation={navigation}/>
    </View>

    );
  }
}
const eventoNavigation = StackNavigator({
  Home : {screen : Login},
  Signup : {screen : Signup},
  Dashboard : {screen : Dashboard},
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height : height,
    width : width,
    backgroundColor: '#F5FCFF',
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

AppRegistry.registerComponent('yogiprasetya', () => eventoNavigation);
