import react, { useEffect, useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Text, Platform } from "react-native";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/core"




const Login = () => {
    const { input,
        buttonContainer,
        button,
        buttonOutline,
        container,
        inputContainer,
        buttonOutlineText,
        buttonText } = styles
    const [email, setEmail] = useState("")
    const [password, setPasword] = useState("")
    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("FullBook")
            }
            else {
                navigation.navigate("Login")
            }
        })
        return unsubscribe
    }, [])

    const handleSignUp = () => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user.email)
            })
            .catch((error) => {
                alert(error)

            });

    }
    const handleSignIn = () => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user.email)
            })
            .catch((error) => {
                alert(error)

            });

    }

    return (
        <KeyboardAvoidingView
            style={container}
            behavior="padding"
        >
            <View style={inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPasword(text)}
                    style={input}
                    secureTextEntry
                />

            </View>
            <View style={buttonContainer}>
                <TouchableOpacity
                    onPress={handleSignIn}
                    style={[button, buttonOutline]}
                >
                    <Text style={buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={button}
                >
                    <Text style={buttonOutlineText}>Register</Text>
                </TouchableOpacity>

            </View>

        </KeyboardAvoidingView>

    )

}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"

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
        marginTop: 10,
        borderRadius: 10


    },
    buttonText: {
        alignSelf: "center",
        color: "white",
        fontWeight: Platform.OS === "ios" ? 400 : "500",
        fontSize: 18

    },

    buttonOutlineText: {
        color: "#1eb6ff",
        alignSelf: "center",
        fontWeight: Platform.OS === "ios" ? 400 : "500",
        fontSize: 18

    },

    buttonContainer: {
        width: "40%",
        marginTop: 3,


    },

    button: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop: 15,
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderColor: "#1eb6ff",
        borderWidth: 2,
        backgroundColor: "white",





    },

    buttonOutline: {
        marginTop: 30,
        backgroundColor: "#1eb6ff",

    },




    // LoginCard: {

    //     paddingHorizontal: 100,
    //     paddingVertical: 20

    // }





})








export default Login