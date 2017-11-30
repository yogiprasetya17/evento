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
import DatePicker from 'react-native-datepicker';
import * as firebase from 'firebase';

var {height,width} = Dimensions.get('window');
export default class Signup extends Component {
  constructor(){
    super()
    this.state={
      Username :"",
      Name :"",
      Email :"",
      Password :"",
      date :"",
  constructor(props){
    this.state = {date:"2016-05-15"}
    }
  }
}
async Signup (Email,Password){
  try{
    const { navigate } = this.props.navigation;
    await firebase.auth().createUserWithEmailAndPassword(Email,Password);
    navigate('Dashboard');
  }catch (error){
    alert(error.toString());
}}
  static navigationOptions = {
      header : null
  };
  render() {
       const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}
      
      >
      
      <View style={{width:width,height:height-450,backgroundColor:'#71BEAE'}}>
      <Image source={require ('./login.png')}
      style ={{height:200,alignSelf:'center',marginTop:20}}
      />
      </View>
      <TextInput
      placeholder='Username'
      placeholderTextColor='black'
      underlineColorAndroid='transparent'
      style={{height:40,marginTop:10,width:300,borderColor :'#71BEAE',borderWidth:2,alignSelf:'center',color:'#71BEAE',borderRadius:10}}
      />
      <TextInput
      placeholder='Name'
      placeholderTextColor='black'
      underlineColorAndroid='transparent'
      style={{height:40,marginTop:5,width:300,borderColor:'#71BEAE',borderWidth:2,alignSelf:'center',color:'#71BEAE',borderRadius:10}}
      />
      <TextInput
      placeholder='Email'
      placeholderTextColor='black'
      underlineColorAndroid='transparent'
      onChangeText={(Email) => this.setState({Email})}
      style={{height:40,marginTop:5,width:300,borderColor:'#71BEAE',borderWidth:2,alignSelf:'center',color:'#71BEAE',borderRadius:10}}
      />
      <TextInput
      placeholder='Password'
      placeholderTextColor='black'
      underlineColorAndroid='transparent'
      secureTextEntry={true}
      onChangeText={(Password) => this.setState({Password})}
      style={{height:40,marginTop:5,width:300,borderColor:'#71BEAE',borderWidth:2,alignSelf:'center',color:'#71BEAE',borderRadius:10}}
      />
        <DatePicker
        style={{width: 300,height:40,marginTop:5,width:300,borderColor:'#71BEAE',borderWidth:2,alignSelf:'center',borderRadius:10}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="1980-01-01"
        maxDate="2017-12-31"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 0 ,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 0,  
          }
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />

      <TouchableOpacity onPress ={()=>this.Signup(this.state.Email,this.state.Password)}
      style={{marginTop:10}}>
      <View style={{height:40,width:300,backgroundColor:'#71BEAE', marginTop :30, alignSelf : 'center',borderRadius:10}}>
      <Text style={{alignSelf:'center',marginTop :10,color :'#0d0d0d'}}>
      Sign Up
      </Text>
      </View>
      </TouchableOpacity>
      </View>
    );
  }
}

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
