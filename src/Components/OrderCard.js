import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrderCard = ({img}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.orderImage} source={{uri:img}} />
    </View>
  )
}

export default OrderCard

const styles = StyleSheet.create({
    orderImage:{
        height:100,
        width:160,
        resizeMode:"contain",
        borderWidth:1,
        backgroundColor:"white",
        borderColor:"#b8baba",
        borderRadius:10
        
    },
    container:{
        marginTop:10,
        marginRight:10
    }
})