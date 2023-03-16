import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"


const CartItems = ({img,text,price}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contents}>
        <View style={styles.imgContent}>
            <Image style={{width:120,height:120}} source={{uri:img}} />   
        </View>
        <View style={styles.contentsCont}>
            <Text style={styles.title}>{text}</Text>
            <Text style={styles.price}>${price}</Text>
            <Text style={styles.delivery}>Eligible for FREE Shipping</Text>
        </View>
      </View>
      <View style={styles.bottomContents}>
        <View style={styles.itemCount}>
         
            <MaterialIcons style={styles.icondel} name='delete-outline' size={22} />
         
         
            <Text style={styles.count}>1</Text>
            <MaterialIcons  style={styles.iconadd} name='add' size={22} /> 
           
        </View>
           <View style={styles.action}>
                <Pressable style={styles.actionText}>
                    <Text>Delete</Text>
                </Pressable>
                <Pressable style={styles.actionText}>
                    <Text>Save for later</Text>
                </Pressable>
                <Pressable style={styles.actionText}>
                    <Text>See more like this</Text>
                </Pressable>
           </View>
      </View>
    </ScrollView>
  )
}

export default CartItems

const styles = StyleSheet.create({
    container:{
        borderBottomColor:"white",
        borderBottomWidth:10,
        backgroundColor:"#ededed"
    },
    contents:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    contentsCont:{
        marginLeft:10,
        flex:2
    },
    title:{
        fontWeight:"600",
        paddingRight:5
    },
    price:{
        fontSize:24,
        fontWeight:"bold",
        marginTop:5,
        marginBottom:5
    },
    bottomContents:{
        flexDirection:"row",
        padding:10,
        justifyContent:"flex-start",
        alignItems:"center"
    },
    itemCount:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginLeft:"5%"
    },
    icondel:{
        borderWidth:1,
        borderColor:"#c9c9c9",
        backgroundColor:"#e6e5e3",
        paddingLeft:5,
        paddingRight:5,
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5,
        paddingTop:4,
        paddingBottom:4
    },
    iconadd:{
        borderWidth:1,
        borderColor:"#c9c9c9",
        backgroundColor:"#e6e5e3",
        paddingLeft:5,
        paddingRight:5,
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
        paddingTop:4,
        paddingBottom:4
    },
    count:{
        padding:5,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:"#c9c9c9",
        backgroundColor:"#e6e5e3",
    },
    action:{
        flex:1,
        marginLeft:"3%",
        flexDirection:"row",
        flexWrap:"wrap"
    },
    actionText:{
        borderWidth:1,
        borderColor:"#c9c9c9",
        backgroundColor:"#FFFFFF",
        paddingLeft:5,
        paddingRight:5,
        borderRadius:5,
        paddingTop:4,
        paddingBottom:4,
        marginRight:5,
        marginBottom:10
    }
})