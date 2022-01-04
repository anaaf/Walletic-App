import React, {useState, useReducer} from 'react';
import Regex from '../../Extras/Regex';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
//import Icon from 'react-native-ionicons'
import Icon from 'react-native-vector-icons/FontAwesome';

import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
//npm i react-native-otp-inputs
import OTPInputView from '@twotalltotems/react-native-otp-input';
import color from '../colors/colors';
import {login} from '../../actions/Auth';

const dew_Height = Dimensions.get('window').height;
const dew_Width = Dimensions.get('window').width;
const intialState = {
  username: {uname: '', isValid: false, isFocused: false},
  password: {pass: '', isValid: false, isFocused: false},
  isAllValid: {isValid: false, isFocused: false},
};
const reducer = (state, action) => {
  if (action.type === 'USERNAME_STATE') {
    let isValid = false;
    const phoneRegex = Regex.phoneRegex;
    const isValidPhoneNo = phoneRegex.test(action.payload);
    const emailRegex = Regex.emailRegex;
    const isValidEmailAddress = emailRegex.test(action.payload);
    if (isValidEmailAddress || isValidPhoneNo) {
      isValid = true;
    } else {
      isValid = false;
    }
    return {
      ...state,
      username: {...state.username, uname: action.payload, isValid: isValid},
    };
  } else if (action.type === 'USERNAME_FOCUSED') {
    return {...state, username: {...state.username, isFocused: true}};
  } else if (action.type === 'PASSWORD_VALIDATE') {
    // console.log(action.payload);
    const passwordRegex = Regex.passwordRegex;
    const isValid = passwordRegex.test(action.payload);
    return {
      ...state,
      password: {...state.password, pass: action.payload, isValid},
    };
  } else if (action.type === 'PASSWORD_FOCUSED') {
    return {
      ...state,
      password: {...state.password, isFocused: true},
    };
  } else if (action.type === 'VALIDATE_ALL') {
    let isValid = true;
    let j = 0;
    for (let i in state) {
      // increase the number if you increase the input field
      if (j != 2) {
        console.log(state[i].isValid, 'isValid');
        isValid = isValid && state[i].isValid;
      }
      j++;
    }
    console.log(isValid, 'isValididity');
    return {...state, isAllValid: {...state.isAllValid, isValid: isValid}};
  }
  return state;
};
const SignInScreen = () => {
  const dispatchRedux = useDispatch();
  const [loading, setLoading] = useState(false);
  const nav = useNavigation();
  const [state, dispatch] = useReducer(reducer, intialState);

  console.log(state);

  const signIn = async () => {
    if (!state.isAllValid.isValid) {
      return Alert.alert(
        'Invalid Login Credentials',
        'Enter a valid Phone Number/Email and password',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      );
    } else {
      try {
        setLoading(true);
        const status = await dispatchRedux(
          login(state.username.uname, state.password.pass),
        );
        if (status) {
          nav.navigate('HomeScreen');
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
        return Alert.alert('Login Failed!', err.message, [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.headerSection}>
            <Image
              source={require('../images/signin.png')}
              style={styles.logo}
            />
            <Text style={styles.welcomeText}>Welcome</Text>
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.loginTitleText}>Sign In</Text>
            <View style={styles.hr}></View>

            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Email/Phone Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Email/Phone Number.."
                keyboardType="email-address"
                textContentType="name"
                onChangeText={val => {
                  dispatch({type: 'USERNAME_STATE', payload: val});
                  dispatch({type: 'VALIDATE_ALL'});
                }}
                onBlur={() => dispatch({type: 'USERNAME_FOCUSED'})}
                value={state.username.uname}
              />
              {!state.username.isValid && state.username.isFocused ? (
                <Text style={{color: 'red'}}>
                  Your Email or Phone is Invalid{' '}
                </Text>
              ) : (
                <Text></Text>
              )}
            </View>

            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Enter Password.."
                textContentType="password"
                value={state.password.pass}
                // onchangeText={val =>
                //   dispatch({type: 'PASSWORD_VALIDATE', payload: val})
                // }
                onChangeText={val => {
                  dispatch({type: 'PASSWORD_VALIDATE', payload: val});
                  dispatch({type: 'VALIDATE_ALL'});
                }}
                onBlur={() => dispatch({type: 'PASSWORD_FOCUSED'})}
              />
              {!state.password.isValid && state.password.isFocused ? (
                <Text style={{color: 'red'}}>Your password is invalid</Text>
              ) : (
                <Text></Text>
              )}
            </View>
            {loading ? (
              <ActivityIndicator size="large" color={color.primary} />
            ) : (
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => signIn()}>
                <Text style={styles.loginButtonText}>SIGN IN</Text>
              </TouchableOpacity>
            )}

            {/* <View style={{marginTop: 20}}>
              <TouchableOpacity onPress={() => nav.navigate('SignUpScreen')}>
                <Text
                  style={{
                    color: color.primary,
                    fontWeight: 'bold',
                    fontSize: 20,
                  }}>
                  Create an Account?
                </Text>
              </TouchableOpacity>
            </View> */}
          </View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => nav.goBack()}>
            <Text style={styles.loginButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
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
});

export default SignInScreen;
