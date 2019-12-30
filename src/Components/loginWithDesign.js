import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Alert,ImageBackground,Image,TouchableOpacity } from 'react-native';
export default class Login extends Component {
constructor() {
super()
this.state = {
local_id: '',
local_password:'',
}
}

UserLoginFunction = () =>{
 
 
fetch('http://192.168.43.170/cv/login.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    id:this.state.local_id, 
    password: this.state.local_password
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
         //console.log(responseJson);
        // If server response message same as Data Matched
       if(responseJson === 'Login')
        {
             console.log("Data mathched..");
            //Then open Profile activity and send user email to profile activity.
            //this.props.navigation.navigate('Second', { Email: this.state.local_id });

        }
        else{

          Alert.alert(responseJson);
        }

      }).catch((error) => {
        //console.error(error);
      });
 
 
  }



render() {
return (
   <View style={styles.container}>
     {/* <Header
        headerText = "Registration"
        onPressBack = {() => this.props.navigation.navigate("Login")}
      /> */}
      <ImageBackground source={require('./src/img/dash.jpg')} style={{width: '100%', height: '100%',alignItems:'center'}}>

        

          <View style = {{ flex:1 ,alignItems:'center',backgroundColor:'rgba(40,40,40,0.8)'}}>
             <Image source={require('./src/img/mylogo.png')} style={styles.headerimg}/>       
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
                      source={require('./src/img/user.png')}
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
                    onChangeText={enter_id => this.setState({local_id : enter_id})}
                    onSubmitEditing={() => this.focusNextField('3')}                   
                    
                   />
                </View>
                <View style = { styles.lineView }>
                </View>
                <View style = {{ flexDirection:'row' }}>
                  <Image
                      style={ styles.imgStyle2 }
                      source={require('./src/img/psw.png')}
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
                    onChangeText={enter_password => this.setState({local_password : enter_password})}
                    value = {this.state.password}
                   />
                </View>
              </View>
              <TouchableOpacity
              activeOpacity = { 0.7 }
              style = { styles.btn }
              onPress={this.UserLoginFunction}>
                    <Image
                        style={ styles.imgStyle }
                        source={require('./src/img/checked.png')}
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
