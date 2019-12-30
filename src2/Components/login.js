import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Alert } from 'react-native';
export default class Project extends Component {
constructor() {
super()
this.state = {
local_id: '',
local_password:'',
}
}

UserLoginFunction = () =>{
  console.log("IN the function");
 /* const { UserId }  = this.state.local_id ;
  const { UserPassword }  = this.state.local_password ;*/
  console.log(this.state.local_id);
 
 
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
<View style={styles.MainContainer}>
<Text style= {styles.title}>User Login Form</Text>

<TextInput
placeholder="Enter id:"
onChangeText={enter_id => this.setState({local_id : enter_id})}
underlineColorAndroid='transparent'
style={styles.TextInputStyleClass}
/>
<TextInput
placeholder="Enter User Password"
onChangeText={enter_password => this.setState({local_password : enter_password})}
underlineColorAndroid='transparent'
style={styles.TextInputStyleClass}
secureTextEntry={true}
/>
<Button title="Click Here To Login" onPress={this.UserLoginFunction} color="#2196F3" />
</View>
);
}
}
const styles = StyleSheet.create({
MainContainer :{
justifyContent: 'center',
flex:1,
margin: 10
},
TextInputStyleClass: {
textAlign: 'center',
marginBottom: 7,
height: 40,
borderWidth: 1,
borderColor: '#2196F3',
borderRadius: 5 ,
},
title:{
fontSize: 22, 
color: "#009688", 
textAlign: 'center', 
marginBottom: 15
}
});