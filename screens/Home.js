
import { navigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TextInput, TextInputComponent, Platform, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useEffect, useState } from "react"
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Component } from "react";
import Login from "./Login"


export default function Home({navigation}) {
  const onpressFS = () =>{navigation.navigate("FastBook")}
  const onpressFB = () =>{navigation.navigate("Login")}

    const [text, setText] = useState("")
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/logo/1.png")}
          style={styles.img}
        />
        <Text style={styles.title}>Notebook</Text>
  
  

        <TouchableOpacity style={styles.touchable} onPress={onpressFS}>
        
        
            <Text style={styles.buttonText}>Fast Start</Text>
        


        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable} onPress={onpressFB}>
        
        
            <Text style={styles.buttonText}>Full Game</Text>
        


        </TouchableOpacity>


  
  
  
  
        <StatusBar style="auto" />
        
  
      </View>
  
  
    );
  }

  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Platform.OS === "ios" ? "white" : "white",
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      marginTop: 0,
      paddingVertical: 8,
      color: 'black',
      textAlign: 'center',
      fontSize: 15,
      fontWeight: Platform.OS === "ios" ? 400 : "500",
      
      
    },
    img:
    {
      height: 100,
      width: 100,
      marginBottom: -10,

    },
    input:
    {
      height: 40,
      width: 160,
      margin: 12,
      padding: 10,
      fontSize: 15,
      
      borderColor: "black",
      borderWidth: 2
  
    },
    touchable:
    {
      height: 40,
      width: 160,
      backgroundColor: "rgb(60, 148, 250)",
      borderRadius: 10,
      margin: 10
      


    },
    buttonText:
    {
      textAlign: 'center',
      color: "white",
      fontSize: 20,
      fontWeight: Platform.OS === "ios" ? 400 : "500",
      justifyContent: "center",
      marginTop: Platform.OS === "ios" ? 8 : 7


    }
    
  });
  
  