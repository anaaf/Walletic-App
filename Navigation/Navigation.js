import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer, StackRouter} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import NumberVarificationScreen from '../src/Screens/NumberVarificationScreen';
import OtpScreen from '../src/Screens/OtpScreen';
import SignInScreen from '../src/Screens/SignInScreen';
import SignupScreen from '../src/Screens/SignupScreen';

const Stack = createStackNavigator();

const MainContainer = () => {
  // screenOptions is the prop of stack.navigator
  // options is the prop of stack.screen
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignInScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="PhoneScreen" component={NumberVarificationScreen} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
