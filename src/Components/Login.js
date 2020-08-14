import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Alert,ImageBackground,Image,TouchableOpacity} from 'react-native';

import Header from './Header';
import * as firebase from 'firebase';

export default class Login extends Component {


constructor(props) {
super(props);
console.ignoredYellowBox = [
  'Setting a timer'
 ];
this.state =( {
email:'',
password:' '
})
}

focusNextField(nextField) {
      this.refs[nextField].focus();
    }
CheckTextInputIsEmptyOrNot() {
     // const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     const { email }  = this.state;
     let isValid = true;

      // if(mobile ==='' && isValid){
      //   isValid = false;
      //   Alert.alert('Alert','Please enter fullName' );
      // } else if (mobile.length !== 10 && isValid){
      //   isValid = false;
      //   Alert.alert('Alert','Please enter valid mobile number' );
      // }

      if(email === '')
      {
        isValid = false;
        Alert.alert('Alert','Please enter email' );
      }
      /*else if (reg.test(email) === false) {
        isValid = false;
        Alert.alert('Alert','Please enter valid email' );
      }*/
      if(isValid) {
        this.handleLogin();
      }
  }

  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() =>  this.props.navigation.replace('StudentDashboard'))
      .catch(error => Alert.alert('Oops', 'Invalid credentials'))
  }


/*loginUser = (email,password) => {

  
  try{
    var user = firebase.auth().currentUser;    
    console.warn("user:",user)

if (user != null) { 
  if(user.emailVerified==true){
    // alert("sucess..")
     this.props.navigation.navigate('StudentDashboard')
    .catch(error => Alert.alert("ERROR",error))
  }
  else{
   alert('First verify mail..')
  }
  
  }
 }
  
  catch(error)
  {
    console.warn(error)
    
  }
}
*/
render() {
return (
   <View style={styles.container}>
     <Header
        headerText = "Login"
        onPressBack = {() => this.props.navigation.navigate("Login")}
      /> 
      
      <ImageBackground source={require('../img/dash.jpg')} style={{width: '100%', height: '100%',alignItems:'center'}}>

        

          <View style = {{ flex:1 ,alignItems:'center',backgroundColor:'rgba(40,40,40,0.8)'}}>
             <Image source={require('../img/mylogo.png')} style={styles.headerimg}/>       
         <TouchableOpacity          
          style = { styles.loginDesignButton }>
          <Text style = { styles.logintxt }>LOGIN</Text>
          </TouchableOpacity>     
            <View style = {{ flexDirection:'row',marginTop:100}}>
              <View style = { styles.formView }>
               
                <View>
                </View>
                <View style = {{ flexDirection:'row' }}>
                  <Image
                      style={ styles.imgStyle2 }
                      source={require('../img/user.png')}
                  />
                  <TextInput
                    ref='2'
                    returnKeyType='next'
                    style={styles.textInput}
                    placeholder="Enter UserName"
                    placeholderTextColor = "#5D6D7E"
                    placeholderTextSize="12"
                    keyboardType="default"                    
                    // selectionColor={'white'}
                    onChangeText={(email) => this.setState({email})}
                    onSubmitEditing={() => this.focusNextField('3')}                   
                    
                   />
                </View>
                <View style = { styles.lineView }>
                </View>
                <View style = {{ flexDirection:'row' }}>
                  <Image
                      style={ styles.imgStyle2 }
                      source={require('../img/psw.png')}
                  />
                  <TextInput
                    ref='3'
                    returnKeyType='next'
                    style={styles.textInput}
                    placeholder="Enter Password"
                    placeholderTextColor = "#5D6D7E"
                    placeholderTextSize="12"
                    keyboardType="default"
                    secureTextEntry={true}                    
                    onChangeText={(password)=>this.setState({password})}
                   
                   />
                </View>
              </View>
              <TouchableOpacity
              activeOpacity = { 0.7 }
              style = { styles.btn }
              onPress={()=> this.CheckTextInputIsEmptyOrNot()}>
                    <Image
                        style={ styles.imgStyle }
                        source={require('../img/checked.png')}
                    />
              </TouchableOpacity>
            </View>   
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Registration')}
                style = { styles.RegisterButton }>
                <Text style = { styles.registertext }>New User ? Registration</Text>
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
  loginDesignButton:{
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
  RegisterButton:{
    width:'60%',
    padding:15,
    alignSelf:'flex-start',
    backgroundColor:'#16A085',
    //alignItems:'center',
    //justifyContent:'center',
    borderBottomRightRadius:60,
    borderTopRightRadius:60,
    top:50,
    marginTop:465,
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