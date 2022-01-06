import React, {useState, useEffect, useReducer} from 'react';
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
  Alert,
  ActivityIndicator,
} from 'react-native';
//import Icon from 'react-native-ionicons'
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import color from '../colors/colors';
import {useDispatch, useSelector} from 'react-redux';
import {phoneVerfication} from '../../actions/AuthConstants';
import {verifyPhone} from '../../actions/Auth';
import {set} from 'react-native-reanimated';
const dew_Height = Dimensions.get('window').height;
const dew_Width = Dimensions.get('window').width;

const intialState = {
  message: '',
};
const reducer = (state, action) => {
  if (action.type === 'ERROR_HANDLING') {
    return {...state, message: action.payload};
  }
  return state;
};

const NumberVarificationScreen = () => {
  const [errorState, dispatchFunc] = useReducer(reducer, intialState);
  const [phoneNo, setPhoneNo] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const nav = useNavigation();
  const state = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const onSubmit = async () => {
    // validation complete but error handling remains
    const exp = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm;
    if (!phoneNo) {
      return Alert.alert('Invalid Phone Number', 'Enter a valid Phone Number', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else if (!exp.test(phoneNo)) {
      return Alert.alert('Invalid Phone Number', 'Enter a valid Phone Number', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
    try {
      setLoading(true);
      const status = await dispatch(verifyPhone(phoneNo));
      if (status) {
        setLoading(false);
        nav.navigate('OtpScreen');
      }
    } catch (err) {
      dispatchFunc({type: 'ERROR_HANDLING', payload: 'your request is failed'});
    }
  };
  console.log('re-renders');
  useEffect(() => {
    if (errorState.message) {
      Alert.alert('Network Error', errorState.message, [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      setLoading(false);
      dispatchFunc({type: 'ERROR_HANDLING', payload: ''});
    }
  });
  // onPress={Keyboard.dismiss}
  return (
    <TouchableWithoutFeedback accessible={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../images/logo1.png')} style={styles.logo} />
        </View>

        <View style={{flex: 1, backgroundColor: 'white'}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.getText}>Get Started</Text>
            <Text style={styles.text}>Enter Your Mobile Number</Text>
            <TextInput
              //onChangeText={}
              type="number"
              keyboardType="numeric"
              placeholder={'3XX-XXXXXXX'}
              required
              autoFocus={true}
              placeholderTextColor="#D5D5D5"
              style={styles.input}
              value={phoneNo}
              onChangeText={setPhoneNo}
              maxLength={10}
            />
            {loading ? (
              <ActivityIndicator size="large" color={color.primary} />
            ) : (
              <TouchableOpacity style={styles.button} onPress={onSubmit}>
                <View
                  style={{
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Text style={styles.buttonText}>Sign up</Text>
                  <Icon
                    name="arrow-right"
                    size={RFValue(18, 580)}
                    color="white"
                  />
                </View>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={{...styles.button, marginTop: 10}}
              onPress={() => nav.navigate('Login')}>
              <View
                style={{
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Text style={styles.buttonText}>Login</Text>
                <Icon
                  name="arrow-right"
                  size={RFValue(18, 580)}
                  color="white"
                />
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

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
    borderBottomRightRadius: 30,
  },
  logo: {
    width: '80%',
    height: '70%',
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
    borderRadius: 15,
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: color.primary,
    paddingHorizontal: 30,
    //marginVertical:20,
    width: dew_Width / 1.5,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: RFValue(20, 580),
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 12,
    borderRadius: 15,
    marginHorizontal: 40,
  },
});

export default NumberVarificationScreen;
