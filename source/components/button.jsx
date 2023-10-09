import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Button = (props ) => {

    const {name,backgroundcolor,color,navigate} = props;
    return (
        <View style={ styles.btn}>
            <TouchableOpacity style={[ styles.loginbtn,{backgroundColor:backgroundcolor}]} onPress={navigate}>
                <Text style={[ styles.logintext,{color:color}]}>{name}</Text>
            </TouchableOpacity>
            
        </View>
    )
}
const styles=StyleSheet.create({
    btn:{
        
            justifyContent:"space-evenly",
            marginTop:10
        
    
            
    
        },
       

    loginbtn: {
        height:50,
        width: "80%",
        backgroundColor: "#6A1B1E",
        borderRadius: 4,
        paddingVertical: 10,
        justifyContent: "center",
        alignSelf:"center",
        borderColor:"#f37f20",
        borderWidth:2
    

    },
    logintext: {
        alignSelf: "center",
        // color: "white",

    },
        
    
    }
)
export default Button



