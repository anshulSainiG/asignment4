import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { NativeViewGestureHandler } from 'react-native-gesture-handler';
import { NativeScreenNavigationContainer } from 'react-native-screens';
import Homepage from '../screens/food_delivery/home_page';
import Dominos from '../screens/food_delivery/dominos'
import MCDonals from '../screens/food_delivery/mc_donalds';
import Nando from '../screens/food_delivery/nando'
import OrderDetails from '../screens/food_delivery/order_details';
import Placeorder from '../screens/food_delivery/place_order';
import Orderplaced from '../screens/food_delivery/order_placed';
import Burgersing from '../screens/food_delivery/burger_sing';
import Burgerking from '../screens/food_delivery/burger_king';

export type SignUpStackParamList = {
  Homepage: undefined,
  BurgerKing: undefined,
  Dominos:undefined,
  MCDonals:undefined,
  Nando:undefined,
  Burgersing:undefined,
  OrderDetails:{price:number[]},
  Placeorder:{price:number},
  Orderplaced:undefined,
  


}
export const SignInStack = createNativeStackNavigator<SignUpStackParamList>();




const Stack = ( ) => {
  return(
    
      <SignInStack.Navigator>
        <SignInStack.Screen
          name="Homepage"
          component={Homepage}
          
          
        />
        
        <SignInStack.Screen
          name="BurgerKing"
          component={Burgerking}
          options={{headerTintColor:"white",
          headerStyle:{
          backgroundColor: 'orange'},
          
          
          }}
          />
           <SignInStack.Screen
          name="Dominos"
          component={Dominos}
          options={{headerTintColor:"white",
          headerStyle:{
          backgroundColor: 'orange'},
          
          
          }}
          />
            <SignInStack.Screen
          name="MCDonals"
          component={MCDonals}
          options={{headerTintColor:"white",
          headerStyle:{
          backgroundColor: 'orange'},
          
          
          }}
          />
            <SignInStack.Screen
          name="Nando"
          component={Nando}
          options={{headerTintColor:"white",
          headerStyle:{
          backgroundColor: 'orange'},
          
          
          }}
          />
             <SignInStack.Screen
          name="Burgersing"
          component={Burgersing}
          options={{headerTintColor:"white",
          headerStyle:{
          backgroundColor: 'orange'},
          
          
          }}
          />
            <SignInStack.Screen
          name="OrderDetails"
          component={ OrderDetails}
          options={{headerTintColor:"white",
          headerStyle:{
          backgroundColor: 'orange'},
          
          
          }}
          />
             <SignInStack.Screen
          name="Placeorder"
          component={Placeorder}
          options={{headerTintColor:"white",
          headerStyle:{
          backgroundColor: 'orange'},
          
          
          }}
          />
              <SignInStack.Screen
          name="Orderplaced"
          component={Orderplaced}
          options={{headerTintColor:"white",
          headerStyle:{
          backgroundColor: 'orange'},
          
          
          }}
          />
           </SignInStack.Navigator>
          
          
          
        
      
      
      
      
    

  );
};
export default Stack



