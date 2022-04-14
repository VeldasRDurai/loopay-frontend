import {
    REDIRECT_TO_LOADING,
    REDIRECT_TO_MAINPAGE,
    REDIRECT_TO_FORGET_USERNAME,

    REDIRECT_TO_LOGIN, 
    REDIRECT_TO_FORGET_PASSWORD, 
    REDIRECT_TO_FORGET_PASSWORD_OTP, 
    REDIRECT_TO_NEW_PASSWORD, 

    REDIRECT_TO_SIGNUP, 
    REDIRECT_TO_SIGNUP_OTP, 
    REDIRECT_TO_PERSONAL_DETAILS, 
} from './authenticationPageTypes' ;

const typeSetter = ( TYPE ) =>
    ({ type: TYPE });

const redirectToMainpage  = () => typeSetter( REDIRECT_TO_MAINPAGE );
const redirectToLoading   = () => typeSetter( REDIRECT_TO_LOADING  );

const redirectToLogin     = () => typeSetter( REDIRECT_TO_LOGIN );
const redirectToForgetUsername = () => typeSetter( REDIRECT_TO_FORGET_USERNAME );
const redirectToForgetPassword = () => typeSetter( REDIRECT_TO_FORGET_PASSWORD );
const redirectToForgetPasswordOtp = () => typeSetter( REDIRECT_TO_FORGET_PASSWORD_OTP );
const redirectToNewPassword = () => typeSetter( REDIRECT_TO_NEW_PASSWORD );

const redirectToSignup    = () => typeSetter( REDIRECT_TO_SIGNUP ); 
const redirectToSignupOtp = () => typeSetter( REDIRECT_TO_SIGNUP_OTP );
const redirectToPersonalDetails = () => typeSetter( REDIRECT_TO_PERSONAL_DETAILS );


export {
    redirectToMainpage,
    redirectToLoading,

    redirectToLogin,
    redirectToForgetUsername,
    redirectToForgetPassword,
    redirectToForgetPasswordOtp,
    redirectToNewPassword,

    redirectToSignup,
    redirectToSignupOtp,
    redirectToPersonalDetails,
}