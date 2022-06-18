
import {baseUrl} from '../../Api/BaseUrl.js';



export const TransferAmount =(accountNo, amount, purpose, ) => {
  console.log("received data:", accountNo,  amount,  purpose)
  return async dispatch => {
    try {
      const res = await fetch(`${baseUrl}/api/account/transfer`, {
        method: 'POST',
        body: JSON.stringify({
         'accountNo':accountNo,
         'amount':amount,
         'purpose':purpose
        }),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });
      const respose = await res.json();
      console.log(respose);
    
    } catch (err) {
     
      throw new Error('Your request is failed');
    }
  };
};

// verifying the otp code associated with that number

