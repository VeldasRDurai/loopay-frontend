import {
    ABOUT, 
    LOGIN, 
    FORGET_PASSWORD, 
    FORGET_PASSWORD_OTP, 
    NEW_PASSWORD, 
    SIGNUP, 
    SIGNUP_OTP, 
    SIGNUP_PERSONAL_DETAILS, 
    MAINPAGE, 
    PROFILE, 
    EDIT_DETAILS, 
    EDIT_PASSWORD, 
    ADD_NEW_PASSWORD, 
    USER_SETTINGS, 
    APPLICATION_SUPPORT, 
    APPLICATION_FEEDBACK, 
    HISTORY, 
    HISTORY_TRANSACTION, 
    HISTORY_TRANSACTION_CHAT, 
    NOTIFICATION, 
    SEARCH, 
    USER_PROFILE, 
    MAP_CHAT, 
    SCAN_QR, 
    FEEDBACK_PAGE,
    LOADING
} from './pageTypes';

const initialState = {
    mobilePageStat : LOADING,

    loginPageStat  : LOGIN,
    forgetPasswordPageStat : FORGET_PASSWORD,
    forgetPasswordOtpPageStat : FORGET_PASSWORD_OTP,

    signupPageStat : SIGNUP,
}

const pageReducer = ( state = initialState, action ) => {
    switch( action.type ){
        case LOADING : 
            return { ...state,
                mobilePageStat : LOADING
            }
        case MAINPAGE : 
            return { ...state,
                mobilePageStat : MAINPAGE   
            }
        case LOGIN : 
            return { ...state,
                mobilePageStat : LOGIN,
                loginPageStat : undefined,
                forgetPasswordPageStat : undefined,
                forgetPasswordOtpPageStat : undefined
            }
            case FORGET_PASSWORD :
                return { ...state,
                    mobilePageStat : LOGIN,
                    loginPageStat : FORGET_PASSWORD,
                    forgetPasswordPageStat : undefined,
                    forgetPasswordOtpPageStat : undefined
                }
                case FORGET_PASSWORD_OTP :
                    return { ...state,
                        mobilePageStat : LOGIN,
                        loginPageStat : FORGET_PASSWORD,
                        forgetPasswordPageStat : FORGET_PASSWORD_OTP,
                        forgetPasswordOtpPageStat : undefined
                    }
                    case NEW_PASSWORD :
                    return { ...state,
                        mobilePageStat : LOGIN,
                        loginPageStat : FORGET_PASSWORD,
                        forgetPasswordPageStat : FORGET_PASSWORD_OTP,
                        forgetPasswordOtpPageStat : NEW_PASSWORD,
                    }
        case SIGNUP : 
            return { ...state,
                mobilePageStat : SIGNUP,
                signupPageStat : undefined   
            }
            case SIGNUP_OTP:
                return { ...state,
                    mobilePageStat : SIGNUP,
                    signupPageStat : SIGNUP_OTP
                }
            case SIGNUP_PERSONAL_DETAILS :
                return { ...state,
                    mobilePageStat : SIGNUP,
                    signupPageStat : SIGNUP_PERSONAL_DETAILS
                }
        default : 
            return state;
    }
};    

export default pageReducer;