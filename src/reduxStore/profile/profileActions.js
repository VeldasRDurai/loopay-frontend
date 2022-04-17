import {
    PROFILE_LOG_IN,
    PROFILE_LOG_OUT, 
    PROFILE_SIGN_UP, 
    PROFILE_SIGN_UP_VERIFIED 
} from './profileTypes';

const profileLogIn = ({ email }) => {
    return { 
        type : PROFILE_LOG_IN, 
        email
    }
}

const profileLogOut = () => ({ type : PROFILE_LOG_OUT });
const profileSignUp = ({ email }) => ({
    email,
    type: PROFILE_SIGN_UP,
});
const profileSignUpVerification = () => ({ type: PROFILE_SIGN_UP_VERIFIED });
export { 
    profileLogIn, 
    profileLogOut,
    profileSignUp,
    profileSignUpVerification
};