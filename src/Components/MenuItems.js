import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const MenuItems = ({text,img}) => {

  return (
    <View style={styles.container}> 
    <View>
       <Text style={styles.text}>{text}</Text>
       <Image style={{width:"100%",height:130,resizeMode:"contain"}} source={{uri:img}} />
    </View>
      
    </View>
  )
}

export default MenuItems

const styles = StyleSheet.create({
    container:{
        width:110,
        height:150,
        backgroundColor:"white",
        shadowColor:"black",
        shadowOffset:{width:0,height:3},
        shadowOpacity:0.4,
        shadowRadius:10,
        margin:10
    },
    text:{
        fontWeight:"600",
        paddingLeft:8,
        paddingTop:5
    }
     
})