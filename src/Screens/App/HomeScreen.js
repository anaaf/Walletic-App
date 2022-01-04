import React from 'react';
import {Text, View, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../../../actions/Auth';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const HomeScreen = () => {
  const state = useSelector(state => state);
  console.log(state);
  const nav = useNavigation();
  const dispatch = useDispatch();
  const log_out = async () => {
    dispatch(logout());
    await AsyncStorage.clear();
    nav.navigate('Login');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button onPress={log_out} title="logout" />
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
