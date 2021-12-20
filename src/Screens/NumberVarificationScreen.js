import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'
//import Icon from 'react-native-ionicons'
import Icon from 'react-native-vector-icons/FontAwesome';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import color from '../colors/colors';


const dew_Height = Dimensions.get('window').height
const dew_Width = Dimensions.get('window').width

const NumberVarificationScreen = () => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../images/logo1.png')} style={styles.logo} />
                </View>

                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={styles.getText}>Get Started</Text>
                        <Text style={styles.text}>Enter Your Mobile Number</Text>
                        <TextInput
                            //onChangeText={}
                            type='number'
                            keyboardType='numeric'
                            placeholder={'03XX-XXXXXXX'}
                            required
                            minLength={11}
                            autoFocus={true}
                            placeholderTextColor='#D5D5D5'
                            style={styles.input}



                        />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={''} >
                            <View style={{ justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
                                <Text style={styles.buttonText}>Next</Text>
                                <Icon name="arrow-right" size={RFValue(18, 580)} color="white" />
                            </View>
                        </TouchableOpacity>

                    </ScrollView>
                </View>

            </View>
        </TouchableWithoutFeedback>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 2,

    },
    header: {
        flex: 1,
        backgroundColor: color.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    logo: {
        width: "80%",
        height: "70%"
    },
    getText: {
        fontSize: RFValue(25, 580),
        fontWeight: 'bold',
        color: 'black',
        marginVertical: 10,
        textAlign: 'center',

    },
    text: {
        fontSize: RFValue(16, 580),
        fontWeight: '700',
        textAlign: 'center',

    },
    input: {
        fontSize: RFValue(24, 580),
        alignSelf: 'center',
        color: 'gray',
        borderWidth: 1,
        paddingHorizontal: 30,
        marginVertical: 20,
        borderRadius: 15
    },
    button: {
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: "center",
        backgroundColor: color.primary,
        paddingHorizontal: 30,
        //marginVertical:20,
        width: dew_Width / 1.5,
        borderRadius: 10
    },
    buttonText: {
        fontSize: RFValue(20, 580),
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 12,
        borderRadius: 15,
        marginHorizontal: 40
    }

})

export default NumberVarificationScreen;