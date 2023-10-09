import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    maincontainer: {
        height: "100%",
        width: "100%",
    },
    header: {
        alignItems: "center",
        height: "30%"
    },
    headerimg: {
        height: "55%",
        width: "25%",
        marginTop: 30,
        borderRadius: 8,
    },
    headertext: {
        fontWeight: "bold",
        fontSize: 18,
        color: "black"
    },
    middlecontainer: {
        height: "40%",
    },
    middlecontainerphonetext: {
        fontSize: 25,
        paddingLeft: 20,
        color: "black"
    },
    middlecontainerPress:
    {
        borderWidth: 2,
        width: "90%",
        borderColor: "grey",
        marginTop: 40,
        height: 50,
        marginLeft: 20
    },
    middlecontainercountrytext: {
        fontSize: 20,
        paddingLeft: 6,
        paddingTop: 8,
        fontWeight: "bold",
        color: "black"
    },
    middlecontainerinput: {
        color: "black", fontSize: 20, paddingTop: 8, fontWeight: "bold", height: 45, borderWidth: 1, padding: 10, width: "100%", borderColor: "gey", marginTop: 20

    },
    modalmaincontainer: {
        height: '100%',
        width: '100%',
        justifyContent: "center"
    },
    flatlistpress: {
        backgroundColor: "white", padding: 40
    },
    flatlistview: {
        flexDirection: "row", justifyContent: "space-around"
    },
    flatlisttext:{
        fontSize: 25, 
        fontWeight: "bold",
         color: "black" 
        },


    
})