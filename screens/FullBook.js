import React from 'react';

import { StyleSheet, Text, View, Button, TextInput, TextInputComponent, Platform, Image, TouchableWithoutFeedback } from 'react-native';
import { useEffect, useState } from "react"

import { StatusBar } from 'expo-status-bar';


export default function Full() {

    const [text, setText] = useState("")
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/logo/1.png")}
          style={styles.img}
        />
        <Text style={styles.title}>Notebook</Text>
  
  
        <TextInput 
  
          placeholder="Number of Players"
          placeholderTextColor="gray"
          keyboardType="number-pad"
          textAlign="center"       
          value={text}
          onChangeText={setText}
          style={styles.input}
          fontWeight= "bold"
          
          
        />
  
  
  
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
      // borderWidth: 4,
      // borderColor: '#20232a',
      // borderRadius: 6,
      // backgroundColor: '#61dafb',
      color: 'black',
      textAlign: 'center',
      fontSize: 15,
      fontWeight: Platform.OS === "ios" ? 400 : "500",
      
      
    },
    img:
    {
      height: 100,
      width: 100,
      marginBottom: -10
    },
    input:
    {
      height: 40,
      width: 160,
      margin: 12,
      padding: 10,
      fontSize: 12,
      
      borderColor: "black",
      borderWidth: 2
  
    }
  });
  
  