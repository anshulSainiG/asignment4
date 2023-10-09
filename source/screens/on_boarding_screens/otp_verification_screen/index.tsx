import {  Text, TextInput, View } from 'react-native'
import React, { useState,useContext } from 'react'
import Button from '../../../components/button';
import { createCox } from "../../../context/context"
import { styles } from "./styles";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SignUpStackParamList } from '../../../navigation/navigation';
import { Sign_UpStackParamList } from '../../../navigation/navigationscreen';
type Log_InSignUpProps = NativeStackScreenProps<Sign_UpStackParamList,'LOGIn1'>

 const VerifyOtp=({navigation}:Log_InSignUpProps)=> {
  const useConx = useContext(createCox);

   const[otp,setOtp]=useState("")
   function val() {
    if (otp === "123456") {
      navigation.navigate("LOGIn2")
        
          
        }
        else{
          console.warn("incorrect otp")

        }
    
      
}

  return (
    <View style={styles.maincontainer}>
    <View style={styles.header}>
      <Text style={styles.headeractivatetext}>Activate Your Account</Text>
      <Text style={styles.headercodetext}>We've send code by SMS to phone number</Text>
      <View style={styles.headerinner}><Text style={styles.headerinnertext}>{useConx.number}</Text>
      <Text style={styles.headerheading}> Wrong Numbers?</Text></View>
      
    </View>
    <View style={styles.middlecontainer}>
      <Text style={styles.middlecontainertext}>6 Digit Code</Text>
      
      <TextInput  placeholder="Otp" maxLength={6} onChangeText={setOtp} keyboardType="numeric" style={styles.middlecontainerinput} placeholderTextColor={"black"} />
    
    </View>
    <View style={styles.buttoncontainer}>
      <Text style={styles.buttoncontainertext}>Resend code</Text>

<Button name={"SUBMIT"} navigate={val} backgroundcolor={"#f37f20"} color={"white"} />
    </View>
    </View>
  )
}
export default VerifyOtp




