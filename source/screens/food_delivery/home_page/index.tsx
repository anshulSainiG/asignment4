import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { SignUpStackParamList } from '../../../navigation/navigation'
type LogInSignUpProps = NativeStackScreenProps<SignUpStackParamList,'Homepage'>

const Homepage = ({navigation}:LogInSignUpProps) => {
    return (
        <View style={styles.mainContainer}>
            <ScrollView>
            <Pressable style={styles.burgerkingBtn}  onPress={() =>navigation.navigate("BurgerKing")}>
            <View style={styles.internalkingView}>
                <View>
                
                    <Image style={styles.img1} source={require("../../../assests/images/burgerking.jpeg")} />
                </View>
                <View>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>Burger KING</Text>
                    <Text style={styles.titleTime}>(45 min)</Text>
                    </View>
                
        
                    <Text>Delivery fee:250rs</Text>
                    <Text>Minimun Order:15</Text>
                    <Text style={styles.time}>08:00 AM -11:00 PM</Text>
                 </View>
            </View>
            <View style={styles.mealHeading}>
                    <Text style={styles.mealHeadingText}>*Free Pepsi with every meal*</Text>
                    </View>
            </Pressable>
            <Pressable style={styles.burgerkingBtn} onPress={() =>navigation.navigate("Dominos")}>
            <View style={styles.internalkingView}>
                <View>
                
                    <Image style={styles.img1} source={require("../../../assests/images/Dominos.webp")} />
                </View>
                <View>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>Domino's</Text>
                    <Text style={styles.titleTime}>(45 min)</Text>
                    </View>
                
        
                    <Text>Delivery fee:250rs</Text>
                    <Text>Minimun Order:15</Text>
                    <Text style={styles.time}>08:00 AM -11:00 PM</Text>
                 </View>
            </View>
            <View style={styles.mealHeading}>
                    <Text style={styles.mealHeadingText}>*Free Pepsi with every meal*</Text>
                    </View>
            </Pressable>
            <Pressable style={styles.burgerkingBtn} onPress={() =>navigation.navigate("MCDonals")}>
            <View style={styles.internalkingView}>
                <View>
                
                    <Image style={styles.img1} source={require("../../../assests/images/mcdonald.jpg")} />
                </View>
                <View>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>McDonals</Text>
                    <Text style={styles.titleText}>(45 min)</Text>
                    </View>
                
        
                    <Text>Delivery fee:250rs</Text>
                    <Text>Minimun Order:15</Text>
                    <Text style={styles.time}>08:00 AM -11:00 PM</Text>
                 </View>
            </View>
            <View style={styles.mealHeading}>
                    <Text style={styles.mealHeadingText}>*Free Pepsi with every meal*</Text>
                    </View>
            </Pressable>
            <Pressable style={styles.burgerkingBtn} onPress={() =>navigation.navigate("Nando")}>
            <View style={styles.internalkingView}>
                <View>
                
                    <Image style={styles.img1} source={require("../../../assests/images/nando.jpg")} />
                </View>
                <View>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>Nando's</Text>
                    <Text style={styles.titleText}>(45 min)</Text>
                    </View>
                
        
                    <Text>Delivery fee:250rs</Text>
                    <Text>Minimun Order:15</Text>
                    <Text style={styles.time}>08:00 AM -11:00 PM</Text>
                 </View>
            </View>
            <View style={styles.mealHeading}>
                    <Text style={styles.mealHeadingText}>*Free Pepsi with every meal*</Text>
                    </View>
            </Pressable>
            <Pressable style={styles.burgerkingBtn} onPress={() =>navigation.navigate("Burgersing")}>
            <View style={styles.internalkingView}>
                <View>
                
                    <Image style={styles.img1} source={require("../../../assests/images/burgersing.jpeg")} />
                </View>
                <View>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>Burger SING</Text>
                    <Text style={styles.titleText}>(45 min)</Text>
                    </View>
                
        
                    <Text>Delivery fee:250rs</Text>
                    <Text>Minimun Order:15</Text>
                    <Text style={styles.time}>08:00 AM -11:00 PM</Text>
                 </View>
            </View>
            <View style={styles.mealHeading}>
                    <Text style={styles.mealHeadingText}>*Free Pepsi with every meal*</Text>
                    </View>
            </Pressable>
        </ScrollView>
            
            
            </View>
        
    )
}
export default Homepage

