import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { SignUpStackParamList } from '../../../navigation/navigation'
type LogInSignUpProps = NativeStackScreenProps<SignUpStackParamList,'Orderplaced'>

const Orderplaced=()=> {
  return (
      <View style={styles.mainContainer}>
    <View style={styles.innerContainer}>
        <View style={styles.innerTextView}>
      <Text style={styles.innerText}>order placed on</Text>
      <Text>2019/10/18 At 12:48 PM</Text>
      <Text style={styles.innerAppText}>Via app</Text>
      </View>
    </View>
    </View>
  )
}
export default Orderplaced