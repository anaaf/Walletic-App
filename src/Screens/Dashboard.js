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


import Card from '../Components/Card'



export default class Dashboard extends React.Component {

    render(){
        return(
            <View>
                <Card>
                    <Text>Hello World</Text>
                </Card>
            </View>
        );
    }
}