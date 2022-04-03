import {
    LOGIN, 
    FORGET_PASSWORD, 
    FORGET_PASSWORD_OTP, 
    NEW_PASSWORD,
} from '../pageTypes';


const redirectToLogin = () => ({ type : LOGIN });
const redirectToForgetPassword = () => ({ type : FORGET_PASSWORD });
const redirectToForgetPasswordOtp = () => ({ type : FORGET_PASSWORD_OTP });
const redirectToNewPassword = () => ({ type : NEW_PASSWORD });

// const redirectToForgetPassword = forgetPasswordClick => ({ 
//     type : FORGET_PASSWORD,
//     forgetPasswordClick
// });
// const redirectToForgetPasswordOtp = forgetPasswordOtpClick => ({ 
//     type : FORGET_PASSWORD_OTP,
//     forgetPasswordOtpClick
// });
// const redirectToNewPassword = newPasswordClick => ({ 
//     type : NEW_PASSWORD,
//     newPasswordClick
// });

export {
    redirectToLogin,
    redirectToForgetPassword,
    redirectToForgetPasswordOtp,
    redirectToNewPassword
}