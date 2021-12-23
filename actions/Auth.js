import {phoneVerfication} from './AuthConstants';
import {baseUrl} from '../Api/BaseUrl';
export const verifyPhone = phoneNumber => {
  //   verifying phone number and delivering msg on mobile
  return async dispatch => {
    try {
      const res = await fetch(`${baseUrl}/verify/phon`, {
        method: 'POST',
        body: JSON.stringify({
          phoneNo: `+92${phoneNumber}`,
        }),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });

      if (res.status != 200) {
        throw new Error('your request is failed');
      } else {
        // success
        dispatch({type: phoneVerfication.VERIFY_PHONE, payload: phoneNumber});
        return true; // to suggest ready to navigate
      }
    } catch (err) {
      throw new Error('Your request is failed');
    }
  };
};

// verifying the otp code associated with that number

export const verifyCode = otpCode => {
  return async (dispatch, getState) => {
    // console.log(getState().auth.phoneNumber, 'state');
    try {
      const phoneNumber = getState().auth.phoneNumber;
      console.log(phoneNumber);
      const res = await fetch(`${baseUrl}/verify/code`, {
        method: 'POST',
        body: JSON.stringify({
          code: otpCode,
          phoneNo: `+92${phoneNumber}`,
        }),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });
      // console.log(res.status);
      // console.log(res);
      const data = await res.json();
      if (!data.verification_check.valid) {
        throw new Error('Your request is not failed!');
      }

      const result = {isValid: data.verification_check.valid};
      // console.log(result);
      dispatch({type: phoneVerfication.VERIFY_CODE, payload: result});
      return true;
    } catch (err) {
      throw new Error('Your request is failed!');
    }
  };
};
