import {
    LOGIN_FORGOT_PASSWORD_OTP_INITIAL,
    LOGIN_FORGOT_PASSWORD_OTP_UPDATE_OTP,
    LOGIN_FORGOT_PASSWORD_OTP_SHOW_WARNING,
    LOGIN_FORGOT_PASSWORD_OTP_NO_WARNING
} from './forgotPasswordOtpStateTypes';

const initialState = {
    forgotPasswordOtp: undefined,
    forgotPasswordOtpShowWarning : false,
}

const forgotPasswordOtpStateReducer = ( state = initialState , action ) => {
    switch( action.type ){
        case LOGIN_FORGOT_PASSWORD_OTP_INITIAL :
            return initialState
        case LOGIN_FORGOT_PASSWORD_OTP_UPDATE_OTP :
            return { ...state,
                forgotPasswordOtp: action.otp
            }
        case LOGIN_FORGOT_PASSWORD_OTP_SHOW_WARNING :
            return { ...state,
                forgotPasswordOtpShowWarning : true
            }
        case LOGIN_FORGOT_PASSWORD_OTP_NO_WARNING :
            return { ...state,
                forgotPasswordOtpShowWarning : false
            }
        default : 
            return state;
    
    }
}

export default forgotPasswordOtpStateReducer;