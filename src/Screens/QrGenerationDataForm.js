import React, {useState, useReducer, useRef} from 'react';
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
  ActivityIndicator,
  Keyboard,
  Alert,
  ToastAndroid,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
import color from '../colors/colors';
import {useSelector, useDispatch} from 'react-redux';
import {signUp} from '../redux/actions/Auth';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {qrDataFormCreate} from "../redux/actions/QrActions"


const QrDataForm = () => {


    const dataObj2 = {
        orderId: 16272,
        amount: 20000,
        purpose: "hellow", 
        walletId: phoneNumber
    }

    const dataObj = {
        orderId: "",
        amount: "",
        purpose: "", 
        walletId: phoneNumber
    }

    const dispatch = useDispatch();

    const nav = useNavigation()

    // to store phone number as wallet id in qrGeneration

    const {phoneNumber} = useSelector(state => state.auth)


    const onSubmit = () => {
        console.log(dataObj)
        let isNull = false;
        Object.entries(dataObj2).map((item) => {
            if(item[1] == "") {
                isNull = true
            }
        })

        if(!isNull) {
            ToastAndroid.show("success", ToastAndroid.SHORT)
            dispatch(qrDataFormCreate(dataObj))
            nav.navigate("QrGeneration")
        } else {
            ToastAndroid.show("Please fill all required fields", ToastAndroid.SHORT)
        }
    }

    return (
    
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <View style={styles.headerSection}>
                <Image
                  source={require('../images/signup.png')}
                  style={styles.logo}
                />
                <Text style={styles.welcomeText}>Welcome</Text>
              </View>
              <View style={styles.formContainer}>
                <Text style={styles.loginTitleText}>Enter Order Details</Text>
                <View style={styles.hr}></View>

                    <View style={styles.inputBox}>
                    <Text style={styles.inputLabel}>Order Id *</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Order Id"
                    keyboardType="default"
                    textContentType="name"
                    onChangeText={(val) => {
                        dataObj.orderId = val 
                    }}
                    />
                </View>

                    <View style={styles.inputBox}>
                        <Text style={styles.inputLabel}>Amount *</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="Amount"
                        keyboardType="number-pad"
                        textContentType="name"
                        onChangeText={(val) => {
                            dataObj.amount = val 
                        }}
                        />
                    </View>

                    <View style={styles.inputBox}>
                        <Text style={styles.inputLabel}>Purpose *</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="Purpose"
                        keyboardType="default"
                        textContentType="name"
                        onChangeText={(val) => {
                            dataObj.purpose = val 
                        }}
                        />
                    </View>
               
                  <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => {
                      onSubmit();
                    }}
                    >
                    <Text style={styles.loginButtonText}>Generate QR code</Text>
                  </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
      );
    };
    



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
      borderBottomRightRadius: 30,
    },
  
    welcomeText: {
      fontSize: RFValue(20, 580),
      fontWeight: 'bold',
      color: 'white',
      marginVertical: 10,
    },
    formContainer: {
      flex: 3,
      backgroundColor: 'white',
      marginTop: 20,
      margin: 20,
      padding: 10,
      borderRadius: 10,
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
      color: 'black',
    },
    input: {
      width: '100%',
      height: 40,
      borderWidth: 1,
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
    error: {
      color: 'red',
    },
  });


  export default QrDataForm;