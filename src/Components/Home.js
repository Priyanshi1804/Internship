/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import { BreakFastData } from '../Data/BreakFastData';
import Swiper from 'react-native-deck-swiper';
import Header from './Header';
import moment from "moment";

// demo purposes only
function * range (start, end) {
  for (let i = start; i <= end; i++) {
    yield i
  }
}

//
let date = moment(new Date()).format("ddd,MMM DD,YYYY"); //Current Datel
let time = moment(new Date()).format("hh:mm:ss");

export default class Home extends Component {
  componentWillMount(){
    for(let i=0;i<10;i++){
      console.log(i);
    }
  }   
   /*json_function = () =>
   {
     for (let i = 0; i < data.length; i++) {     
      console.warn(data);
      console.log(data[i].Image);
    }    
   }*/
   constructor (props) {
    super(props)
    this.state = {
      cards: [...range(1, 50)],
      swipedAllCards: false,
      swipeDirection: '', 
      cardIndex: 0,
      time:moment(new Date()).format("hh:mm a"),
      date:moment(new Date()).format("ddd,MMM DD,YYYY")            
    }
  }
  
  renderCard = (card, index) => {   
    return ( 
      <View style={styles.card}>
      <View style = { styles.lineView }>
        <Text allowFontScaling={false} style = { styles.smallTxt }>{this.state.time}</Text>
        <Text allowFontScaling={false} style = { styles.smallTxt }>{this.state.date}</Text>
      </View>
      <View style = {{ flex:1 ,padding:10 }}>
        <View style = { styles.innerView }>
          <View style = { styles.nameView }>
            <Text allowFontScaling={false} style = { styles.smallTxt }>Breakfast</Text>
          </View>
          <View style = { styles.desView }>
          </View>
          <TouchableOpacity
          style = { styles.imgView }
          onPress={this.json_function}
          >
          </TouchableOpacity>
        </View>

      </View>
        <Text allowFontScaling={false} style={styles.text}>{card} - {index}</Text>          
      </View>   
    )   
  };


  onSwiped = (type) => {
    console.log(`on swiped ${type}`)
  } 

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    })
  };

  swipeLeft = () => {
    this.swiper.swipeLeft()
  };
  render() { 
    return (
      <View style = {{ flex:1 }}>
      <Header
        headerText = "Home"
      />

      <View style={styles.container}> 
      <Swiper
      ref={swiper => {
        this.swiper = swiper
      }}

      onSwiped={() => this.onSwiped('genral')}
      onSwipedLeft={() => this.onSwiped('left')}
      onSwipedRight={() => this.onSwiped('right')}
      onSwipedTop={() => this.onSwiped('top')}
      onSwipedBottom={() => this.onSwiped('bottom')}
      onTapCard={this.swipeLeft}
      cards={this.state.cards}
      cardIndex={this.state.cardIndex}
      cardVerticalMargin={80}
      renderCard={this.renderCard}
      onSwipedAll={this.onSwipedAllCards}
      stackSize={3}
      stackSeparation={15}
      overlayLabels={{
        bottom: {
          title: 'BLEAH',
          style: {
            label: {
              backgroundColor: 'black',
              borderColor: 'black',
              color: 'white',
              borderWidth: 1
            },
            wrapper: {
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }
          }
        },
        left: {
          title: 'NOPE',
          style: {
            label: {
              backgroundColor: 'black',
              borderColor: 'black',
              color: 'white',
              borderWidth: 1
            },
            wrapper: {
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              marginTop: 30,
              marginLeft: -30
            }
          }
        },
        right: {
          title: 'LIKE',
          style: {
            label: {
              backgroundColor: 'black',
              borderColor: 'black',
              color: 'white',
              borderWidth: 1
            },
            wrapper: {
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              marginTop: 30,
              marginLeft: 30
            }
          }
        },
        top: {
          title: 'SUPER LIKE',
          style: {
            label: {
              backgroundColor: 'black',
              borderColor: 'black',
              color: 'white',
              borderWidth: 1
            },
            wrapper: {
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }
          }
        }
      }}
      animateOverlayLabelsOpacity
      animateCardOpacity
      swipeBackCard
    >
      <TouchableOpacity onPress={() => this.swiper.swipeBack()} title='Swipe Back' />
    </Swiper>
      </View>
      </View>
    );
  
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding:20
  },
  card: {
    // flex: 1,
    height:'70%',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#3CBC74',
    // justifyContent: 'center',
    backgroundColor: 'white'
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent'
  },
  lineView:{
    paddingVertical:1,
    paddingHorizontal:15,
    backgroundColor: '#3CBC74',
    justifyContent:'space-between',
    flexDirection:'row'
  },
  smallTxt:{
    fontSize:15,
    color:'white'
  },
  innerView:{
    width:'100%',
    // height:100,
    flexDirection:'row'
    // backgroundColor:'red'
  },
  nameView:{
    width:'30%',
    padding:2,
    backgroundColor:'#3CBC74',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    position:'absolute',
    // left:10,
    elevation:10
  },
  desView:{
    width:'90%',
    elevation:2,
    // backgroundColor:'red',
    borderRadius:10,
    left:25,
    // top:3,
    height:100
  },
  imgView:{
    height:80,
    width:80,
    top:5,
    right:30,
    alignSelf:'flex-end',
    borderWidth:1,
    borderColor:'#3CBC74',
    backgroundColor:'#3CBC74',
    borderRadius:80/2

  }
});
