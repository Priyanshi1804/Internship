/* @flow */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  FlatList    
} from 'react-native'



export default class Header extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <View style = { styles.headerView }>
        
          <Text style = { styles.txt }>{this.props.headerText}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  headerView:{
    height:55,
    width:'100%',
    // backgroundColor:'#3CBC74',
    backgroundColor:'#16A085',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
  },
  txt:{
    textAlign:'center',
    fontSize:20,
    color:'white'
  },
  imgStyle:{
    height:25,
    width:25,
    tintColor:'white'
  },
  imgView:{
    height:55  ,
    justifyContent:'center',
    position:'absolute',
    left:15
  }
});
