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
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
//import Icon from 'react-native-ionicons'
import Icon from 'react-native-vector-icons/FontAwesome';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
//npm i react-native-otp-inputs

import OTPInputView from '@twotalltotems/react-native-otp-input';
import color from '../colors/colors';
import {useSelector, useDispatch} from 'react-redux';
import {signUp} from '../../actions/Auth';
import {isLogBoxErrorMessage} from 'react-native/Libraries/LogBox/Data/LogBoxData';
const dew_Height = Dimensions.get('window').height;
const dew_Width = Dimensions.get('window').width;
const data = ['business, consumer'];

const intialState = {
  name: {fullname: '', isValid: false},
  emailAddress: {email: '', isValid: false},
  password: {pass: '', isValid: false},
  confirmPassword: {pass: '', isValid: false},
  isAllValid: {isValidAll: false},
};

const reducer = (state, action) => {
  if (action.type === 'FULL_NAME') {
    const exp = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/;
    const isValid = exp.test(action.payload);
    return {...state, name: {fullname: action.payload, isValid: isValid}};
  }
  if (action.type === 'VALIDATE_EMAIL') {
    const exp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    const isValid = exp.test(action.payload);
    return {...state, emailAddress: {email: action.payload, isValid: isValid}};
  }
  if (action.type === 'VALIDATE_PASSWORD') {
    const exp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValid = exp.test(action.payload);
    return {...state, password: {pass: action.payload, isValid: isValid}};
  }
  if (action.type === 'VALIDATE__CONFIRM_PASSWORD') {
    const isValid = state.password.pass === action.payload;
    return {
      ...state,
      confirmPassword: {pass: action.payload, isValid: isValid},
    };
  }
  if (action.type === 'ALL_VALIDATED') {
    let result = true;

    for (let val in state) {
      if (state[val]?.isValid == true || state[val]?.isValid == false) {
        result = result && state[val]?.isValid;
      }
      console.log(result, 'result');
    }
    console.log(result, 'this is your result');
    return {...state, isAllValid: {isValidAll: result}};
  }
  return state;
};
const SignupScreen = () => {
  // const state = useSelector(state => state.auth);
  const auth = useSelector(state => state.auth);
  const [state, dispatch] = useReducer(reducer, intialState);
  const [fnFocused, setfnFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emFocused, setEmFocused] = useState(false);
  const [pass, setPass] = useState(false);
  const [role, setRole] = useState('business');
  const nav = useNavigation();

  const [confirmPass, setConfirmPassword] = useState(false);
  const dispatchRedux = useDispatch();
  //   ^ - start of string
  // [a-zA-Z]{4,} - 4 or more ASCII letters
  // (?: [a-zA-Z]+){0,2} - 0 to 2 occurrences of a space followed with one or more ASCII letters
  // $ - end of string.

  const onSubmit = async () => {
    if (!state.isAllValid.isValidAll) {
      Alert.alert('Account Registration', 'Enter a valid credentials', [
        {text: 'Try Again', onPress: () => console.log('OK Pressed')},
      ]);
    } else {
      try {
        setLoading(true);
        const status = await dispatchRedux(
          signUp(
            state.name.fullname,
            state.emailAddress.email,
            state.password.pass,
            role,
          ),
        );
        console.log(status);
        if (status) {
          nav.navigate('HomeScreen');
          setLoading(false);
        }
      } catch (err) {
        let result = '';
        // if (err.error) {
        //   result = err.error;
        // } else if (err.message) {
        //   result = err.message;
        // }
        setLoading(false);
        Alert.alert('Account Registration', err.message, [
          {text: 'Try Again', onPress: () => console.log('OK Pressed')},
        ]);
      }
    }
  };
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
            <Text style={styles.loginTitleText}>Sign Up</Text>
            <View style={styles.hr}></View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Full Name (min 4 character)</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Full Name.."
                keyboardType="default"
                textContentType="name"
                onChangeText={val => {
                  dispatch({type: 'ALL_VALIDATED'});
                  dispatch({type: 'FULL_NAME', payload: val});
                }}
                value={state.name.fullname}
                onBlur={() => setfnFocused(true)}
              />
              {!state.name.isValid && fnFocused ? (
                <Text style={styles.error}>Your fullname is invalid!</Text>
              ) : (
                <Text></Text>
              )}
            </View>
            <View>
              <Text style={styles.inputLabel}>Select an Role </Text>
              <Picker
                ref={pickerRef}
                selectedValue={role}
                onValueChange={(itemValue, itemIndex) => setRole(itemValue)}>
                <Picker.Item label="Business" value="business" />
                <Picker.Item label="Consumer" value="consumer" />
              </Picker>
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Phone Number</Text>
              <TextInput
                style={styles.input}
                placeholder={auth?.phoneNumber}
                keyboardType="numeric"
                textContentType="name"
                editable={false}
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Email.."
                keyboardType="email-address"
                textContentType="name"
                onChangeText={val => {
                  dispatch({type: 'VALIDATE_EMAIL', payload: val});
                  dispatch({type: 'ALL_VALIDATED'});
                }}
                value={state.emailAddress.email}
                onBlur={() => setEmFocused(true)}
              />
              {!state.emailAddress.isValid && emFocused ? (
                <Text style={styles.error}>Your email address is invalid</Text>
              ) : (
                <Text></Text>
              )}
            </View>
            {/* Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:

"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" */}
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Enter Password.."
                textContentType="password"
                onChangeText={val => {
                  dispatch({type: 'VALIDATE_PASSWORD', payload: val});
                  dispatch({type: 'ALL_VALIDATED'});
                }}
                value={state.password.pass}
                onBlur={() => setPass(true)}
              />
              {!state.password.isValid && pass ? (
                <Text style={styles.error}>
                  Your password is invalid or weak
                </Text>
              ) : (
                <Text></Text>
              )}
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Confirm Password</Text>

              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Conform Password.."
                textContentType="password"
                onChangeText={val => {
                  dispatch({type: 'VALIDATE__CONFIRM_PASSWORD', payload: val});
                  dispatch({type: 'ALL_VALIDATED'});
                }}
                value={state.confirmPassword.pass}
                onBlur={() => setConfirmPassword(true)}
              />
              {!state.confirmPassword.isValid && confirmPass ? (
                <Text style={styles.error}>
                  Your confirm password do not match your password
                </Text>
              ) : (
                <Text></Text>
              )}
            </View>
            {loading ? (
              <ActivityIndicator size="large" color={color.primary} />
            ) : (
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => {
                  onSubmit();
                }}>
                <Text style={styles.loginButtonText}>Signup</Text>
              </TouchableOpacity>
            )}
            {/* 
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => {
                nav.goBack();
              }}>
              <Text style={styles.loginButtonText}>Back</Text>
            </TouchableOpacity> */}
          </View>
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

export default SignupScreen;
