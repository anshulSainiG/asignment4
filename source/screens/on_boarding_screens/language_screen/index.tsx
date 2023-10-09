import { Image, StyleSheet, Text, View, TextInput, Pressable, Modal ,FlatList, Alert} from 'react-native'
import React , { useState } from 'react'
import { languages } from '../../../assests/language/language ';
import { useContext } from 'react';
import Button from '../../../components/button';
import { styles } from './style';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Sign_UpStackParamList } from '../../../navigation/navigationscreen';
 
type Log_InSignUpProps = NativeStackScreenProps<Sign_UpStackParamList,'LOGInLanguage'>


const LOGInLanguage = ({navigation}:Log_InSignUpProps) => {

    const [showmodal, setShowmodal] = useState(false)
    const[language, setLanguage]=useState('')

    function val() {
      if (language!== '') {
        navigation.navigate("LOGIn")
          
            
          }
          else{
            Alert.alert('Alert Title', 'My Alert Msg', [
              {
                text: 'chooselanguage',
                style:'destructive',
              }
            ]
            )
  
          }
    }
      
    const clickHandler = (item:string) => {
      setLanguage(item)
      setShowmodal(false)
    }
    
    return (
      <View style={styles.maincontainer}>
        <View style={styles.header}>
          <Image source={require("../../../assests/images/cookinglogo.png")} style={styles.img} />
          <Text style={styles.headertext}>Hungry Order</Text>
        </View>
      <View style={styles.languagetext}> 
        <Text style={{ fontSize: 25, paddingLeft: 20, color: "black" }}>Select Language</Text>
         <Pressable style={styles.press} onPress={() => setShowmodal(true)}>
          
         <Text style={styles.presstext}>{language}</Text>
  
  
        </Pressable>
        </View>
        <View>
          
           <Button name={"NEXT"} navigate={val} backgroundcolor={"#f37f20"} color={"white"} />
        </View>

        <Modal transparent={true}
          visible={showmodal}>
          <View style={styles.flatlistview}>
          
          <FlatList
          data={languages}
          renderItem={({item}) => <Pressable style={styles.flatlistpress} onPress={()=>clickHandler(item)}>
          <View style={styles.flatlistpressview}>
            <Text style={styles.flatlistpresstext}>{item}</Text>
          
  
          </View>
        </Pressable>}
          keyExtractor={item => item} 
        />
          </View>
            
    
        </Modal>
      </View>
    )
  }


  export default LOGInLanguage
  