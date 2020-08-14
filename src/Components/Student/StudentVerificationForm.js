import React, { Component } from 'react';
import { StyleSheet, View, Button,ScrollView,ImageBackground,Image,Alert,TouchableOpacity,Text} from 'react-native';
import t from 'tcomb-form-native';
import HeaderArrow from '../HeaderArrow';
import * as firebase from 'firebase';


const Name = t.subtype(t.Str, (cname) => {
  const reg = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
  return reg.test(cname);
});


const Company_Website = t.subtype(t.Str, (cweb) => {
  const reg =/^[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
  return reg.test(cweb);
});

const Numbers = t.subtype(t.Str, (number) => {
  const reg = /^[0-9]*$/;
  return reg.test(number);
});

const Phone = t.subtype(t.Str, (phn) => {
  const reg =/^[6-9]\d{9}$/;
  return reg.test(phn);
});

const Email = t.subtype(t.Str, (email) => {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
});



const Form = t.form.Form;

const User = t.struct({
  cname:Name,
  cweb: Company_Website,
  cadd:t.String,
  noe:Numbers,
  nob:Numbers,
  hof:t.String,
  ctname:t.String,
  ctphn:Phone,
  cemail:Email,
  hname:Name,
  hphn:Phone,
  hemail:Email,
  tec:Name,
  cp:Name,
  clic:Numbers,
  how:Name,
  reason:Name,  
  // approver:t.maybe(t.String),
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10,
    },
  },
  controlLabel: {
    normal: {
      color: 'white',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600',
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600',
    },
  },
};
const options = {
  order: ['cname','cweb','cadd','noe','nob','hof','ctname','ctphn','cemail','hname','hphn','hemail',
          'tec','cp','clic','how','reason'],
  fields: {
    cname: {
      error: 'Only Characters allowed',
      label:'Company Name',   
      ref:'1',
     
      },
    cweb: {
      error: 'Not Valid Website(eg."sample.com")',
      label:'Company Website',
      ref:'2',
      
    },
    cadd: {
      error: 'Required Field',
      label:'Company Address',
      ref:'3',
    },    
    noe: {
      error: 'Only Numbers allowed',
      label:'Number Of Employes',
      keyboardType:'numeric',
      ref:'4',
    },
    nob: {
      error: 'Only Numbers allowed',
      label:'Number Of Branches ',
      keyboardType:'numeric',
      ref:'5',
    },
    hof: {
      error: 'Required Field',
      label:'Head Office Address',
      ref:'6',
    },  
    ctname: {
      error: 'Required Field',
      label:'Contact Person Name',
      ref:'7',
    },
    ctphn: {
      error: 'Not Valid(eg.9106296670)',
      label:'Contact Person Phone Number',
      keyboardType:'phone-pad', 
      ref:'8'

    },
    cemail: {
      error: 'Not Valid(eg.abc@gmail.com)',
      label:'Contact Person Email Id',
      keyboardType:'email-address',
      ref:'9',
      //placeholder:'abc@gmail.com',
    },    
    hname: {
      error: 'Required Field',
      label:'HR Name',
      ref:'10',
    },
    hphn: {
      error: 'Not Valid(eg.9106296670)',
      label:'HR Phone Number ',
      keyboardType:'phone-pad',
      ref:'11',
    },
    hemail: {
      error: 'Not Valid(eg.17dit052@charusat.edu.in)',
      label:'HR Email Id',
      keyboardType:'email-address',
      ref:'12',
    },  
    tec: {
      error: 'Only Characters allowed',
      label:'Technology:',
      ref:'13',
    },
    cp: {
      error: 'Only Characters allowed',
      label:'Current Projects',
      ref:'14',

    },
    clic: {
      error: 'Only Numbers allowed',
      label:'Clients Of Company',
      keyboardType:'numeric',
      ref:'15',
    },
    how: {
      error: 'Only Characters allowed',
      label:'How You Get This Company?',
      ref:'16',
    },
    reason: {
      error: 'Only Characters allowed`',
      label:'Reason To Choose this company',
      ref:'17',
    },  
   // approver: {
   //    error: 'empty',
   //    label:'Approved By:',
   //  },
  },
  stylesheet: formStyles,
};

export default class StudentVerificationForm extends Component {

  



  focusNextField(nextField) {
    this.refs[nextField].focus();
  }


  handleSubmit=()=>{
    console.log("In the handlesubmit...");
    const { navigation } = this.props;  
    
    const studentid = navigation.getParam('studentid', 'Nullid');  
    console.log(studentid)
 
    const formdetails = this._form.getValue();  
    console.log("value:",formdetails);  
   


    if(formdetails!=null){ 
      
      {
       
        firebase.database().ref('Student/'+ firebase.auth().currentUser.uid).child('formdetails').set(formdetails
          
          
          ).then((data)=>{
            //success callback
            console.log('data ', data)
        }).catch((error)=>{
            //error callback
            console.log('error ', error)
        })
        this.props.navigation.navigate('StudentDashboard')
    }

}
    

  };

render() {
    return (
      <View style={styles.container}>
       <HeaderArrow
        headerText = "VerificationForm"
        onPressBack = {() => this.props.navigation.navigate("StudentDashboard")}
      /> 
       <ImageBackground source={require('../../img/dash.jpg')} style={{width: '100%', height: '100%'}}>

         <View style = {{ flex:1 ,backgroundColor:'rgba(40,40,40,0.8)',alignItems:'center'}}>
            <ScrollView>
           
              <Form 
                  ref={c => (this._form = c)} 
                  type={User} 
                  options={options}
                  // onChangeText={(value) => this.setState({value})}
                  />
             <TouchableOpacity  style = { styles.cardView }  
                            onPress={() => {this.handleSubmit()}}>        
                         
            <Text style = { styles.cardText}>Submit</Text>
          </TouchableOpacity>
           
        </ScrollView>

         </View>
     
        </ImageBackground>
         
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    marginTop: 22,
    marginBottom:0,   
    backgroundColor: '#16A085',
  },
  btn:{
    width:30,
    height:'100%',
  },
  cardText:{
    fontSize:25,
    color:'white',   
    fontWeight:'bold',
    // textAlign:'center'
  },
  cardView:{
    height:'3%',
    width:'60%',
    backgroundColor:'rgba(22,160,133,0.8)',
    borderRadius:10,
    padding:10,
    // justifyContent:'center' ,
    alignItems:'center',
    marginLeft:50,
    marginBottom:30
  }, 
});