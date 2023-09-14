// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu4Bj0fVLDLXaxR1c2YR5DPOEjG0WAYvc",
  authDomain: "login-8e0ef.firebaseapp.com",
  projectId: "login-8e0ef",
  storageBucket: "login-8e0ef.appspot.com",
  messagingSenderId: "247265946088",
  appId: "1:247265946088:web:61a80e26f4d42fb4f85c5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth}