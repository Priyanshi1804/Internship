import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Alert,ImageBackground,Image,TouchableOpacity } from 'react-native';
import Header from '../Header';

export default class TeacherhStudentStatus extends Component {



    render() {
        return (
           <View style={styles.container}>
             <Header
                headerText = "Student Status"
                onPressBack = {() => this.props.navigation.navigate("TeacherDashboard")}
              /> 
              <ImageBackground source={require('../../img/dash.jpg')} style={{width: '100%', height: '100%'}}>
              <View style = {{ flex:1 ,alignItems:'center',backgroundColor:'rgba(40,40,40,0.8)'}}>
             <Image source={require('../../img/mylogo.png')} style={styles.headerimg}/>       
         <TouchableOpacity          
          style = { styles.ITDesignButton }>
          <Text style = { styles.logintxt }>IT</Text>
          </TouchableOpacity>  
          <TouchableOpacity          
          style = { styles.CEDesignButton }>
          <Text style = { styles.logintxt }>CE</Text>
          </TouchableOpacity>     
              
          <TouchableOpacity
                onPress={() => this.props.navigation.navigate('TeacherDashboard')}
                style = { styles.CSEDesignButton}>
                <Text style = { styles.logintxt }>CSE</Text>
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
    // justifyContent:'center'
    // backgroundColor:'#CACFD2'
  },
  formView:{
    // height:140,
    backgroundColor:'white',
    width:'85%',
    alignItems:'center',
    borderBottomRightRadius:100,
    borderTopRightRadius:100,
    elevation:8,
    paddingVertical:15,
    paddingLeft:15,
    marginTop:40,

  },
  btn:{
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    height:60,
    width:60,
    borderRadius:60/2,
    backgroundColor:'#16A085',
    right:30,
    elevation:20,
    marginTop:45
  },
  imgStyle:{
    tintColor:'white' ,
    height:30,
    width:30,
    alignSelf:'center'
  },
  textInput:{
    alignSelf:'flex-start',
    flex:1,
    marginTop:5,
    marginLeft:5
  },
  imgStyle2:{
    height:30,
    width:30,
    alignSelf:'center'
  },
  lineView:{
    borderBottomWidth:1 ,
    borderBottomColor:'#aeaeae',
    width:'100%' ,
  },
  ITDesignButton:{
    width:'30%',
    padding:15,
    alignSelf:'flex-start',
    backgroundColor:'#16A085',
    alignItems:'center',
    justifyContent:'center',
    borderBottomRightRadius:60,
    borderTopRightRadius:60,
    top:50,
    marginTop:200,
    position:'absolute',
    
  },
  CEDesignButton:{
    width:'30%',
    padding:15,
    alignSelf:'flex-start',
    backgroundColor:'#16A085',
    alignItems:'center',
    justifyContent:'center',
    borderBottomRightRadius:60,
    borderTopRightRadius:60,
    top:50,
    marginTop:295,
    position:'absolute',
    
  },


  CSEDesignButton:{
    width:'30%',
    padding:15,
    alignSelf:'flex-start',
    backgroundColor:'#16A085',
    //alignItems:'center',
    //justifyContent:'center',
    borderBottomRightRadius:60,
    borderTopRightRadius:60,
    top:50,
    marginTop:385,
    position:'absolute',
    
  },

  logintxt:{
    fontSize:20,
    color:'white',
    textAlign:'center',
    fontWeight: 'bold',
  }, 
   registertext:{
    fontSize:17,
    color:'white',
    //textAlign:'center',
    //fontWeight: 'bold',
  }, 
  headerimg:{
    alignSelf:'center',
    padding:10,
    //marginBottom:50,
    //fontSize:30
  }
});

                