import { StyleSheet, Text, View } from 'react-native'
import React , {createContext, useState} from 'react'
export const createCox = createContext();
export default function Context({children}) {
    const [number,setNumber] = useState('');
    const [name,setName]=useState("");
    const [address,setAddress]=useState("");
    const [email,setEmail]=useState("");
    const[phoneno,setPhoneno]=useState("");
    const [goHomePage, setGoHomePage]= useState(false);
    const value = {
        number,setNumber,
        name,setName,
        address,setAddress,
        email,setEmail,
        phoneno,setPhoneno,goHomePage, setGoHomePage
    }
  return (
    <createCox.Provider value={value}>
{children}
    </createCox.Provider>
  )
}

const styles = StyleSheet.create({})