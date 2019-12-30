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
  FlatList  ,
  ScrollView ,
  Alert
} from 'react-native';
import CardView from 'react-native-cardview' ;
import HeaderArrow from '../HeaderArrow';
export default class TeacheRequestForm extends Component {

  state={
    data:[]
  }


  fetchData= async()=>{
    const response = await fetch('http://192.168.43.170:2773/newform');
    const datas = await response.json();
    this.setState({data:datas});    
  }
componentDidMount(){
  this.fetchData();
  console.log("Data:",this.state.data);
}


approver = () => {
 this.props.navigation.navigate("TeacherVerificationRequest");
    /*// console.log("In the handlesubmit...");

    const value = this.state.data;
    console.log(value)
    // console.log("value:",data);   

    


   fetch('http://192.168.43.170/cv/Accepted.php', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
body: JSON.stringify({
jcname: value.Company_name,
jcadd:value.Company_address,
jcpp:value.Contact_person_phone_num,
jtech:value.Technology,
})
}).then(console.log(
   JSON.stringify({
jcname: value.Company_name,
jcadd:value.Company_address,
jcpp:value.Contact_person_phone_num,
jtech:value.Technology,
})
  ))
    .then((response) => response.json())
.then((responseJson) => {
// Showing response message coming from server after inserting records.
Alert.alert(responseJson);
}).catch((error) => {
console.error(error);
});    
*/
  };

  render() {
    return(
       
    

  <View styles={styles.container}>
    <HeaderArrow
        headerText = "Student Request form"
        onPressBack = {() => this.props.navigation.navigate("TeacherDashboard")}
      /> 
      <ImageBackground source={require('../../img/dash.jpg')} style={{width: '100%', height: '100%',alignItems:'center'}}>
        <View style={styles.headContiner}>      
          
                           
          <View style={styles.Contain}>  
                    
                    
                    <View style={styles.slide1}>
               

                {
                 this.state.data.map((item, key) => (
                  <CardView 
                  
                            cardElevation={5}
                            cardMaxElevation={5}
                            cornerRadius={6}
                            style={styles.cardViewStyle}>
                     <Text style={styles.text} >Company Name :   {item.Company_name} </Text> 
                     <Text  style={styles.text} >Company Website : {item.Company_website} </Text>    
                     <Text style={styles.text}> Number of employess : {item.Comany_address}</Text>
                     <Text style={styles.text}> Number of branches: {item.Number_of_employess}</Text>
                     <Text style={styles.text}>Head office address: {item.Head_office_address}</Text>
                     <Text style={styles.text}>Contact person name: {item.Contact_person_name}</Text>
                     <Text style={styles.text}>Contact person phone num: {item.Contact_person_num}</Text>
                     <Text style={styles.text}>Contact person email id:: {item.Contact_person_email_id}</Text>
                     <Text style={styles.text}> Hr_name:{item.Hr_name} </Text> 
                     <Text style={styles.text}> Hr_phone_number:{item. Hr_phone_number} </Text> 
                     <Text style={styles.text}>Hr_email_id:{item.Hr_email_id} </Text>
                     <Text style={styles.text}>Technology: :{item.Technology} </Text> 
                     <Text style={styles.text}>Current_project:{item.Current_project} </Text> 
                     <Text style={styles.text}>Clients_of_Company:{item.Clients_of_Company} </Text> 
                     <Text style={styles.text}>How :{item.How} </Text> 
                     <Text style={styles.text}>Reason:{item.Reason} </Text> 

                     <TouchableOpacity    onPress={this.approver}       
                         style = { styles.ITDesignButton }>
                         <Text style = { styles.logintxt }>APPROVE</Text>
                         </TouchableOpacity>  
                         <TouchableOpacity onPress={this.approver}         
                              style = { styles.CEDesignButton }>
                            <Text style = { styles.logintxt }>REJECT</Text>

                      </TouchableOpacity>                       
                  </CardView> 
                ))}    
                 

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
    height:500, 
    marginTop:50,
    marginLeft:40,
    ///marginLeft:10,
   },
   logintxt:{
    fontSize:20,
    color:'white',
    textAlign:'center',
    fontWeight: 'bold',
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
    padding:2,
  }
  ,
  ITDesignButton:{
    width:'45%',
    padding:15,
    alignSelf:'flex-start',
    backgroundColor:'#16A085',
    alignItems:'center',
    justifyContent:'center',
    borderBottomRightRadius:60,
    borderTopRightRadius:60,
    top:50,
    marginTop:370,
    position:'absolute',
    
  },
  CEDesignButton:{
    width:'45%',
    padding:15,
    alignSelf:'flex-end',
    backgroundColor:'#16A085',
    alignItems:'center',
    justifyContent:'center',
    borderBottomLeftRadius:60,
    borderTopLeftRadius:60,
    top:50,
    marginTop:370,
    position:'absolute',
    
  },
});
 

