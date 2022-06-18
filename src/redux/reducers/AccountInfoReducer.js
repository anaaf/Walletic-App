import {phoneVerfication} from '../actions/AuthConstants';
const intialState = {
  accountData: null,
 
};
export default AccountInfo = (state = intialState, action) => {
  if (action.type === phoneVerfication.ACCOUNT_DATA) {
    console.log("AccountInfo")
    return {...state, accountData: action.payload};

  } 
  return state;

};


