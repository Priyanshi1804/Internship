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
//const student = database.child('student');



export default class TeacherVerificationRequest extends Component {

constructor(props)
{
  super(props);
  this.state = ( {    
    stid:[],
    userName:[],
  })}

componentDidMount() {  
 
 let subdata=[]
  database.ref("Student/").on("value", async function(snapshot) {  
 
 let snap = JSON.stringify(snapshot)
 let data = JSON.parse(snap)
 // console.log('data:',data)

  
  let  sidarr=[]
   
  let finalids=[]
  let finalnames=[]
  
  
  for(const key in data){
    var child=[];
    if(data.hasOwnProperty(key))
    {
      
      element=data[key];
      // console.log(element.Registrationdetails); 
      // const detailkey=Object.keys(element); 
      // console.log(detailkey);    
      sidarr.push(element.Registrationdetails);   
    }
  }
  console.log('sidarr:',sidarr.length)

  
 
   for(let i=0;i<sidarr.length;i++){
    finalids.push(sidarr[i].StudentID)
    finalnames.push(sidarr[i].Username)

   }
   console.log('finalids',finalids)
   console.log('finalnames',finalnames)
  
 


 this.setState({
  stid:finalids,
  userName:finalnames,  
 });



  // console.warn(this.state.stid);
  // console.warn(this.state.userName)  
}.bind(this)
);
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
                  {
                  this.state.stid.map((item, key) => (  
                      // var second=this.state.userName[key]                
                     
                        <CardView style={styles.cardViewStyle}>
                         <TouchableOpacity onPress={()=>this.props.navigation.navigate('extendedVerification',{ID:item})}>                                                                
                            <Text style={styles.cardText}>ID:  {item}</Text>        
                            <Text style={styles.cardText}>NAME:  {this.state.userName[key]}</Text>    
                        </TouchableOpacity>                    
                         
                        </CardView>
                                         
                   ))
                  }                
             
               
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
    width:'40%',        
    height:'40%',
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
    fontWeight:'bold'  
  }
 
});