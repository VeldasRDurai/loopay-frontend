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
    // currentPage : undefined,
    mobilePageStat : LOADING,
    loginPageStat  : LOGIN,
    forgetPasswordPageStat : FORGET_PASSWORD,
    forgetPasswordOtpPageStat : FORGET_PASSWORD_OTP,
    // loginPageStat  : FORGET_PASSWORD,

    // forgetPasswordClick : undefined,
    // forgetPasswordOtpClick : undefined,
    // newPasswordClick : undefined
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
                forgetPasswordOtpPageStat : undefined,
                // forgetPasswordClick : undefined   
            }
            case FORGET_PASSWORD :
                return { ...state,
                    mobilePageStat : LOGIN,
                    loginPageStat : FORGET_PASSWORD,
                    forgetPasswordPageStat : undefined,
                    forgetPasswordOtpPageStat : undefined,
                    // forgetPasswordClick : action.forgetPasswordClick
                }
                case FORGET_PASSWORD_OTP :
                    return { ...state,
                        mobilePageStat : LOGIN,
                        loginPageStat : FORGET_PASSWORD,
                        forgetPasswordPageStat : FORGET_PASSWORD_OTP,
                        forgetPasswordOtpPageStat : undefined,
                        // forgetPasswordOtpClick : action.forgetPasswordOtpClick,
                    }
                    case NEW_PASSWORD :
                    return { ...state,
                        mobilePageStat : LOGIN,
                        loginPageStat : FORGET_PASSWORD,
                        forgetPasswordPageStat : FORGET_PASSWORD_OTP,
                        forgetPasswordOtpPageStat : NEW_PASSWORD,
                        // newPasswordClick : action.newPasswordClick,
                    }
        case SIGNUP : 
            return { ...state,
                mobilePageStat : SIGNUP   
            }

        default : 
            return state;
    }
};    

export default pageReducer;