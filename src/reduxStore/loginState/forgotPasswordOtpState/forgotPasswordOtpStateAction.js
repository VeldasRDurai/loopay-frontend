import {
    LOGIN_FORGOT_PASSWORD_OTP_INITIAL,
    LOGIN_FORGOT_PASSWORD_OTP_UPDATE_OTP,
    LOGIN_FORGOT_PASSWORD_OTP_SHOW_WARNING,
    LOGIN_FORGOT_PASSWORD_OTP_NO_WARNING
} from './forgotPasswordOtpStateTypes';

const typeSetter = type => ({ type })

const loginForgotPasswordOtpInitial = () => typeSetter(LOGIN_FORGOT_PASSWORD_OTP_INITIAL);
const loginForgotPasswordOtpShowWarning = () => typeSetter(LOGIN_FORGOT_PASSWORD_OTP_SHOW_WARNING) ;
const loginForgotPasswordOtpNoWarning = () => typeSetter(LOGIN_FORGOT_PASSWORD_OTP_NO_WARNING) ;
const loginForgotPasswordOtpUpdateOtp = ({ otp }) => ({
    type : LOGIN_FORGOT_PASSWORD_OTP_UPDATE_OTP,
    otp
});

export {
    loginForgotPasswordOtpInitial,
    loginForgotPasswordOtpUpdateOtp,
    loginForgotPasswordOtpShowWarning,
    loginForgotPasswordOtpNoWarning
}