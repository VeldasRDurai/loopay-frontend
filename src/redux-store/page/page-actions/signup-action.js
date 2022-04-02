import {
    SIGNUP, 
    SIGNUP_OTP, 
    SIGNUP_PERSONAL_DETAILS
} from '../page-types';

const redirectToSignup = () => ({ type : SIGNUP });
const redirectToSignupOtp = () => ({ type : SIGNUP_OTP });
const redirectToSignupPersonalDetails = () => ({ type : SIGNUP_PERSONAL_DETAILS });

export {
    redirectToSignup,
    redirectToSignupOtp,
    redirectToSignupPersonalDetails
}