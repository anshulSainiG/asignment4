import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    maincontainer: {
        height:"100%",
        width: "100%",
    },
    header: {
        alignItems: "center",
        height: "30%",

    },
    languagetext: {
        height: "40%"
    },
    img: {
        height: "40%",
        width: "25%",
        marginTop: 30,
        borderRadius: 8
    },
    headertext: {
        fontWeight: "bold",
        fontSize: 18,
        color: "black"
    },
    press: {
        borderWidth: 2, width: "90%", borderColor: "grey", alignItems: "center", marginTop: 40, height: 50, marginLeft: 20
    },
    presstext: {
        fontSize: 20, paddingLeft: 6, alignItems: "center", paddingTop: 8, fontWeight: "bold", color: "black"
    },
    flatlistview:
    {height: '100%',  
    width: '100%', 
    justifyContent: "center"
} ,
flatlistpress:{
    backgroundColor: "white", padding: 40 

},
flatlistpressview:{
    flexDirection: "row", justifyContent: "space-around" 
},
flatlistpresstext:{
    fontSize: 25, fontWeight: "bold", color: "black" 
}



})