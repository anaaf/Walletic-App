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
    Keyboard,
    ImageBackground
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
    const [passwordSecured, setPasswordSecured]=useState(true);
  
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      
            
           


                <View style={styles.container}>
                    <View style={styles.headerSection}>

                        <Image source={require('../images/signin.png')} style={styles.logo} />
                        <Text style={styles.welcomeText}>Login</Text>

                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.formContainer}>
                       
                   

                

                       <Text style={styles.loginTitleText}>Please Login to continue</Text>
                        <View style={styles.hr}></View>
                       
                            <Text style={styles.inputLabel}>Email/Phone Number</Text>
                            <View style={styles.inputView}>
                             <Icon color='#333' name='user' type='font-awesome' size={20}/>   
                            <TextInput
                                style={styles.input}
                                placeholder='Enter Email/Phone Number..'
                                keyboardType='email-address'
                                textContentType='name'
                            />
                            </View>
                      
                     
                            <Text style={styles.inputLabel}>Password</Text>
                            <View style={styles.inputView}>
                                <Icon color='#333' name='lock' type='font-awesome' size={20}/>
                            <TextInput
                                style={styles.input}
                                secureTextEntry={true}
                                secureTextEntry={passwordSecured}
                                placeholder='Enter Password..'
                                textContentType='password'
                            />
                             <TouchableOpacity 
                                        //style={{marginRight:100}}
                                         onPress={()=>{
                                        setPasswordSecured(!passwordSecured);
                                    }}>
                                      <Icon name='eye' type='font-awesome-5' size={20}/>

                </TouchableOpacity>
               
               </View>

                    
                     




                        <TouchableOpacity style={styles.loginButton}>
                            <Text style={styles.loginButtonText}>Login</Text>
                        </TouchableOpacity>

                        <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', marginTop:10}}>
                               <Text style={styles.forgetText}>Forgot Password?</Text>
                        <TouchableOpacity style={{ margin:10}}>
                           
                               <Text style={styles.resetButtonText}>Rest Now</Text>

                        </TouchableOpacity>
                            </View>





             
                    </View>
            </ScrollView>
                 </View>
               
          
        </TouchableWithoutFeedback>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 3,
        position: 'absolute',
        //backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'space-between'


    },
    headerSection: {
        flex: 1.2,
        width: '100%',
       // position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        backgroundColor: color.primary,
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
    
    },

    welcomeText: {
        fontSize: RFValue(20, 580),
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 10


    },
    formContainer: {
        flex:1.5 ,
         alignContent: 'center',
        justifyContent: 'center',
         backgroundColor: 'white',
        //marginTop:200,
        marginHorizontal:20,
        marginVertical:40,
          padding: 20,
        
       borderRadius:10
        
       

        


    },
    loginTitleText: {
        fontSize: RFValue(14, 580),
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
    inputView:{
        width: '100%',
        height: RFValue(45, 580),
        backgroundColor: '#E1E1F5',
        paddingHorizontal: 10,
        //justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 30,
       
    },
    inputLabel: {
        fontSize: RFValue(12, 580),
        marginTop: 6,
        fontWeight: 'bold',
        color: 'black'
    },
    input: {
        width: '90%',
        height: RFValue(45, 580),
        marginVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        
        
        

    },
    loginButton: {
        height: RFValue(45, 580),
        backgroundColor: color.primary,
        marginTop: 20,
        paddingVertical: 10,
        borderRadius: 30,
    },
    loginButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    forgetText:{
        fontSize: RFValue(12, 580),
        alignSelf: 'center',
       
        color: 'black',
        fontWeight:'500'
    },
    resetButtonText:{
        fontSize: RFValue(12, 580),
        alignSelf: 'center',
        color: color.primary,
       
        fontWeight:'bold'

    }

})

export default SignInScreen;