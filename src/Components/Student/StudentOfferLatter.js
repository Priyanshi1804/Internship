import React, { Component } from 'react';
import { View, Text, Image, Button,ImageBackground ,StyleSheet,TouchableOpacity,Alert} from 'react-native'
import HeaderArrow from '../HeaderArrow';
import DocumentPicker from 'react-native-document-picker';

export default class StudentOfferLatter extends React.Component {
  constructor(props) {
    super(props);
    //Initialization of the state to store the selected file related attribute
    this.state = {
      singleFile: '',
     
    };
  }
/*
  handleChoosePhoto = () => {
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {  
        this.setState({ photo: response })
      }
    })
  }*/
  async selectOneFile() {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });

      //Printing the log realted to the file
      console.log('res',res);
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      this.setState({ singleFile: res });
     
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        // alert('Canceled from single doc picker');
      } else{
        //For Unknown Error
        // alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
      
    }
    this.handleUpload();
  };


  handleUpload =()=>{
    
    console.log("In the handleUpload function..");    

    fetch('http://192.168.43.170/cv/UploadImage.php', {
          method: 'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          },
body: JSON.stringify({
 file:this.state.singleFile
 // name:this.state.singleFile.name,
})
}).then(console.log(

JSON.stringify({
 file:this.state.singleFile
 // name:this.state.singleFile.name,
})




  )) .then((response) => response.json())
.then((responseJson) => {
// Showing response message coming from server after inserting records.
Alert.alert(responseJson);
}).catch((error) => {
console.error(error);
});

  }


 
  render() {
    return (
      <View style={styles.Container}>
      <HeaderArrow
        headerText = "OfferLatter"
        onPressBack = {() => this.props.navigation.navigate("StudentDashboard")}
      />
      <ImageBackground source={require('../../img/dash.jpg')} style={{width: '100%', height: '100%',alignItems:'center'}}>
        <View style={styles.headContiner}> 
           <TouchableOpacity style={styles.UploadImage} onPress={this.selectOneFile.bind(this)} >
             <Text style={styles.taptxt}>Tap Here! </Text>
             <Text style={styles.taptxt}>To Select PDF </Text>
           </TouchableOpacity>
           <Text style={styles.filetext}>
          {this.state.singleFile.name ? this.state.singleFile.name : ''}
        </Text>
        </View>
      </ImageBackground>
      </View>
    )
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
  UploadImage:{
    backgroundColor:'rgba(192,192,192,0.6)',
    height:'10%',
    width:'50%',
    marginTop:250,
    marginLeft:100,
    borderColor:'#000000',
    borderStyle: 'dashed',
    borderWidth:4,
    borderRadius:1,  
    alignItems:'center',  
    justifyContent:'center'
  },
  taptxt:{
    fontSize:20,
    color:'#000000',
    
  },
    filetext:
    {
        fontSize:20,
        color:'#ffffff',
        textAlign:'center',
        marginTop:50
    }

})