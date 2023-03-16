import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { LinearGradient } from 'expo-linear-gradient';
import ProfileCard from '../Components/ProfileCard';
import OrderCard from '../Components/OrderCard';
import AccountCard from '../Components/AccountCard';
import { accountData, infoData, OrderData, WishListData } from '../data/ProfileData';

const ProfileScreen = ({navigation}) => {
  useEffect(()=> {
    navigation.setOptions({
      headerTitle:"",
      headerLeft:()=> (
        <Image style={{height:30,width:90,marginLeft:10}} source={require("../../assets/amazon.png")} />
      ),
      headerRight:()=>(
        <View style={styles.icons}>
          <MaterialIcons name='notifications-none' size={26} style={{marginRight:15}} />
          <MaterialIcons name='search' size={26} style={{marginRight:15}} />
        </View>
      ),
      headerStyle:{
        backgroundColor:"rgba(5,250,242,0.4)",
        borderBottomWidth:0
      }
    })
},[])
  return (
    <ScrollView>
    <LinearGradient colors={['rgba(5,250,242,0.4)', '#fff']}>
     <View style={styles.textContainer}>
      <Text style={styles.text}>Hello, <Text style={{fontWeight:"bold"}}>Pradeep</Text></Text>
      <MaterialIcons name="account-circle" color={"#b0b0b0"} size={40} />
      </View>
      <View style={styles.actionContent}>
      {infoData.map((info)=> (
        <ProfileCard key={info.title} text={info.title} />
      ))}
      </View>
      </LinearGradient>
      <View style={styles.orderContent}>
        <Text style={styles.orderText}>Your Orders</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {OrderData.map((order,id)=> (
          <OrderCard key={id} img={order.image} />
        ))}
        </ScrollView>
      </View>
      <View style={styles.orderContent}>
        <Text style={styles.orderText}>Your Wishlists</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {WishListData.map((data,id)=> (
              <OrderCard key={id} img={data.image} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.accountcontainer}>
      <Text style={styles.orderText}>Your Account</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {accountData.map((data,id)=> (
        <AccountCard key={id} text={data.title}/>
      ))}
      </ScrollView>
      </View>
    </ScrollView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container:{
  },
  textContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    padding:15
  },
  text:{
    fontSize:20
  },
  icons:{
    flexDirection:"row",
    alignItems:"center"

  },
  actionContent:{
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-evenly"
  },
  orderContent:{
    marginTop:10,
    borderBottomColor:"#b8baba",
    borderBottomWidth:3,
    paddingLeft:10,
    paddingBottom:10
  },
  orderText:{
    fontWeight:"bold",
    fontSize:20,
    marginBottom:15
  },
  accountcontainer:{
    paddingLeft:10
  }
})