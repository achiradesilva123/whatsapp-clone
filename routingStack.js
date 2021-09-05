import React from 'react';

import {NavigationContainer,DefaultTheme,DarkTheme } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {ColorSchemeName} from "react-native/Libraries/Utilities/NativeAppearance";

// Screens //
import Landing from './src/screens/LandingScreen/Landing';
import Main from './src/screens/MainScreen/Main';
import { View } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createStackNavigator();

export default function routingStack( {colorScheme} : {colorScheme : ColorSchemeName} ) {
  return(
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  )
}

 function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Landing" component={Landing}
                    options={{
                      headerShown: false
                    }}
      />
      <Stack.Screen name="Main" component={Main}
                    options={{
                      title : 'WhatsApp',
                      headerStyle: {
                        backgroundColor : '#0C6557',
                        shadowOpacity : 0,
                        elevation : 0
                      },
                      headerLeft : () => null,
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                        fontFamily :'sans-serif'
                      },
                      headerTitleAlign: 'left',
                      headerRight : () => {
                        return(
                          <View style={{ flexDirection : 'row' , width : 60 , justifyContent:'space-between' , marginRight : 10}}>
                            <Octicons name="search"  size={22} color={'white'}/>
                            <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'} />
                          </View>
                        )
                      }
                    }}
      />
    </Stack.Navigator>
  );
}



