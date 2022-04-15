import { combineReducers, createStore } from 'redux';

import profileReducer  from './profile/profileReducer';
import deviceReducer from './device/deviceReducer';
// import pageReducer from './page/pageReducer';
import authenticationPageReducer from './page/authenticationPage/authenticationPageReducer';

import loginStateReducer from './loginState/loginStateReducer';
import forgotPasswordStateReducer from './loginState/forgotPasswordState/forgotPasswordStateReducer';
import forgotPasswordOtpStateReducer from './loginState/forgotPasswordOtpState/forgotPasswordOtpStateReducer';
import newPasswordStateReducer from './loginState/newPasswordState/newPasswordStateReducer';

const rootReducer = combineReducers({
    profile  : profileReducer,
    device : deviceReducer,
    // page : pageReducer,
    authenticationPage : authenticationPageReducer,
    loginState : loginStateReducer,
    forgotPasswordState: forgotPasswordStateReducer,
    forgotPasswordOtpState: forgotPasswordOtpStateReducer,
    newPasswordState: newPasswordStateReducer
});

const store = createStore( rootReducer );

export default store;