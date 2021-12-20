import React, { useState } from 'react';
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
//npm i react-native-otp-inputs
import OTPInputView from '@twotalltotems/react-native-otp-input'
import color from '../colors/colors';

const dew_Height = Dimensions.get('window').height
const dew_Width = Dimensions.get('window').width

const SignInScreen = () => {
  
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.headerSection}>

                        <Image source={require('../images/signin.png')} style={styles.logo} />
                        <Text style={styles.welcomeText}>Welcome</Text>

                    </View>
                    <View style={styles.formContainer}>

                        <Text style={styles.loginTitleText}>Sign In</Text>
                        <View style={styles.hr}></View>
                        
                        <View style={styles.inputBox}>
                            <Text style={styles.inputLabel}>Email/Phone Number</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Enter Email/Phone Number..'
                                keyboardType='email-address'
                                textContentType='name'
                            />
                        </View>
                        <View style={styles.inputBox}>
                            <Text style={styles.inputLabel}>Password</Text>
                            <TextInput
                                style={styles.input}
                                secureTextEntry={true}
                                placeholder='Enter Password..'
                                textContentType='password'
                            />

                        </View>
                     




                        <TouchableOpacity style={styles.loginButton}>
                            <Text style={styles.loginButtonText}>SIGN IN</Text>
                        </TouchableOpacity>





                    </View>

                </View>
            </ScrollView>
        </TouchableWithoutFeedback>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 4,


    },
    headerSection: {
        flex: 1,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        backgroundColor: color.primary,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },

    welcomeText: {
        fontSize: RFValue(20, 580),
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 10


    },
    formContainer: {
        flex: 3,
        backgroundColor: 'white',
        marginTop: 20,
        margin: 20,
        padding: 10,
        borderRadius: 10


    },
    loginTitleText: {
        fontSize: RFValue(20, 580),
        color: 'black',
        fontWeight: 'bold',
        marginTop: 0,
    },


    hr: {
        width: '100%',
        height: 0.5,
        backgroundColor: '#444',
        marginTop: 6,
    },
    inputBox: {
        marginTop: 10,
    },
    inputLabel: {
        fontSize: RFValue(16, 580),
        marginBottom: 6,
        color: 'black'
    },
    input: {
        width: '100%',
        height: 40,
        backgroundColor: '#dfe4ea',
        borderRadius: 4,
        paddingHorizontal: 10,
    },
    loginButton: {
        backgroundColor: color.primary,
        marginTop: 20,
        paddingVertical: 10,
        borderRadius: 4,
    },
    loginButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },

})

export default SignInScreen;