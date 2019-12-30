import ScrollView, { ScrollViewChild } from 'react-native-directed-scrollview';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,  
} from 'react-native'
import React, { Component } from 'react'
export default class Example extends Component {
  render() {
    return (
      <ScrollView
        bounces={true}
        bouncesZoom={true}
        maximumZoomScale={2.0}
        minimumZoomScale={0.5}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
      >
        <ScrollViewChild scrollDirection={'both'}>
          <Text> HIII </Text>
         {/* multi-directional scrolling content here...*/}
        </ScrollViewChild>
        <ScrollViewChild scrollDirection={'vertical'}>
         {/* vertically scrolling content here...*/}
        </ScrollViewChild>
        <ScrollViewChild scrollDirection={'horizontal'}>
        {/*  horizontally scrolling content here...*/}
        </ScrollViewChild>
      </ScrollView>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    height: 1000,
    width: 1000,
  },
})