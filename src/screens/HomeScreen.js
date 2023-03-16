import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { TextInput } from 'react-native';
import DeliveryAddressCard from '../Components/DeliveryAddressCard';
import CategoryCard from '../Components/CategoryCard';
import CarouselCard from '../Components/CarouselCard';
import DealCard from '../Components/DealCard';
import { categoryData, dealData, devicesDealData } from '../data/CourouselData';

const HomeScreen = ({navigation}) => {

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
    <ScrollView showsVerticalScrollIndicator={false}>
      <DeliveryAddressCard />
      <ScrollView style={styles.categoryContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
      {categoryData.map((category)=> (
        <CategoryCard key={category.text} img={category.img} text={category.text} />
      ))}
      </ScrollView>
      <View style={{width:"100%"}}>
        <CarouselCard />
      </View>
      <View>
        <Text style={styles.dealtext}>Electronic Devices for Home and Office</Text>
      </View>
      <View style={styles.dealCount}>
      {devicesDealData.map((data)=> (
        <DealCard key={data.text} img={data.img} text={data.text} />
        ))}
      </View>
      <View style={styles.dealCount}>
      {dealData.map((data)=> (
        <DealCard key={data.text} img={data.img} text={data.text} />
        ))}
      </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:"rgba(5,250,242,0.4)",
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-around",
    alignItems:"center",
    height:80,

  },
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
  categoryContainer:{
    paddingTop:5,
    paddingLeft:5

  },
  dealtext:{
    fontSize:16,
    fontWeight:"bold",
    marginLeft:15,
    padding:10
  },
  dealCount:{
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-around",
    padding:10
  }
})