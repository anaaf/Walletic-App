
import {baseUrl} from '../../Api/BaseUrl.js';
import {transferVarification} from './AuthConstants';


export const TransferAmount =(accountNo, amount, purpose, ) => {
 // console.log("received data on action creator:", accountNo,  amount,  purpose)
  return async( dispatch) => {
    let url=`${baseUrl}/api/account/userVerify/${accountNo}`
    try {
      console.log(url)
      const res = await fetch(url, {
        method: 'GET',
        body: JSON.stringify({
        
        }),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });
      const data = await res.json();
      console.log("res data",data);
     
     
      dispatch({type: transferVarification.RECEIVER_INFO, payload: data});
    
    } catch (err) {
     
      throw new Error('Your request is failed');
    }
  };
};

// verifying the otp code associated with that number

