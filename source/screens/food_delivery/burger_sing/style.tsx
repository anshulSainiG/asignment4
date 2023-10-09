import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    mainContainer:{
        width:"100%",
        height:"100%",
    },
    companyDetailsBtn:{
        backgroundColor:"white",
        height:"20%",
        width:"95%",
        borderRadius:10,
        marginLeft:10,
        paddingTop:15,
        marginTop:10
    },
    innerCompanyDetail:{
        flexDirection:"row",
        justifyContent:"space-evenly"


    },
    img:{
        width:100,
         height: 100 
    },
    companyTitleView:{
        flexDirection: "row",
        

    },
    companyTitle:{
        fontWeight:"bold",color:"black"
    },
    titleTime:{
        color:"orange"
    },
   time: { 
    color:"black",
    fontWeight:"bold" 
},
freeMealContainer:{
    alignSelf:"center",
    paddingTop:15
},
freeMealText:{
    color:"red"

},
wrapContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginHorizontal:30,
    margin:10
},
wrapBtn:{
    backgroundColor:"orange",
    width:100,
    height:40,
    marginTop:10,
    borderRadius:10
},
differentBtn:{
    alignSelf:"center",
    paddingTop:5,
    color:"white"
},
orderBtn:{
    backgroundColor: "orange", 
    height: 50,
     width: "100%" 
},
text:{
    textAlign: "center", 
    paddingTop: 10,
     color: "black", 
     fontWeight: "bold" 
},
wrapTitle:{
    color: "black",
     fontSize: 20,
      paddingTop: 5, 
      paddingLeft: 20
},

orderText:{
    textAlign: "center",
     paddingTop: 10,
      color: "black", 
      fontWeight: "bold"
}

    


})