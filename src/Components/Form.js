
import React, { Component } from 'react';
import { StyleSheet, View, Button,ScrollView,ImageBackground,Image} from 'react-native';
import t from 'tcomb-form-native';
import Header2 from './Header2';



const Form = t.form.Form;
const Age = t.refinement(t.Number, function(n) {
  return n >= 18;
});
Age.getValidationErrorMessage = function() {
  return 'bad age';
};
t.Number.getValidationErrorMessage = function(value) {
  if (!value) return 'empty number';
  else if (!Number.isInteger(value)) return 'bad number';
};

const User = t.struct({
  cname: t.String,
  cweb: t.String,
  cadd:t.String,
  noe:t.Number,
  nob:t.String,
  hof:t.String,
  ctname:t.String,
  ctphn:t.Number,
  cemail:t.String,
  hname:t.String,
  hphn:t.Number,
  hemail:t.String,
  tec:t.String,
  cp:t.String,
  clic:t.String,
  how:t.String,
  reason:t.String,  
  approver:t.String,
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
          'tec','cp','clic','how','reason','age','terms'],
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
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
  };
  

  render() {
    return (
      <View style={styles.container}> 
       <Header2
        headerText = "CP FORM"         
      />  
       <ImageBackground source={require('../img/dash.jpg')} style={{width: '100%', height: '100%'}}>

         <View style = {{ flex:1 ,backgroundColor:'rgba(40,40,40,0.8)',alignItems:'center'}}>
            <ScrollView>
           
              <Form ref={c => (this._form = c)} type={User} options={options} />
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
