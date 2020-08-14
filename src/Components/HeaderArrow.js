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
  FlatList,
  Alert  
} from 'react-native'
import * as firebase from 'firebase';
import { StackActions, NavigationActions,withNavigation } from 'react-navigation';  
import { useNavigation } from '@react-navigation/native';


// var {nav}=this.props;
export default class HeaderArrow extends Component {

  constructor(props) {

    super(props);
    
    this.signOut = this.signOut.bind(this);
  }

  handleLogout=()=>{
    // console.warn('myNavigation:',myNavigation);
    Alert.alert(
        'Alert',
        'Do You Want to close?',
        [

          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => this.signOut()},
        ],
        {cancelable: false},
      );
  }

signOut=()=>{
    // const navigation = useNavigation();
    console.warn('here..');
    firebase.auth().signOut(); 
    
      const resetAction = StackActions.reset({
         index: 0,
         actions: [NavigationActions.navigate({ routeName: 'Login' })]
       });
       this.props.myNavigation.dispatch(resetAction);

  }


  render() {
      // const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style = { styles.headerView }>
         <TouchableOpacity
          style = { styles.imgView }     
          activeOpacity = { 0.9 }
           onPress={this.props.onPressBack}
        >
        <Image
                source={require("../img/left1.png")}
                style={styles.imgStyle}
        />
        </TouchableOpacity>
        <Text style = { styles.txt }>{this.props.headerText}</Text> 

        <TouchableOpacity          
          style = {{height:25,width:25,tintColor:'white', marginLeft:120  }}
          activeOpacity = { 0.9 } 
          onPress={this.props.onPressClose}          
          >
          
            <Image
             source={require("../img/signout.png")}
             style={styles.imgStyle}
           />
          
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  headerView:{
    height:55,
    width:'100%',
    // backgroundColor:'#3CBC74',
    backgroundColor:'#16A085',
    alignItems:'center',
    //ustifyContent:'center',
    flexDirection:'row'
  },
  txt:{
    textAlign:'center',
    fontSize:20,
    color:'white',
    marginLeft:120,
  },
  imgStyle:{
    height:25,
    width:25,
    tintColor:'white',
    // marginLeft:50    
  },

 
  imgView:{
    height:55  , 
    justifyContent:'center',
    // margin:20  
  }
});




