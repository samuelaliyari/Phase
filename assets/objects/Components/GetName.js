
import React, {useState, setState, Component,  } from 'react'
import { View, Modal, StyleSheet, Text, TouchableOpacity,Platform   } from 'react-native'
import { TextInput } from "react-native-gesture-handler";
import showPopUp from "../Player"

class GetName extends Component {

  constructor()
  {
    super();
    this.state={
      show:true
    }

  }


  


  render () {

    const submit= () => {
      this.setState({show:false})
    }
    
    const setNames = (props) => {
      this.setState({show:this.props})

    }


    return(
      <View>
        <Modal 
        transparent= {true}
        visible= {this.state.show}
        >
          <View style={styles.Modal}>
          <View style= {styles.inputContainer}>
                <TextInput 
                placeholder="Player 1 "
                value = {""}
                onChangeText={text => setPlayer1(text)}
                style={[styles.input, styles.upperPlayer]}
                />
                <TextInput 
                placeholder="Player2"
                value = {""}
                onChangeText={text => setPasword(player2) }
                style={styles.input}
                
                />
                <TextInput 
                placeholder="Player3"
                value = {""}
                onChangeText={text => setPasword(player3) }
                style={styles.input}
                
                />
                <TextInput 
                placeholder="Player4"
                value = {""}
                onChangeText={text => setPasword(player4) }
                style={styles.input}
                
                />

            </View>
            <View style= {styles.buttonContainer}>
                <TouchableOpacity
                    // onPress={handleSignIn}
                  style={styles.button}
                  onPress={submit}
                >
                    <Text style= {styles.modalButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
          </View>

        </Modal>
        </View>
      



    )
  }
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },

  popUp:
  {
    justifyContent: "center",
    alignContent: "center",
    position: "absolute"
  },

  Modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex start",
    backgroundColor: "#615F5FEF",
    marginHorizontal: 10,
    marginVertical: 100,
    marginBottom: 350,
    borderRadius: 20,

    

    
  },

inputContainer: {

  width: "80%"
},

input: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderColor: "black",
    borderWidth: 0.5,
    fontSize: 20,
    marginTop: 25,
    borderRadius: 10
    

},

upperPlayer: {

  marginTop: 60,
  borderRadius: 10

},
button: {
  paddingHorizontal: 30,
  paddingVertical: 10,
  marginTop:40,
  alignContent: "center",
  justifyContent: "center",
  borderRadius: 10,
  borderColor: "#1eb6ff",
  borderWidth: 2,
  backgroundColor: "#1eb6ff",
},

buttonContainer:{

},

modalButtonText:{
  fontSize: 20,
  color: "white",
  fontWeight: Platform.OS === "ios" ? 400 : 500,

}



})

export default GetName;