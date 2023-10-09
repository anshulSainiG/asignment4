import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    mainButton:{
        backgroundColor: "white",
         height: 150, 
         width: "95%",
          borderRadius: 10, 
          marginLeft: 10,
           paddingTop: 10, 
           marginTop: 10 
    },
    mainContainer:{
        flexDirection: "row",
         justifyContent: "space-evenly" 

    },
    img:{
        width: 100,
         height: 100 
    },
    innerView:{
        flexDirection: "row" 
    },
    innerName:{
        fontWeight: "bold", 
        color: "black", 
        textAlign: "center" 
    },
    innerPrice:{
        color: "orange",
         paddingLeft: 20
    },
    innerDescription:{
        width: 150 
    }
})