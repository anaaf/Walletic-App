import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from "../Screens/Dashboard"
import {NavigationContainer} from "@react-navigation/native";



const LoginStack = createNativeStackNavigator()

export default class Navigator extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavigationContainer>
                <LoginStack.Navigator>
                    <LoginStack.Screen name="Dashboard" component={Dashboard}  />
                </LoginStack.Navigator>
            </NavigationContainer>
        );
    }

}