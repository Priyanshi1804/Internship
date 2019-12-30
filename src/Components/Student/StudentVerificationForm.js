import React, { Component } from 'react';
import { StyleSheet, View, Button,ScrollView,ImageBackground,Image,Alert,TouchableOpacity,Text} from 'react-native';
import t from 'tcomb-form-native';
import HeaderArrow from '../HeaderArrow';


const Name = t.subtype(t.Str, (cname) => {
  const reg = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
  return reg.test(cname);
});

const Company_Website = t.subtype(t.Str, (cweb) => {
  const reg =/^(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
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
    },
    cweb: {
      error: 'Not Valid Website(eg."www.sample.com")',
      label:'Company Website',
    },
    cadd: {
      error: 'Required Field',
      label:'Company Address',
    },    
    noe: {
      error: 'Only Numbers allowed',
      label:'Number Of Employes',
      keyboardType:'numeric',
    },
    nob: {
      error: 'Only Numbers allowed',
      label:'Number Of Branches ',
      keyboardType:'numeric',
    },
    hof: {
      error: 'Required Field',
      label:'Head Office Address',
    },  
    ctname: {
      error: 'Required Field',
      label:'Contact Person Name',
    },
    ctphn: {
      error: 'Not Valid(eg.9106296670)',
      label:'Contact Person Phone Number',
      keyboardType:'phone-pad', 

    },
    cemail: {
      error: 'Not Valid(eg.abc@gmail.com)',
      label:'Contact Person Email Id',
      keyboardType:'email-address',
      //placeholder:'abc@gmail.com',
    },    
    hname: {
      error: 'Required Field',
      label:'HR Name',
    },
    hphn: {
      error: 'Not Valid(eg.9106296670)',
      label:'HR Phone Number ',
      keyboardType:'phone-pad',
    },
    hemail: {
      error: 'Not Valid(eg.17dit052@charusat.edu.in)',
      label:'HR Email Id',
      keyboardType:'email-address',
    },  
    tec: {
      error: 'Only Characters allowed',
      label:'Technology:',
    },
    cp: {
      error: 'Only Characters allowed',
      label:'Current Projects',

    },
    clic: {
      error: 'Only Numbers allowed',
      label:'Clients Of Company',
    },
    how: {
      error: 'Only Characters allowed',
      label:'How You Get This Company?',
    },
    reason: {
      error: 'Only Characters allowed`',
      label:'Reason To Choose this company',
    },  
   // approver: {
   //    error: 'empty',
   //    label:'Approved By:',
   //  },
  },
  stylesheet: formStyles,
};

export default class StudentVerificationForm extends Component {

handleSubmit = () => {
    console.log("In the handlesubmit...");

    const value = this._form.getValue();
    console.log("value:",value);   

    if(value!=null){ 


   fetch('http://192.168.43.170/cv/newform.php', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
body: JSON.stringify({
jcname: value.cname,
jcweb: value.cweb,
jcadd:value.cadd,
jne:value.noe,
jnb:value.nob,
jhad:value.hof,
jcpn:value.ctname,
jcpp:value.ctphn,
jcpe:value.cemail,
jhn:value.hname,
jhp:value.hphn,
jhe:value.hemail,
jtech:value.tec,
jcp:value.cp,
jcc:value.clic,
jhow:value.how,
jrsn:value.reason,

})
}).then(console.log(JSON.stringify({
jcname: value.cname,
jcweb: value.cweb,
jcadd:value.cadd,
jne:value.noe,
jnb:value.nob,
jhad:value.hof,
jcpn:value.ctname,
jcpp:value.ctphn,
jcpe:value.cemail,
jhn:value.hname,
jhp:value.hphn,
})))
    .then((response) => response.json())
.then((responseJson) => {
// Showing response message coming from server after inserting records.
Alert.alert(responseJson);
}).catch((error) => {
console.error(error);
});

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


