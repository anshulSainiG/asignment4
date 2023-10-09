import {  Text, View,Pressable } from 'react-native'
import React, {useEffect,useState} from 'react'
import { styles } from './style'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { SignUpStackParamList } from '../../../navigation/navigation'
type LogInSignUpProps = NativeStackScreenProps<SignUpStackParamList,'OrderDetails'>




const OrderDetails =({route,navigation}:LogInSignUpProps )=> {
  const [sumOfPrice, setSumOfPrice]=useState<number>(0)

  useEffect(()=>{
    
    let sum = 0;
    route.params.price.forEach((element:number)=> sum=sum+element);
    setSumOfPrice(sum)
  },[route])
  return (
    <View >
      
      <Text style={styles.mainTitle}>McDonals</Text>
      <View style={styles.upperline}></View>
      <View style={styles.mainview}>
      <Text style={styles.text}>Chipotie BBQ Burger</Text>
      <Text style={styles.price}>Price: {route.params.price}</Text>
      <Text>Additional Indegredients?Onion</Text>
      <Text>Make it Combo?No</Text>
      <Text>No. of Pieces:1</Text>
      </View>
      <View style={styles.lowerline}></View>
      <View>
          <Text style={styles.subtotal}>Sub Total:{sumOfPrice}</Text>
      </View>
      <View>

      <Pressable style={styles.Orderbtn} onPress={() => navigation.navigate("Placeorder",{price:sumOfPrice} )}  >
        <Text style={styles.Ordertext}> Order Now</Text>
      </Pressable>
      </View>
    </View>
  )
}
export default  OrderDetails

