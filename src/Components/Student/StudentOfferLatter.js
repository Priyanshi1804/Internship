import React, { Component } from 'react';
import { View, Text, Image, Button,ImageBackground ,StyleSheet,TouchableOpacity,Alert} from 'react-native'
import HeaderArrow from '../HeaderArrow';
import DocumentPicker from 'react-native-document-picker';
import * as firebase from 'firebase';
import RNFetchBlob from 'react-native-fetch-blob'



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


  handleUpload =(mime = 'application/pdf')=>{
    
    const Blob = RNFetchBlob.polyfill.Blob
    const fs = RNFetchBlob.fs
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
    window.Blob = Blob

    const uploadUri =this.state.singleFile.uri
    let uploadBlob = null

    const pdfRef = firebase.storage().ref('UsersList')
      fs.readFile(uploadUri, 'base64')
        .then((data) => {
          return Blob.build(data, { type: `${mime};BASE64` })
        })
        .then((blob) => {
          uploadBlob = blob
          return pdfRef.put(blob, { contentType: mime })
        })
        .then(() => {
          uploadBlob.close()
          return pdfRef.getDownloadURL()
        })
        .then((url) => {
          resolve(url)
        })
        /*.catch((error) => {
          reject(error)
      })*/
      Alert.alert("sucessful..")

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

         <TouchableOpacity  style = { styles.signup }  
                            onPress={()=> this.handleUpload}> 
                         
            <Text style = { styles.textStyle}>Upload</Text>
          </TouchableOpacity>
          
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
    },
    signup:{
    height:'7%',
    width:'100%',
    backgroundColor:'rgba(22,160,133,0.8)',
    borderRadius:10,
    padding:10,
    // justifyContent:'center' ,
    alignItems:'center',
    marginLeft:'35%',
    marginTop:20
  }, 

})