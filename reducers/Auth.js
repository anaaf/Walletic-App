import {phoneVerfication} from '../actions/AuthConstants';
const intialState = {
  phoneNumber: null,
  isNumberVerified: false,
};
export default auth = (state = intialState, action) => {
  if (action.type === phoneVerfication.VERIFY_PHONE) {
    return {...state, phoneNumber: action.payload};
  } else if (action.type === phoneVerfication.VERIFY_CODE) {
    return {...state, isNumberVerified: action.payload.isValid};
  }
  return state;
};
