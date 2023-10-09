import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    mainContainer:{
    width:"100%",margin:7,height:"100%"
    },
    burgerkingBtn:{
        backgroundColor:"white",
        height:"20%",
        width:"95%",
        borderRadius:10,
        marginLeft:5,
        paddingTop:10
    },
    internalkingView:{
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    img1:{
        width:100, height: 100
    },
    titleView:{
        flexDirection: "row"
    },
    titleText:{
        fontWeight:"bold",color:"black"
    },
    titleTime:{
        color:"orange"
    },
    time:{
        color:"black",
        fontWeight:"bold"
    },
    mealHeading:{
        alignSelf:"center",paddingTop:15
    },
    mealHeadingText:{
        color:"red"
        
    }
    
})