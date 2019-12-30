
import React, { Component } from 'react';
import { StyleSheet, View, Button,ScrollView,ImageBackground,Image} from 'react-native';
import t from 'tcomb-form-native';
//import Header2 from './Header2';



const Form = t.form.Form;

const User = t.struct({
  cname: t.maybe(t.String),
  cweb: t.maybe(t.String),
  cadd:t.maybe(t.String),
  noe:t.maybe(t.Integer),
  nob:t.maybe(t.String),
  hof:t.maybe(t.String),
  ctname:t.maybe(t.String),
  ctphn:t.maybe(t.Number),
  cemail:t.maybe(t.String),
  hname:t.maybe(t.String),
  hphn:t.maybe(t.String),
  hemail:t.maybe(t.String),
  tec:t.maybe(t.String),
  cp:t.maybe(t.String),
  clic:t.maybe(t.String),
  how:t.maybe(t.String),
  reason:t.maybe(t.String),  
  approver:t.maybe(t.String),
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
      error: 'email is empty',
      label:'Company Name',
    },
    cweb: {
      error: 'Company WebSite is empty',
      label:'Company Website',
    },
    cadd: {
      error: 'Company Address is empty?',
      label:'Company Address',
    },    
    noe: {
      error: 'Number Of Emploes is empty',
      label:'Number Of Employes',
    },
    nob: {
      error: 'Number Of Branches empty',
      label:'Number Of Branches ',
    },
    hof: {
      error: 'Head Office empty is empty',
      label:'Head Office Address',
    },  
    ctname: {
      error: 'Contact Person Name is empty',
      label:'Contact Person Name',
    },
    ctphn: {
      error: 'Contact Phone Number is empty',
      label:'Contact Person Phone Number',
    },
    cemail: {
      error: 'Contact email is empty',
      label:'Contact Person Email Id',
    },    
    hname: {
      error: 'HR name is empty',
      label:'HR Name',
    },
    hphn: {
      error: 'HR Phone Number is empty',
      label:'HR Phone Number ',
    },
    hemail: {
      error: 'HR email is empty',
      label:'HR Email Id',
    },  
    tec: {
      error: 'Technology is empty',
      label:'Technology:',
    },
    cp: {
      error: 'Current Projects is empty',
      label:'Current Projects',
    },
    clic: {
      error: 'Clients of Company is empty',
      label:'Clients Of Company',
    },
    how: {
      error: 'empty',
      label:'How You Get This Company?',
    },
    reason: {
      error: 'empty',
      label:'Reason To Choose this company',
    },  
   approver: {
      error: 'empty',
      label:'Approved By:',
    },
  },
  stylesheet: formStyles,
};

export default class App extends Component {
 
   constructor(props) {
    super(props);
    this.state={
       value:{
                cname:'',
                cweb:'',
                cadd:'',
                noe:'',
                nob:'',
                hof:'',
                ctname:'',
                ctphn:'',
                cemail:'',
                hname:'',
                hphn:'',
                hemail:'',
                tec:'',
                cp:'',
                clic:'',
                how:'',
                reason:'',  
                approver:'',
              },
            };

        this.handleChange.bind(this);
   }

   handleChange(value){
    this.setState({value});
   }
  

  handleSubmit = () => {
    //console.log("In the handlesubmit...");

    const value = this._form.getValue();
    //console.log(value.cname);
    
    fetch('http://192.168.43.170/cv/form.php', {
     method: 'POST',
     headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
},
body: JSON.stringify({
                  Company_name: value.cname,
                  Company_website: value.cweb,
                  Company_address: value.cadd,
                  Number_of_employess: value.noe,
                  Number_of_branches: value.nob,
                  Head_office_address: value.hof,
                  Contact_person_name: value.ctname,
                  Contact_person_phone_num: value.ctphn,
                  Contact_person_email_id: value.ceamil,
                  Hr_name: value.hname,
                  Hr_phone_number: value.hphn,
                  Hr_email_id: value.hemail,
                  Technology: value.tec,
                  Current_project: value.cp,
                  Clients_of_Company: value.clic,
                  How: value.how,
                  Reason: value.reason,
                  Approver: value.approver,
})
}).then((response) => response.json())
.then((responseJson) => {
// Showing response message coming from server after inserting records.
Alert.alert(responseJson);
}).catch((error) => {
console.error(error);
});   

    
  };
 

  render() {
    return (
      <View style={styles.container}>
       
       <ImageBackground source={require('./src/img/dash.jpg')} style={{width: '100%', height: '100%'}}>

         <View style = {{ flex:1 ,backgroundColor:'rgba(40,40,40,0.8)',alignItems:'center'}}>
            <ScrollView>
           
              <Form 
                  ref={c => (this._form = c)} 
                  type={User} 
                  options={options}
                  onChangeText={(value) => this.setState({value})}
                  value={this.state.value}/>
              <Button title="Submit" onPress={this.handleSubmit} />
           
        </ScrollView>

         </View>
     
        </ImageBackground>
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 22,
    marginBottom:50,
   
    backgroundColor: '#16A085',
  },
});

