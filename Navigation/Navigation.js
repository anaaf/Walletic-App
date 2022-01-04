import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer, StackRouter} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// AUTH Screens
import NumberVarificationScreen from '../src/Screens/NumberVarificationScreen';
import OtpScreen from '../src/Screens/OtpScreen';
import SignInScreen from '../src/Screens/SignInScreen';
import SignupScreen from '../src/Screens/SignupScreen';
import Swicher from '../src/Screens/SwicherScreen';
import SwicherScreen from '../src/Screens/SwicherScreen';
import HomeScreen from '../src/Screens/App/HomeScreen';

const Stack = createStackNavigator();

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
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
