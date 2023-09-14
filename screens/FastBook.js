import React from 'react';
import { Component } from "react";
import { StyleSheet, Text, View, Button, TextInput, TextInputComponent, Platform, Image, TouchableWithoutFeedback } from 'react-native';
import { useEffect, useState } from "react"

import { StatusBar } from 'expo-status-bar';

import Player from '../assets/objects/Player';
export default function Fast() {

    const [text, setText] = useState("")

    return (
      <>
         <View>
          
          <Player/>
        
  
         </View>
      
      </>
  
  
    );
  }

  
  
  const styles = StyleSheet.create({
    container: {

    },

  });
  
  