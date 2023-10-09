import { StyleSheet, Text, View,Pressable,Image,ScrollView,FlatList} from 'react-native'
import React,{useState} from 'react'
import { data } from "../flat/flat"

import { styles } from './style'
import List from '../list'
import { SignUpStackParamList } from '../../../navigation/navigation'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
type LogInSignUpProps = NativeStackScreenProps<SignUpStackParamList, 'BurgerKing'>



const Burgerking=({navigation}:LogInSignUpProps)=> {
  const[showprice,Setshowprice]=useState<number[]>([])
  return (
    <View style={styles.mainContainer}>
      <Pressable style={styles.companyDetailsBtn}  onPress={() =>navigation.navigate("BurgerKing")}>
            <View style={styles.innerCompanyDetail}>
                
                
                    <Image style={styles.img} source={require("../../../assests/images/burgerking.jpeg")} />
                
                <View>
                <View style={styles.companyTitleView}>
                    <Text style={styles.companyTitle}>Burger KING</Text>
                    <Text style={styles.titleTime}>(45 min)</Text>
                    </View>
                
        
                    <Text >Delivery fee:250rs</Text>
                    <Text>Minimun Order:15</Text>
                    <Text style={styles.time}>08:00 AM -11:00 PM</Text>
                 </View>
            </View>
            <View style={styles.freeMealContainer}>
                    <Text style={styles.freeMealText}>*Free Pepsi with every meal*</Text>
                    </View>
            </Pressable>

            <View style={styles.wrapContainer}>
              <Pressable style={styles.wrapBtn}>
                <Text style={styles.differentBtn}>All menu</Text>
              </Pressable>
              <Pressable style={styles.wrapBtn}>
                <Text style={styles.differentBtn}>Category</Text>
              </Pressable>
              <Pressable style={styles.wrapBtn}>
                <Text style={styles.differentBtn}>Review</Text>
              </Pressable>
            </View>

            <Text style={styles.wrapTitle}>Wraps</Text>
      

      {/* <Pressable style={{backgroundColor:"white",height:"20%",width:"95%",borderRadius:10,marginLeft:10,paddingTop:10,marginTop:10}} > */}
      <FlatList
        data={data}
        renderItem={({ item }) => <List name={item.name} description={item.description} price={item.price} image={item.image} Setshowprice={Setshowprice} />

        }
        keyExtractor={item => item.name}
      />
     

    <Pressable style={styles.OrderBtn} onPress={() =>  navigation.navigate ("OrderDetails",{price:showprice} )}  >
      <Text style={styles.OrderText}>View Order</Text>
    </Pressable>
  </View>
          
            
    
    
  )
}
export default Burgerking
