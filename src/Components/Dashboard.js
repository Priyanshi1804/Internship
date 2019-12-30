

import React, { Component } from 'react'
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
import CardView from 'react-native-cardview' ;
//import Header from './Header';
//import  Icon from 'react-native-vector-icons'


class DashBoard extends Component { 
  
 render() {

   return (
     <View style={styles.container}>
      /* <Header
        headerText = "DashBoard" 
        onPressBack = {() => this.props.navigation.navigate("Login")}
      /> */
      <ImageBackground source={require('../img/dash.jpg')} style={{width: '100%', height: '100%',alignItems:'center'}}>
     <View style={styles.headContiner}> 
      <View style={styles.Maincontainer}>
    
        <View style = { styles.mainView }>
          <TouchableOpacity 
          onPress = {()=>{ this.props.navigation.navigate('Form') }}
          style = { styles.cardView }>
            <Image source={require('../img/1.png')} style={{width: 60 , height: 60 , tintColor:'white'}} />
            <Text style = { styles.cardText}>CV Form</Text>
          </TouchableOpacity>


          <TouchableOpacity 
          onPress = {()=>{ this.props.navigation.navigate('Accepted') }}
          style = { styles.cardView }>
            <Image source={require('../img/2.png')} style={{width: 60 , height: 60 , tintColor:'white'}} />
            <Text style = { styles.cardText}>ACCEPTED</Text>
          </TouchableOpacity>
        </View>
        
      </View>

    
      <View style={styles.Maincontainer}>
    
        <View style = { styles.mainView}>
          <TouchableOpacity 
          onPress = {()=>{ this.props.navigation.navigate('Rejected') }}
          style = { styles.cardView}>
            <Image source={require('../img/3.png')} style={{width: 60 , height: 60 , tintColor:'white'}} />
            <Text style = { styles.cardText}>REJECTED</Text>
          </TouchableOpacity>


          <TouchableOpacity 
          onPress = {()=>{ this.props.navigation.navigate('Sugesstions') }}
          style = { styles.cardView }>
            <Image source={require('../img/4.png')} style={{width: 60 , height: 60 , tintColor:'white'}} />
            <Text style = { styles.cardText}>SUGESSTIONS</Text>
          </TouchableOpacity>

        </View>       


      </View>
      </View>
      </ImageBackground>
    </View>

    )
  }
}
export default DashBoard;

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  Maincontainer:{
    height:'30%',
    width:'100%', 
    //backgroundColor:'rgba(40,40,40,0.8)',
    padding:20,
    //justifyContent:'center'
  }, 
  headContiner:{
    height:'100%',
    width:'100%',
    backgroundColor:'rgba(40,40,40,0.8)',
    padding:20,
  },
  mainView:{    
    height:'100%',
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    //top:'55%'
  },   
  cardView:{
    height:'80%',
    width:'45%',
    backgroundColor:'rgba(22,160,133,0.8)',
    borderRadius:10,
    //padding:10,
    justifyContent:'center' ,
    alignItems:'center'
  }, 
  cardText:{
    fontSize:15,
    color:'white',
    marginTop:15
  } 
})