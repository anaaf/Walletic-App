import {phoneVerfication} from './AuthConstants';
import {baseUrl} from '../../Api/BaseUrl.js';
import { Alert } from 'react-native';

export const fetchBlanceInfo = (userId, token) => {
    return async (dispatch, getState) => {
      // const phoneNumber = getState().auth.phoneNumber;
     
     let url=`${baseUrl}/api/account/user/${userId}`
     console.log(url)
      console.log('Blance API CALLED');
      try {
        const res =  await fetch(url, {
         method: 'POST',
         body: JSON.stringify({
            "token": token
           
         }),
         headers: {
           'Content-Type': 'application/json; charset=UTF-8',
           
         },
       });
       const data = await res.json();
       console.log(data)
      await dispatch({type: phoneVerfication.ACCOUNT_DATA, payload: data});
       return true;
       
      // return true;
     } catch (err) {
       Alert.alert(
         err.message + "!",
              "Check your network and try again", [
              { text: 'OK' },]
      )
     }
   };
  };

  