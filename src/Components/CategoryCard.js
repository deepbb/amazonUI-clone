import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const CategoryCard = ({img,text}) => {
  return (
    <View style={styles.container}>
      <Image 
        style={{height:60,width:60,resizeMode:"contain"}}
        source={{uri:img}}/>
        <Text style={{fontSize:12}}>{text}</Text>
    </View>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
    container:{
        paddingLeft:5,
        paddingRight:5,
    }
})