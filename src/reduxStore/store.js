import { combineReducers, createStore } from 'redux';

import profileReducer  from './profile/profileReducer';
import deviceReducer from './device/deviceReducer';
// import pageReducer from './page/pageReducer';

import loginStateReducer from './loginState/loginStateReducer';
import forgotPasswordStateReducer from './loginState/forgotPasswordState/forgotPasswordStateReducer';
import authenticationPageReducer from './page/authenticationPage/authenticationPageReducer';

const rootReducer = combineReducers({
    profile  : profileReducer,
    device : deviceReducer,
    // page : pageReducer,
    authenticationPage : authenticationPageReducer,
    loginState : loginStateReducer,
    forgotPasswordState: forgotPasswordStateReducer
});

const store = createStore( rootReducer );

export default store;