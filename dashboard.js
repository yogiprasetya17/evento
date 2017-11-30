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
  ListView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Drawer from 'react-native-drawer';
import Swiper from 'react-native-swiper';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon} from 'native-base';

var {height,width} = Dimensions.get('window');
export default class Dashboard extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1','j']),
    };
  }

  static navigationOptions = {    
      header : null
  };
  closeControlPanel = () => {
    this._drawer.close();
  };
  openControlPanel = () => {
    this._drawer.open();
  };
  render() {
       const { navigate } = this.props.navigation;
    return (
      <Drawer
       ref={(ref) => this._drawer = ref}
      type="overlay"
      content={
        <View style={{width : width-100, height : height, backgroundColor : '#71BEAE'}}>
          <TouchableOpacity>
            <View style={{flexDirection : 'row'}}>
              <Icon name="person" />
              <Text style={{marginTop : 5, marginLeft : 5,  fontWeight : 'bold'}}>My Profile</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection : 'row'}}>
              <Text style={{marginTop : 5, marginLeft : 5,  fontWeight : 'bold'}}>Create</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection : 'row'}}>
              <Text style={{marginTop : 5, marginLeft : 5, fontWeight : 'bold'}}>Edit</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection : 'row'}}>
              <Text style={{marginTop : 5, marginLeft : 5,  fontWeight : 'bold'}}>Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      }
      tapToClose={true}
      openDrawerOffset={0.2} // 20% gap on the right side of drawer
      panCloseMask={0.2}
      closedDrawerOffset={-3}   
      styles={drawerStyles}
      tweenHandler={(ratio) => ({
        main: { opacity:(2-ratio)/2 }
      })}
      >
      <View style={{height : 200, width : width}}>
      <Swiper autoplay={true} style={{width : width, height : 200}}>
        <View style={{width : width, height : 200}}>
          <Image source={require ('./1.jpg')}
          style ={{height:200, width : width, alignSelf:'center'}}
          /> 
        </View>

        <View style={{width : width, height : 200}}>
          <Image source={require ('./2.jpg')}
          style ={{height:200, width : width, alignSelf:'center'}}
          /> 
        </View>

        <View style={{width : width, height : 200}}>
          <Image source={require ('./3.jpg')}
          style ={{height:200, width : width, alignSelf:'center'}}
          /> 
        </View>

        <View style={{width : width, height : 200}}>
          <Image source={require ('./4.jpg')}
          style ={{height:200, width : width, alignSelf:'center'}}
          /> 
        </View>
      </Swiper>
      </View>
         <TouchableOpacity onPress={()=>this.openControlPanel()} style={{marginLeft : 5}}>
           <Icon name="menu"/>
         </TouchableOpacity>
      <Content>
        <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => 
        <View style={{marginTop : '5%'}}>
           <Image source={require ('./p1.jpg')}
            style ={{height:400, width : width, alignSelf:'center'}}
            /> 
            <View>
              <Text style={{fontWeight : 'bold', color : 'black', marginTop : "5%"}}>Karena besarnya antusias para pemain Call of Duty ada kejuaraan spesial buat kalian. Kami akan mengadakan kejuaraan Call of Duty Gamers Tournament dengan total hadiah Rp. 5.000.000</Text>
            </View>
        </View>
        }
      />
      </Content>
    </Drawer>
    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
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
