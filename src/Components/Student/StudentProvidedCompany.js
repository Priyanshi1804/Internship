
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

 
export default class StudentProvidedCompany extends Component {
 
 /* constructor(props) {
    super(props);
    this.state = {
 
      show_Main_App: false
 
    };
  }
 
  on_Done_all_slides = () => {
    this.setState({ show_Main_App: true });
  };
 
  on_Skip_slides = () => {
    this.setState({ show_Main_App: true });
  };*/
  render() {
    return(
    <View styles={styles.container}>
    <HeaderArrow
        headerText = "Company Provided By Institute"
        onPressBack = {() => this.props.navigation.navigate("StudentDashboard")}
      /> 
      <ImageBackground source={require('../../img/dash.jpg')} style={{width: '100%', height: '100%',alignItems:'center'}}>
        <View style={styles.headContiner}>          
          
          <View style={styles.horizontal}>
          </View>                      
          <View style={styles.Contain}>  
           
                <View>
                  <CardView
                            cardElevation={5}
                            cardMaxElevation={5}
                            cornerRadius={5}
                            style={styles.cardViewStyle}>                          
                  </CardView>

                </View>
                
          </View>
        </View>
      </ImageBackground> 
    </View>
    )
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
  text: {
    color: '#000000',
    fontSize:5,
    // fontWeight: 'bold',
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
    width:'80%',        
    height:'30%', 
    marginTop:50,
    marginLeft:40,
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
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
  
});
 
