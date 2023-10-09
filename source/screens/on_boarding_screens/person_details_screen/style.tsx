import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    maincontainer: {
        height: "100%",
        width: "100%",
    },
    header: {
        alignItems: "center", flex: 4
    },
    headerimg: {
        height: "40%", width: "25%", marginTop: 30, borderRadius: 8
    },
    headertext:{
        fontWeight: "bold", fontSize: 18, color: "black"
    },
    textinputfield:{
        height:"60%"

    },
    textinputfieldname:{
        fontWeight:"bold",marginLeft:10
    },
    textinputfieldinput:{
        height: 50,margin:12,borderWidth:1,padding:10

    },
    Press:{
        backgroundColor:'#f37f20',width:"100%"
    },
    Presstext:{
        alignSelf:"center",color:"white",fontSize:20,height:45,paddingTop:5
    },
})