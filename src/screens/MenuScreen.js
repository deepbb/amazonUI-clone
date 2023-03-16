import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect } from 'react'
import MenuItems from '../Components/MenuItems'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { LinearGradient } from 'expo-linear-gradient'
import { menuData } from '../data/MenuData'


const MenuScreen = ({navigation}) => {
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
    <ScrollView style={styles.menucontainer}>
    <LinearGradient colors={["rgba(5,250,242,0.4)" , "#fff"]}>
    <View style={styles.items}>
    {menuData.map((data,index)=> (
      <MenuItems key={index} img={data.img} text={data.text} />
    ))}
    </View>
    </LinearGradient>
    </ScrollView>
  )
}

export default MenuScreen

const styles = StyleSheet.create({
  categoryContainer:{
    width:"100%"
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
  container:{
    backgroundColor:"rgba(5,250,242,0.4)",
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-around",
    alignItems:"center",
    height:80,

  },
  menucontainer:{
    flex:1
  },
  items:{
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-evenly",
  }
})