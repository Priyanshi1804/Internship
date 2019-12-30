/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground
} from 'react-native';
import Header from './Header'

export default class Splash extends Component {

  componentDidMount() {
     setTimeout(
            ()=> {
              this.props.navigation.navigate("Login");
                },2000);
  }

  render() {
    return (
     <View style={styles.container}>
      <Header
        headerText = "WELCOME"         
      />

      
      <ImageBackground source={require('../img/dash.jpg')} style={{width: '100%', height: '100%'}}>

         <View style = {{ flex:1 ,backgroundColor:'rgba(40,40,40,0.8)',alignItems:'center'}}>
          <Image source={require('../img/mylogo.png')} style={{alignSelf:'center',marginTop:120}}/>


         </View>
            
      

          
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center'
    // backgroundColor:'#CACFD2'
  }
  
});
