import React, {Component, createElement} from 'react';
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
import * as firebase from 'firebase';

const database = firebase.database();
export default class extendedVerification extends Component {

constructor(props)
{
  super(props);
  this.state = ( { 
   data:'',
   
  })}

componentDidMount() { 
 
 const id=this.props.navigation.getParam('ID');
 console.warn('id:',id)
  var dataarr=[];
  database.ref("Student/").orderByChild('Registrationdetails/StudentID').equalTo(id).on("value", function(snapshot) {
   // console.log(snapshot.val());
    snapshot.forEach(function(data) {
        // console.warn(data);
        dataarr=data
      });
   
   console.warn(dataarr[0].Registrationdetails) 

 this.setState({ 
   data:dataarr,  
 }) // 
 // console.warn(this.state.data)

}.bind(this)
)
  
 
}
  render() {
    return(
  
  <View styles={styles.container}>
    <HeaderArrow
        headerText = "Student Request"
        onPressBack = {() => this.props.navigation.navigate("TeacherDashboard")}
      /> 
      <ImageBackground source={require('../../img/dash.jpg')} style={{width: '100%', height: '100%',alignItems:'center'}}>
        <View style={styles.headContiner}>                         
          <View style={styles.Contain}>            
                <View style={{alignItems:'center',}}>
                    
                                       

                        <CardView style={styles.cardViewStyle} >
                          <TouchableOpacity>                                             
                            <Text style={styles.cardText}></Text>                              
                          
                          </TouchableOpacity>
                          </CardView>                   
                                 
              
               
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
    width:'50%',        
    height:'25%', 
    marginTop:50,
    alignItems:'center'
    // marginLeft:40,
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
  },
  cardText:{
    fontSize:20,
    fontWeight:'bold',
    
  }
  
});
