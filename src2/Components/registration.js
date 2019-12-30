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
UserRegistrationFunction = () =>{
		 console.log("In the function...");
		fetch('http://192.168.43.170/cv/registration.php', {
		method: 'POST',
		headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		},
		body: JSON.stringify({
		id: this.state.local_id,
		password: this.state.local_password,
		})
		}).then(console.log("After Connection...")).then((response) => response.json())
		.then((responseJson) => {
		// Showing response message coming from server after inserting records.
		Alert.alert(responseJson);
		}).catch((error) => {
		console.error(error);
		});
}
render() {
return (
<View style={styles.MainContainer}>
<Text style= {styles.title}>User Registration Form</Text>

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
<Button title="Click Here To Register" onPress={this.UserRegistrationFunction} color="#2196F3" />
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