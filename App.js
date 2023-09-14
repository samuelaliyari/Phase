import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { elements } from "@react-navigation/elements";
import Home from "./screens/Home";
import Memory from "./screens/Memory";
import Fast from "./screens/FastBook";
import Full from "./screens/FullBook";
import Login from './screens/Login';
import GetName  from "./assets/objects/Components/GetName";
import { FadeOut } from "react-native-reanimated";
import { Platform } from "react-native";
import { useFonts } from "expo-font";



const Drawer = createDrawerNavigator();

function App() {
  const [loaded]= useFonts ({
    Cake: require ("./assets/fonts/Cakecafe.ttf"),
    Friends: require ("./assets/fonts/Friends.otf"),
    Hamburg: require ("./assets/fonts/Hamburg.ttf"),
    Pastamore: require ("./assets/fonts/Pastamore.ttf"),
    PurpleQ: require ("./assets/fonts/PurpleQ.ttf"),
    Numbers: require ("./assets/fonts/numbers.ttf"),
    AB: require ("./assets/fonts/ArialBold.ttf"),
    Impact: require ("./assets/fonts/Impact.ttf"),
    bigNum: require ("./assets/fonts/wedgie.ttf")

  })
  if (!loaded) {
    return null
    
  }


  
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: 'rgba(65, 151, 250, 0.9)',
            width: 170,
            keyboardDismissMode: "on-drag",
            paddingTop: 30
            
          }, 
          drawerLabelStyle: {color: "#ffffff", 
          fontSize: 17,
          fontWeight: Platform.OS === "ios" ? 400 : "500",

          },
          overlayColor: "rgba(1, 28, 71, 0.3)",
          drawerActiveBackgroundColor: "rgba(5, 119, 250, 0.5)",
          drawerStatusBarAnimation: "fade"


        }
      }
      
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="FastBook" component={Fast} />
        <Drawer.Screen name="FullBook" component={Full} />
        <Drawer.Screen name="Memory" component={Memory} />
        <Drawer.Screen name="Login" component={Login} />
      </Drawer.Navigator>
      
    </NavigationContainer>

  );
}

export default App;