import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  FlatList ,
  ScrollView
} from 'react-native';
import CardView from 'react-native-cardview' ;
import HeaderArrow from '../HeaderArrow';
export default class TeacherVerificationRequest extends Component {
  
  render() {
    return(
       
    

  <View styles={styles.container}>
    <HeaderArrow
        headerText = "Student Request"
        onPressBack = {() => this.props.navigation.navigate("StudentDashboard")}
      /> 
      <ImageBackground source={require('../../img/dash.jpg')} style={{width: '100%', height: '100%',alignItems:'center'}}>
        <View style={styles.headContiner}>       
          
                               
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
  Contain:{
    //backgroundColor:'#FFFF99',
      height:'30%',
  }, 
  cardViewStyle:{ 
    width:'80%',        
    height:'50%', 
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
  text: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
  }
  
});
 
