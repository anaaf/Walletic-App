import React, {useEffect} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
const SwicherScreen = () => {
  const nav = useNavigation();
  AsyncStorage.getItem('user_data')
    .then(jsonValue => {
      if (jsonValue != null) {
        jsonValue = JSON.parse(jsonValue);
        console.log(jsonValue, 'async');
        // formate of jwt exp
        // The number is the number of seconds since Jan 1 1970
        if (jsonValue.token) {
          const date = new Date();
          const currentTimeMs = date.getTime();
          const futureExpTimeMs = jsonValue.exp * 1000;
          //   console.log(futureExpTimeMs, '1');
          //   console.log(currentTimeMs, '2');
          if (futureExpTimeMs >= currentTimeMs) {
            nav.navigate('HomeScreen');
          }
        } else {
          nav.navigate('Auth');
        }
      } else {
        nav.navigate('Auth');
      }
    })
    .catch(err => {
      console.log(err);
    });

  return <></>;
};

export default SwicherScreen;
