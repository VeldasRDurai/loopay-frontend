import {
    LOGIN_INITIAL,

    LOGIN_RAISE_CURTAIN,
    LOGIN_UPDATE_EMAIL,
    LOGIN_UPDATE_PASSWORD,
    LOGIN_EMAIL_SHOW_WARNING,
    LOGIN_EMAIL_NO_WARNING,
    LOGIN_SHOW_PASSWORD,
    LOGIN_NO_PASSWORD,
    // LOGIN_PASSWORD_ZERO_LENGTH,
    // LOGIN_PASSWORD_LESS_LENGTH,
    // LOGIN_PASSWORD_WEAK,
    // LOGIN_PASSWORD_MEDIUM,
    // LOGIN_PASSWORD_STRONG
} from './loginStateTypes';

const typeSetter = type => ({ type })

const loginUpdateEmail = ({ email }) => ({
    type : LOGIN_UPDATE_EMAIL,
    email ,
});
const loginUpdatePassword = ({ password }) => ({
    type : LOGIN_UPDATE_PASSWORD,
    password
});

const loginInitial = () => typeSetter(LOGIN_INITIAL);

const loginRaiseCurtain     = () => typeSetter(LOGIN_RAISE_CURTAIN);
const loginShowPassword     = () => typeSetter(LOGIN_SHOW_PASSWORD) ;
const loginNoPassword       = () => typeSetter(LOGIN_NO_PASSWORD) ;
const loginEmailShowWarning = () => typeSetter(LOGIN_EMAIL_SHOW_WARNING) ;
const loginEmailNoWarning   = () => typeSetter(LOGIN_EMAIL_NO_WARNING) ;

// const loginPasswordZeroLength = () => typeSetter(LOGIN_PASSWORD_ZERO_LENGTH);
// const loginPasswordLessLength = () => typeSetter(LOGIN_PASSWORD_LESS_LENGTH);
// const loginPasswordWeak = () => typeSetter(LOGIN_PASSWORD_WEAK);
// const loginPasswordMedium = () => typeSetter(LOGIN_PASSWORD_MEDIUM);
// const loginPasswordStrong = () => typeSetter(LOGIN_PASSWORD_STRONG);
const loginPasswordShowWarning = type => typeSetter(type); 

export {
    loginInitial,
    
    loginRaiseCurtain,
    loginUpdateEmail,
    loginUpdatePassword,
    loginEmailShowWarning,
    loginEmailNoWarning,
    loginShowPassword,
    loginNoPassword,

    loginPasswordShowWarning,
    // loginPasswordZeroLength,
    // loginPasswordLessLength,
    // loginPasswordWeak,
    // loginPasswordMedium,
    // loginPasswordStrong

}