import React from 'react'
import { View, Text, Image, Button,ImageBackground ,StyleSheet,TouchableOpacity} from 'react-native'
//import DashedBorder from 'react-native-dashed-border'
// import ImagePicker from 'react-native-image-picker'

export default class OfferLatter extends React.Component {
  state = {
    photo: null,
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

  render() {
    const { photo } = this.state
    return (
      <View style={styles.Container}>
      <ImageBackground source={require('../img/dash.jpg')} style={{width: '100%', height: '100%',alignItems:'center'}}>
        <View style={styles.headContiner}> 
           <TouchableOpacity style={styles.UploadImage}>
             <Text style={styles.taptxt}>Tap Here! </Text>
             <Text style={styles.taptxt}>To Upload Image </Text>
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
    height:'30%',
    width:'50%',
    marginTop:200,
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
    
  }


})