
//import { StyleSheet, View, Text, Platform } from 'react-native';
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
} from 'react-native';
//import AppIntroSlider from 'react-native-app-intro-slider';
import Swiper from 'react-native-swiper';
import CardView from 'react-native-cardview' ;
import HeaderArrow from '../HeaderArrow';

 
export default class TeacherCompanies extends Component {

  render() {
    return(
    <View styles={styles.container}>
    <HeaderArrow
        headerText = "Company Status"
        onPressBack = {() => this.props.navigation.navigate("StudentDashboard")}
      /> 
      <ImageBackground source={require('../../img/dash.jpg')} style={{width: '100%', height: '100%',alignItems:'center'}}>
        <View style={styles.headContiner}> 
                   <TouchableOpacity       
                         style = { styles.ITDesignButton }>
                         <Text style = { styles.logintxt }>APPROVED</Text>
                         </TouchableOpacity>  
                         <TouchableOpacity         
                              style = { styles.CEDesignButton }>
                            <Text style = { styles.logintxt }>REJECTED</Text>    
                          </TouchableOpacity> 
          
                           
          <View style={styles.Contain}>                     
                    
                    <View style={styles}>           

               
                 

                </View>      
                        
              
          </View>
           
        </View>
      </ImageBackground> 
    </View>
      
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  headContiner:{
    height:'100%',
    width:'100%',
    backgroundColor:'rgba(40,40,40,0.8)',
    //padding:20,
  },  
  slidingContainer:{
    flexDirection:'row',
    // backgroundColor:'#ffffff',
    height:'8%',
    width:'90%',
    marginLeft:'5%',
    marginTop:20,
    // padding:10,
    backgroundColor:'#ffffff',
    borderRadius:20

  },
  Partion:{
    width:'50%', 
    alignItems:'center',
    justifyContent:'center',   
  },
  PartionText:{
    color:'#FF0000',
    textAlign:'center',
    fontSize:30,
  },
  line:{    
    borderRightWidth:2,
    borderColor:'red'
  },
  horizontal:{    
    borderBottomWidth:2,
    borderColor:'red',
    borderRadius:20,
    marginLeft:25,
    marginRight:20,
  },      
  Contain:{
    //backgroundColor:'#FFFF99',
      height:'92%',
  },
  wrapper: {
  },
  cardViewStyle:{ 
    width:'90%',        
    height:'30%', 
    marginTop:200,
    marginLeft:20,
    justifyContent:'center'
    // alignItems:'center'
    ///marginLeft:10,
   },
  slide1: {
    flex: 1,
    //justifyContent: 'center',    
    //alignItems: 'center',
    // backgroundColor: '#9DD6EB',
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
    color: '#000000',
    fontSize:20,
    fontWeight: 'bold',
  },
  ITDesignButton:{
    width:'45%',
    padding:15,
    alignSelf:'flex-start',
    backgroundColor:'#16A085',
    alignItems:'center',  
    justifyContent:'center',
    borderBottomRightRadius:60,
    borderTopRightRadius:60,
    top:50,
    // marginTop:370,
    position:'absolute',
    
  },
  CEDesignButton:{
    width:'45%',
    padding:15,
    alignSelf:'flex-end',
    backgroundColor:'#16A085',
    alignItems:'center',
    justifyContent:'center',
    borderBottomLeftRadius:60,
    borderTopLeftRadius:60,
    top:50,
    // marginTop:370,
    position:'absolute',
    
  },
  
});
 
