import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const AccountCard = ({text}) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  )
}

export default AccountCard

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#f0f0f0",
        borderWidth:1,
        borderColor:"#b8baba",
        padding:7,
        width:"auto",
        borderRadius:10,
        marginRight:10
    }
})