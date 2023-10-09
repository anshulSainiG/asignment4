import { StyleSheet, Text, View,Image, TextInput, Pressable } from 'react-native'
import React,{useContext} from 'react'
import { createCox } from "../../../context/context"
import { styles } from "./style";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SignUpStackParamList } from '../../../navigation/navigation';
import { Sign_UpStackParamList } from '../../../navigation/navigationscreen';
type Log_InSignUpProps = NativeStackScreenProps<Sign_UpStackParamList,'LOGIn2'>
const PersonalDetails=()=> {
  const useConx = useContext(createCox);
  
  
  return (
    <View style={styles.maincontainer}>

      <View style={styles.header}>
          <Image source={require("../../../assests/images/cookinglogo.png")} style={styles.headerimg} />
          <Text style={styles.headertext}>Hungry Order</Text>
        </View>
        <View style={styles.textinputfield}>
        <View>
            <Text style={styles.textinputfieldname}>Full Name</Text>
            <TextInput value={useConx.name} onChangeText={useConx.setName} placeholder="JOHN DON" placeholderTextColor={"#000000"} style={styles.textinputfieldinput}/>
      
        </View>
        <View style={{}}>
            <Text style={styles.textinputfieldname}>EMAIL</Text>
            <TextInput value={useConx.email} onChangeText={useConx.setEmail}  placeholder="john don @gmail.com" placeholderTextColor={"#000000"} style={styles.textinputfieldinput}/>
        </View>
        <View style={{}}>
            <Text style={styles.textinputfieldname}>ADDRESS</Text>
            <TextInput value={useConx.address} onChangeText={useConx.setAddress} placeholder="john don @gmail.com" placeholderTextColor={"#000000"} style={styles.textinputfieldinput}/>
        </View>
        <View style={{}}>
            <Text style={styles.textinputfieldname}>Phone No.</Text>
            <TextInput value={useConx.phoneno} onChangeText={useConx.setPhoneno} placeholder="Phone no." placeholderTextColor={"#000000"} style={styles.textinputfieldinput}/>
        </View>
        </View>
        <Pressable style={styles.Press} onPress={()=>useConx.setGoHomePage(true)}>
          <Text style={styles.Presstext}>FINISH</Text>
        </Pressable>
        




    </View>
  )
}
export default  PersonalDetails