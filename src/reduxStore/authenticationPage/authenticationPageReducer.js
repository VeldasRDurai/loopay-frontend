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


const initialState = {
    mobilePageState : REDIRECT_TO_LOADING,
    signupPageState : REDIRECT_TO_SIGNUP,
    loginPageState  : REDIRECT_TO_LOGIN,
    forgotPasswordPageState : REDIRECT_TO_FORGET_PASSWORD,
    forgotPasswordOtpPageState : REDIRECT_TO_FORGET_PASSWORD_OTP,
}

const authenticationPageReducer = ( state = initialState, action ) => {
    switch( action.type ){
        // 1.
        case REDIRECT_TO_LOADING : 
            return { ...state,
                mobilePageState : REDIRECT_TO_LOADING
            };
        // 2.
        case REDIRECT_TO_MAINPAGE :
            return { ...state,
                mobilePageState : REDIRECT_TO_MAINPAGE
            };
        // 3.
        case REDIRECT_TO_LOGIN :
            return { ...state,
                mobilePageState : REDIRECT_TO_LOGIN,

                loginPageState  : REDIRECT_TO_LOGIN,
                forgotPasswordPageState : REDIRECT_TO_FORGET_PASSWORD,
                forgotPasswordOtpPageState : REDIRECT_TO_FORGET_PASSWORD_OTP
            };
            // 3.1
            case REDIRECT_TO_FORGET_PASSWORD :   
                return { ...state,
                    mobilePageState : REDIRECT_TO_LOGIN,
                    loginPageState  : REDIRECT_TO_FORGET_PASSWORD,

                    forgotPasswordPageState : REDIRECT_TO_FORGET_PASSWORD,
                    forgotPasswordOtpPageState : REDIRECT_TO_FORGET_PASSWORD_OTP
                };
                // 3.1.1  
                case REDIRECT_TO_FORGET_PASSWORD_OTP :
                    return { ...state,
                        mobilePageState : REDIRECT_TO_LOGIN,
                        loginPageState  : REDIRECT_TO_FORGET_PASSWORD,
                        forgotPasswordPageState : REDIRECT_TO_FORGET_PASSWORD_OTP,

                        forgotPasswordOtpPageState : REDIRECT_TO_FORGET_PASSWORD_OTP
                    };  
                    // 3.1.1.1
                    case REDIRECT_TO_NEW_PASSWORD :
                        return { ...state,
                            mobilePageState : REDIRECT_TO_LOGIN,
                            loginPageState  : REDIRECT_TO_FORGET_PASSWORD,
                            forgotPasswordPageState : REDIRECT_TO_FORGET_PASSWORD_OTP,
                            forgotPasswordOtpPageState : REDIRECT_TO_NEW_PASSWORD
                        };  
            
            // 3.2
            case REDIRECT_TO_FORGET_USERNAME :   
                return { ...state,
                    mobilePageState : REDIRECT_TO_LOGIN,
                    loginPageState  : REDIRECT_TO_FORGET_USERNAME
                };
        // 4
        case REDIRECT_TO_SIGNUP :
            return { ...state,
                mobilePageState : REDIRECT_TO_SIGNUP,
                signupPageState : REDIRECT_TO_SIGNUP
            };
            // 4.1
            case REDIRECT_TO_SIGNUP_OTP :
                return { ...state,
                    mobilePageState : REDIRECT_TO_SIGNUP,
                    signupPageState : REDIRECT_TO_SIGNUP_OTP
                };
        // 5
        case REDIRECT_TO_PERSONAL_DETAILS :
            return { ...state,
                mobilePageState : REDIRECT_TO_PERSONAL_DETAILS
            };

        default : 
            return state;
    }
};    

export default authenticationPageReducer;