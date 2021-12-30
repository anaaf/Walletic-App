import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../src/Screens/TabScreens/HomeScreen';
import QrScanner from '../src/Screens/TabScreens/QrScanner';
import UserAccountScreen from '../src/Screens/TabScreens/UserAccountScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Icon as Icons} from 'react-native-ionicons';
import color from '../src/colors/colors';
import { createStackNavigator } from '@react-navigation/stack';
import TransferFormScreen from '../src/Screens/TransferFormScreen';
//import color from '../../colors/colors';


const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const TransferStackNavigator=()=>{
    return(
    <Stack.Navigator screenOptions={{
      }}>
         <Stack.Screen name="PhoneScreen" component={HomeScreen} options={{ headerShown:false }}/>
         <Stack.Screen name="transferForm" component={TransferFormScreen}  options={{ 
             headerShown:false ,
             }}/>
    </Stack.Navigator>
    )
}

const BottomTabNavigator=()=>{
  return (
    <Tab.Navigator tabBarOptions={{
        labelPosition: 'below-icon',
        activeTintColor: 'tomato',
      
        inactiveTintColor: color.primary,
        style: {
            // Remove border top on both android & ios
            borderTopWidth: 0,
            borderTopColor: "transparent",
            elevation: 0,
            shadowColor: '#5bc4ff',
            shadowOpacity: 0,
          
            shadowOffset: {
                height: 0,
            },
            shadowRadius: 0,
        },
        tabStyle: {
            //backgroundColor:  '#FBF7F5',
        },
        labelStyle: {
            fontWeight: 'bold',
            fontSize: 11,
        },
    }}>
      <Tab.Screen name="Home" component={TransferStackNavigator}  options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="home" color={color} size={size} />
                        ),
                    }} />
     
      <Tab.Screen name="Scanner" component={QrScanner} options={{
                       
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="qrcode" color={color} size={size} />
                        ),
      }}/>
      <Tab.Screen name="Account" component={UserAccountScreen} options={{
                       
                       tabBarIcon: ({ color, size }) => (
                           <Icon name="user" color={color} size={size} />
                       ),
     }}/>
     
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;