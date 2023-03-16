import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const DeliveryAddressCard = () => {
  return (
    <View style={styles.contsiane}>
    <MaterialIcons name='location-pin' size={20} />
      <Text style={styles.deliverytext}>Deliver to Pradeep -Bangalore,577501</Text>
    <MaterialIcons name='keyboard-arrow-down' size={20} />
    </View>
  )
}

export default DeliveryAddressCard

const styles = StyleSheet.create({
    contsiane:{
        backgroundColor:"rgba(155,222,225,0.7)",
        flexDirection:"row",
        padding:10,
        height:50

    }
})