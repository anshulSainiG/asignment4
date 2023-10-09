import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    mainContainer:{
        width:"100%",
        height:"100%",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    innerContainer:{
        width:350,
        height:150,
        backgroundColor:"#fff8f3"
    },
    innerTextView:{
        alignSelf:"center",
        paddingTop:40
    },
    innerText:{
        textAlign:"center"
    },
    innerAppText:{
        textAlign:"center",
        color:"orange",
        fontSize:20
    },
})