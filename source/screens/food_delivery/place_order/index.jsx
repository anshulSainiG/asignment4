import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React, { useState , useEffect, useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createCox} from '../../../context/context'
import { styles } from './style'

const Placeorder = ({route,navigation}) => {
  const [changebackgrondcolor, SETbackgroundcolor] = useState(false)
  const useConx = useContext(createCox);
 
  return (
    <View>
      <View style={styles.mainContainer}>
        <Text style={styles.userDetails}>User Details</Text>
        <TextInput value={useConx.name} onChangeText={useConx.setName} placeholder="FullName" placeholderTextColor={"black"} />
        <View style={styles.userDetailsText}></View>
        <TextInput value={useConx.email} onChangeText={useConx.setEmail}  placeholder="Email" placeholderTextColor={"black"} />
        <View style={styles.userDetailsText}></View>
        <TextInput  value={useConx.phoneno} onChangeText={useConx.setPhoneno} placeholder="phoneno" placeholderTextColor={"black"} />
        <View style={styles.userDetailsText}></View>

        <Text style={styles.addressHeading}>Address</Text>
        <View style={styles.addressHeadingView}>
          <TextInput value={useConx.address} onChangeText={useConx.setAddress} style={styles.addressHeadingTextInput} placeholder="AcademicRoom-26" placeholderTextColor={"black"}/>
          <Pressable style={styles.changeAddressBtn}>
            <Text style={styles.changeAddressText}>change address</Text>
          </Pressable>
        </View>
        <Text style={styles.paymentHeading}>Select Payment Method </Text>
        <Pressable style={styles.creditBtn} onPress={() => SETbackgroundcolor(!changebackgrondcolor)}>
          <View style={[styles.creditView,{backgroundColor: changebackgrondcolor ? "orange" : "black" }]}></View>
          <Text style={styles.paymenttext}>Credit/Debit Card</Text>
        </Pressable>
        <Pressable style={{ flexDirection: "row", marginTop: 10, }} onPress={() => SETbackgroundcolor(!changebackgrondcolor)}>
        <View style={[styles.creditView,{backgroundColor: changebackgrondcolor ? "orange" : "black" }]}></View>
          <Text style={styles.paymenttext}>Cash on delivery</Text>
        </Pressable>
        <View style={styles.orderSummaryView}>
          <Text style={styles.orderSummarytext}>Order Summary</Text>
          <View style={styles.orderLine}></View>
          <Text style={styles.totalText}>Sub Total:{route.params.price}</Text>
          <View style={styles.totalBelowLine}></View>
          <Text style={styles.totalText}>{route.params.price}</Text>
        </View>
     </View>
     <Pressable style={styles.orderBtn} onPress={()=>  navigation.navigate("Orderplaced")} >
       <Text style={styles.orderText}>Place Order</Text>
     </Pressable>
    </View>

  )
}
export default Placeorder



