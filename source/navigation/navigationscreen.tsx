import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

import Stack1 from './navigation';
import { createCox } from '../context/context'
import React from 'react'
import VerifyNumber from '../screens/on_boarding_screens/mobile_verification_screen';
import VerifyOtp from '../screens/on_boarding_screens/otp_verification_screen';
import PersonalDetails from '../screens/on_boarding_screens/person_details_screen';
import LOGInLanguage from '../screens/on_boarding_screens/language_screen';
export type Sign_UpStackParamList = {
  LOGInLanguage: undefined,
  LOGIn: undefined,
  LOGIn1:undefined,
  LOGIn2:undefined,
}
export const Sign_InStack = createNativeStackNavigator<Sign_UpStackParamList>();

const MyStack = () => {
  const useContextApp = React.useContext(createCox)
  return (
    <NavigationContainer>{
      useContextApp.goHomePage? 
      <Stack1/>: 

     
      
      <Sign_InStack.Navigator>
        <Sign_InStack.Screen
          name="LOGInLanguage"
          component={LOGInLanguage}
          options={{ headerShown: false }}
        />
        <Sign_InStack.Screen
          name="LOGIn"
          component={VerifyNumber}
          options={{ headerShown: false }}
        />
        <Sign_InStack.Screen
          name="LOGIn1"
          component={VerifyOtp}
          options={{ headerShown: false }}
        />
         <Sign_InStack.Screen
          name="LOGIn2"
          component={PersonalDetails}
          options={{ headerShown: false }}
        />
      </Sign_InStack.Navigator> 
     
      }
      
      
      
    </NavigationContainer>

  )
}
export default MyStack



