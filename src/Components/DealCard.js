import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const dimension = (Dimensions.get("window").width)
const DealCard = ({img,text}) => {
   console.log(img);
  return (
    <View style={styles.wrapper}>
    <View style={styles.dealItem}>
        <Image style={styles.dealImage} source={{uri:img}}/>
    </View>
    <View>
      <Text style={{width:150}}>{text}</Text>
    </View>
    </View>
  )
}

export default DealCard

const styles = StyleSheet.create({
    container:{
        padding:15,
        overflow:"hidden"
    },
    dealImage:{
        height:100,
        resizeMode:"contain",
    },
    dealItem:{
        width:(dimension/2)-45,
        marginBottom:5
    },
    wrapper:{
        // justifyContent:"space-around"
    }

})