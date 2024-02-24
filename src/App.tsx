import { FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { countryData } from './constants'
import CountryButton from './components/CountryButton'
import Snackbar from 'react-native-snackbar';

export default function App():JSX.Element {

  const [inputVlue,setInputValue] = useState("");
  const [convertedValue,setConvertedValue] = useState("");

  const buttonPressed = (data:currencyType) => {

    if(!inputVlue){
      return Snackbar.show({
        text:"Value is not provided",
        backgroundColor:"lightseagreen",
        
      })
    }

      const value = parseFloat(inputVlue)
      const convertedValue = value * data.value;
      setConvertedValue(`${data.flag} ${data.symbol} ${convertedValue}`)
    
  }
  return (
   <>
    <StatusBar backgroundColor={"#123"}/>
    <View style={styles.mainContainer}>
       <View style={styles.converter}>
           <TextInput placeholder='₹ Enter Indian Rupees Value' maxLength={10} keyboardType='number-pad' clearButtonMode='always' value={inputVlue} onChangeText={setInputValue} style={styles.textInput}  />
           { <Text style={styles.convetedValue}>{convertedValue}</Text>}
       </View>
       <SafeAreaView style={styles.listContainer}>
        <FlatList   numColumns={3} data={countryData} keyExtractor={(item) => item.name} renderItem={({item}) => <TouchableOpacity onPress={() => buttonPressed(item)}><CountryButton {...item}/></TouchableOpacity>}/>
       </SafeAreaView>
    </View>
   </>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:"#123"
  },
  textInput:{
    borderWidth:2,
    borderColor:"#222",
    
    borderRadius:10,
    width:"80%",
    textAlign:"center",
    backgroundColor:"#000"
  },
  converter:{
    // borderWidth:2,
    // borderColor:"#000",
    // borderRadius:10, 
    alignItems:"center",
    justifyContent:"center",
    marginVertical:30,
    paddingVertical:30,
    gap:20,
   
  },
  convetedValue:{
    fontSize:18
  },
  listContainer:{
    flex:1,
    alignItems:"center",
    
  },
})