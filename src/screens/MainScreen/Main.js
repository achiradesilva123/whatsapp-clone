import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';




//Screens //
import Camera from './SubScreen/Camera';
import Chat from './SubScreen/Chat';
import Status from './SubScreen/Status';
import Calls from './SubScreen/Calls';
import Octicons from "react-native-vector-icons/Octicons";
import Fontisto from 'react-native-vector-icons/Fontisto'

const Tab = createMaterialTopTabNavigator();

export default function Main() {
  return (
     <Tab.Navigator
      tabBarOptions = {
       {
        'activeTintColor' :'#fff',
        style : {
          "backgroundColor" : '#0C6557'
        },
        indicatorStyle : {
          "backgroundColor" : '#fff',
          "height" : 4
        },
        labelStyle: {
          "fontWeight" : 'bold'
        },
         showIcon : true,
       }
      }
     >
       <Tab.Screen name="Camera" component={Camera}
        options = {{
           tabBarIcon : () =>   <Fontisto name="camera"  size={18} color={'white'}/>,
           tabBarLabel : () => null
        }}
       />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Status" component={Status} />
        <Tab.Screen name="Calls" component={Calls} />
      </Tab.Navigator>

  );
}
