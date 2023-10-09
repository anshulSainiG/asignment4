import { Image, StyleSheet, Text, View ,TextInput, Pressable,Modal,FlatList,Alert} from 'react-native'
import React,{useState,useContext} from 'react'

import { createCox } from "../../../context/context"
import Button from '../../../components/button'
import { styles } from './style';
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { CountryCode } from '../../../assests/country_code/75f6183458db8c453306f93521e93d37-f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes';
import { Sign_UpStackParamList } from '../../../navigation/navigationscreen';
type Log_InSignUpProps = NativeStackScreenProps<Sign_UpStackParamList,'LOGIn'>
type itemProps = {
  name: string;
  dial_code: string;
  code: string;
}



const VerifyNumber=({navigation}:Log_InSignUpProps)=> {
  const useConx = useContext(createCox);
  const [showmodal, setShowmodal] = useState(false)
  const[countryname, setCountryname]=useState('')
  // const[number,setNumber]=useState('')
  function pressHandler() {
    if (countryname!== '') {
      navigation.navigate("LOGIn1")
        
          
        }
        else{
          Alert.alert('Alert Title', 'My Alert Msg', [
            {
              text: 'choosecountryname',
              style:'destructive',
            }
          ]
          )
          
        }
      }
      
      
      const OnClick = (item:itemProps) => {
        setCountryname(item.name)
        setShowmodal(false)
        useConx.setNumber(item.dial_code + " ")
      }


  return (
    <View style={styles.maincontainer}>
    <View style={styles.header}>
      <Image source={require("../../../assests/images/cookinglogo.png")} style={styles. headerimg}/>
      <Text style={styles.headertext }>Hungry Order</Text>
    </View>
      {/* <Text style={{fontSize:25,paddingLeft:20,color:"black"}}>Select Language</Text> */}
      <View style={styles.middlecontainer}> 
        <Text style={styles.middlecontainerphonetext}>Enter your Mobile Number</Text>
         <Pressable  style={styles.middlecontainerPress} onPress={() => setShowmodal(true)}>
          
         <Text style={styles.middlecontainercountrytext}>{countryname}</Text>
         <TextInput value={useConx.number} onChangeText={useConx.setNumber} placeholder="number" placeholderTextColor={"#000000"} keyboardType="numeric" style={styles.middlecontainerinput}></TextInput>
        </Pressable>
    </View>
   <Button name={"NEXT"} navigate={pressHandler} backgroundcolor={"#f37f20"} color={"white"} />
      <Modal transparent={true}
          visible={showmodal}>
          <View style={styles.modalmaincontainer}>
          
          <FlatList
          data={CountryCode}
          renderItem={({item}) => <Pressable style={styles.flatlistpress} onPress={()=>OnClick(item)}>
          <View style={styles.flatlistview}>
            <Text style={styles.flatlisttext}>{item.name}</Text>
            
            <Text style={styles.flatlisttext}>{item.dial_code}</Text>
           
           

          
  
          </View>
        </Pressable>}
          keyExtractor={item => item.code} 
        />
          </View>
            
        
        </Modal>

  
    </View>
  )
}

export default  VerifyNumber;
