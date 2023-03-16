import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import DeliveryAddressCard from '../Components/DeliveryAddressCard'
import CartItems from '../Components/CartItems'
import { cartData } from '../data/CartData'

const CartScreen = ({navigation}) => {
  useEffect(()=> {
    navigation.setOptions({
      headerTitle:"",
      header:()=> (
        <View style={styles.container}>
          <View style={styles.icon}>
              <MaterialIcons name="search" color={"gray"} size={20} />
              <TextInput style={styles.input}
               placeholder="Search amazon.com"
                placeholderTextColor={"gray"}
               />
          </View>
          <View style={styles.mic}>
            <MaterialIcons name="mic-none" size={26} />
          </View>
        </View>
      )
    })
},[])
  return (
    <ScrollView>
    <DeliveryAddressCard />
      <View style={styles.subCont}>
        <Text style={styles.text}>SubTotal:</Text>
        <Text style={styles.price}>$100</Text>
      </View>
      <View style={styles.deliveryCont}>
        <MaterialIcons name='verified' size={22} color={"teal"} />
      <View>
        <Text style={styles.deliverytext}>Your order is eligible for FREE delivery</Text>
      </View>
      </View>
      <View style={styles.btnwrapper}>
        <Pressable style={styles.btnCont}>
          <Text style={styles.btntext}>Proceed to buy (2 items)</Text>
        </Pressable>
      </View>
      <ScrollView>
      {cartData.map((data ,id)=> (
        <CartItems key={id} img={data.img} text={data.title} price={data.price} />
      ))}
      </ScrollView>
    </ScrollView>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:"rgba(5,250,242,0.4)",
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-around",
    alignItems:"center",
    height:80,

  },
  icon:{
    flexDirection:"row",
    alignItems:"center",
    width:"80%",
    marginTop:30,
    marginLeft:15,
    borderWidth:1,
    borderColor:"#b8baba",
    paddingLeft:15,
    backgroundColor:"white",
    borderRadius:5,
    height:40
  },
  input:{
    width:"92%",
    height:"90%",
    borderWidth:0,
    paddingLeft:10,
    backgroundColor:"white",
    paddingBottom:2
  },
  mic:{
    marginTop:30
  },
  subCont:{
    flexDirection:"row",
    padding:10
  },
  text:{
    fontSize:22,
    fontWeight:"600"
  },
  price:{
    fontSize:22,
    fontWeight:"800"
  },
  deliveryCont:{
    padding:10,
    flexDirection:"row"
  },
  deliverytext:{
    marginLeft:5,
    color:"teal"
  },
  btnwrapper:{
      borderBottomWidth:1,
  },
  btnCont:{
    backgroundColor:"gold",
    marginLeft:"5%",
    marginRight:"5%",
    alignItems:"center",
    justifyContent:"center",
    paddingBottom:10,
    paddingTop:10,
    marginBottom:10,
    borderRadius:5
  }

})