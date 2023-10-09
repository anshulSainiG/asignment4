import { StyleSheet, Text, View, Pressable, Image, ImageSourcePropType } from 'react-native'
import React, { useState,useEffect } from 'react'
import { styles } from './style'

type itemProps = {
    price: number;
    name: string;
    description: string;
    image: ImageSourcePropType;
    Setshowprice: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function List(props:itemProps) {
    const [changecolor, Setchangecolor] = useState(false)
    const { Setshowprice,price } = props

   

    const sum = (newprice:number) => {

        Setshowprice(price => 
           
                [...price,
                newprice,
                ]
        )
    }
   
    const setremove = (newprice:number) => {
        
            Setshowprice(currentprice => 
                currentprice.filter((itemprice) => itemprice != newprice)
            
            )
        }

     const onPresshandler=(price:number)=>{
        Setchangecolor(!changecolor);
        if (!changecolor) {
            sum(price);
        }
        else {
            setremove(price)
        }

      }

       
    


        return (
            <Pressable style={styles.mainButton} onPress={()=>onPresshandler(price)}>
                <View style={[styles.mainContainer,{ backgroundColor: changecolor ? "blue" : "white"}]}>
                    <View>

                        <Image style={styles.img} source={props.image} />
                    </View>
                    <View>
                        <View style={styles.innerView}>
                            <Text style={styles.innerName}>{props.name}</Text>
                            <Text style={styles.innerPrice}>{price}</Text>
                        </View>


                        <Text style={styles.innerDescription}>{props.description}</Text>

                    </View>
                </View>

            </Pressable>
        )

    }
