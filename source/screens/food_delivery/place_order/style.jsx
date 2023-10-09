import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    mainContainer:{
        paddingHorizontal: 20, 
        paddingVertical: 20
    },
    userDetails:{
        color: "black",
         fontWeight: "bold", 
         fontSize: 20
    },
    userDetailsText:{
        width: "100%",
         height: 2,
          backgroundColor: "black",
    },
  addressHeading:{
    fontSize: 20, 
    color: "black",
     paddingTop: 30
  },
  addressHeadingView:{
    marginTop: 20,
     borderWidth: 2, 
     borderColor: "grey" 
  },
  addressHeadingTextInput:{
    height: 40, 
    width: "100%",
     borderColor: "black" 
  },
  changeAddressBtn:{
    width: "100%",
     height: 20, 
     backgroundColor: "orange"
  },
  changeAddressText:{
    textAlign: "center", color: "black"
  },
  paymentHeading:{
    fontSize: 20,
     fontWeight: "bold",
      color: "black", 
      marginTop: 20 
  },
  creditBtn:{
    flexDirection: "row",
     marginTop: 20 
  },
  creditView:{
  width: 10, height: 15,
  borderRadius: 20
},
paymenttext:{
    paddingLeft: 10 ,
},
orderSummaryView:{
    marginTop: 20
},
orderSummarytext:{
    color: "black", 
    fontSize: 20 
},
orderLine:{
    height: 5,
     width: "100%",
      backgroundColor: "grey",
       marginTop: 10
     },
     totalText:{
    marginTop: 10,
     fontSize: 20,
     color:"orange"
},
totalBelowLine:{
    height: 5, 
    width: "100%",
     backgroundColor: "grey",
      marginTop: 50 
},
orderBtn:{
    width:"100%",
    backgroundColor:"orange",
    height:100
},
orderText:{
    color:"white",
    fontSize:20,
    textAlign:"center",
    paddingTop:20
}




})