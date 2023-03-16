import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import {SliderBox} from "react-native-image-slider-box"
import { data } from '../data/CourouselData' 

const CarouselCard = () => {

    console.log(data);
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
    {data.map((d,index)=> (
        <View style={styles.wrapper} key={index}>
        <View style={styles.imagewrapper}>
           <Image style={{width:395,height:220,marginTop:10,resizeMode:"cover"}} key={index} source={{uri:d}}/>
        </View>
        <View style={styles.btns}>
        <View style={styles.text}></View>
        <View style={styles.textCenter}></View>
        <View style={styles.text}></View>
        </View>
        </View>
    ))}
    </ScrollView>
  )
}

export default CarouselCard

const styles = StyleSheet.create({
   container:{
    width:"100%"
   },
   wrapper:{
    position:"relative",
    // width:"100%"
   },
   imagewrapper:{
    width:"100%"
   },
   btns:{
    position:"absolute",
    marginTop:210,
    marginLeft:150,
    flexDirection:"row",
    justifyContent:"space-between",
    width:100
   },
   text:{
    width:8,
    height:8,
    backgroundColor:"white",
    borderColor:"gray",
    borderRadius:50
   },
   textCenter:{
    width:8,
    height:8,
    backgroundColor:"#02c3d9",
    borderRadius:50
   }
})