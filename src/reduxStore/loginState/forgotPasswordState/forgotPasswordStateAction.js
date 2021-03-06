import {
    LOGIN_FORGOT_PASSWORD_INITIAL,
    LOGIN_FORGOT_PASSWORD_UPDATE_EMAIL,
    LOGIN_FORGOT_PASSWORD_SHOW_WARNING,
    LOGIN_FORGOT_PASSWORD_NO_WARNING
} from './forgotPasswordStateTypes';

const typeSetter = type => ({ type })

const loginForgotPasswordInitial = () => typeSetter(LOGIN_FORGOT_PASSWORD_INITIAL);
const loginForgotPasswordShowWarning = () => typeSetter(LOGIN_FORGOT_PASSWORD_SHOW_WARNING) ;
const loginForgotPasswordNoWarning = () => typeSetter(LOGIN_FORGOT_PASSWORD_NO_WARNING) ;
const loginForgotPasswordUpdateEmail = ({ email }) => ({
    type : LOGIN_FORGOT_PASSWORD_UPDATE_EMAIL,
    email
});

export {
    loginForgotPasswordInitial,
    loginForgotPasswordUpdateEmail,
    loginForgotPasswordShowWarning,
    loginForgotPasswordNoWarning
}