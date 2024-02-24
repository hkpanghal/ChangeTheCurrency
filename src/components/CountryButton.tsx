import { StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'

type buttonType =  PropsWithChildren<{
    flag:string,
    name:string
}>
export default function CountryButton(data:buttonType):JSX.Element {
  return (
    <View style={styles.container}>
       <Text style={styles.flag}>{data.flag}</Text>
       <Text >{data.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
       
        borderWidth:2,
        borderColor:"#222",
        borderRadius:10,
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:10,
        height:100,
        width:100,
        margin:10,
        backgroundColor:"#000"
    },
    flag:{
        fontSize:25
    },

})