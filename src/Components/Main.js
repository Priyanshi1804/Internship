

import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity,Image,ImageBackground} from 'react-native';

export default class Main extends Component{
  render() {
    return (
      
     <View style={styles.container}>
         <ImageBackground source={require('../img/changeSplash.jpg')} style={{width: '100%', height: '100%',alignItems:'center'}}>
        <View style = {{ height:'100%' , width:'100%' , backgroundColor:'rgba(40,40,40,0.8)' , alignItems:'center' }}>
        <TouchableOpacity
          style = { styles.imgView }     
          activeOpacity = { 0.7 }
          onPress={()=>this.props.navigation.navigate('Dashboard')}
        >
          <Image
                source={require("../img/left1.png")}
                style={styles.imgStyle}
           />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('BreakFast')} >
           <View>           
                  <Image source={require('../img/breakfast.jpg')} style={styles.myButton}/>          
           </View>
          </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Lunch')}>
          <View>            
                 <Image  source={require('../img/lunch.jpg')} style={styles.myButton}/>           
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Snacks')}>
         <View>            
                <Image  source={require('../img/Snacks.jpg')} style={styles.myButton}/>       
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Dinner')}>
          <View >            
               <Image  source={require('../img/dinner.jpg')} style={styles.myButton}/>            
          </View>
        </TouchableOpacity>
        </View>
       </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FFE5E5',  },
  myButton:{
    padding: 5,
    height:150,
    width:150,  //The Width must be the same as the height
    borderRadius:300, //Then Make the Border Radius twice the size of width or Height   
    backgroundColor:'rgb(195, 125, 198)',    
    justifyContent:'center',
    alignItems: 'center',
   marginVertical:20,
  },
  text:{
    fontSize:20,
    fontWeight:'500',
    color:'#ffffff',

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
  signupButton: {
    backgroundColor: "#FF4DFF",
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

