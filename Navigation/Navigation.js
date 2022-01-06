import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer, StackRouter} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// AUTH Screens
import Icon from 'react-native-ionicons';
import NumberVarificationScreen from '../src/Screens/NumberVarificationScreen';
import OtpScreen from '../src/Screens/OtpScreen';
import SignInScreen from '../src/Screens/SignInScreen';
import SignupScreen from '../src/Screens/SignupScreen';
// import Swicher from '../src/Screens/SwicherScreen';
import SwicherScreen from '../src/Screens/SwicherScreen';
import HomeScreen from '../src/Screens/App/HomeScreen';
import QrScanner from '../src/Screens/App/QrScanner';
import UserAccountScreen from '../src/Screens/App/UserAccountScreen';
import color from '../src/colors/colors';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelPosition: 'below-icon',
        activeTintColor: 'tomato',

        inactiveTintColor: color.primary,
        style: {
          // Remove border top on both android & ios
          borderTopWidth: 0,
          borderTopColor: 'transparent',
          elevation: 0,
          shadowColor: '#5bc4ff',
          shadowOpacity: 0,

          shadowOffset: {
            height: 0,
          },
          shadowRadius: 0,
        },
        tabStyle: {
          // backgroundColor: '#FBF7F5',
        },
        labelStyle: {
          fontWeight: 'bold',
          fontSize: 11,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Scanner"
        component={QrScanner}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="qr-scanner" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={UserAccountScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="PhoneScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="PhoneScreen" component={NumberVarificationScreen} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="SignUpScreen" component={SignupScreen} />
    </Stack.Navigator>
  );
};
const LoginNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
    </Stack.Navigator>
  );
};

const MainContainer = () => {
  // screenOptions is the prop of stack.navigator
  // options is the prop of stack.screen
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Switch" component={SwicherScreen} />
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen name="Login" component={LoginNavigator} />
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
        <Stack.Screen name="HomeScreen" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
