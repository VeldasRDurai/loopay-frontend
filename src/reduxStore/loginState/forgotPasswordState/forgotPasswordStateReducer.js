import {
    LOGIN_FORGOT_PASSWORD_UPDATE_EMAIL,
    LOGIN_FORGOT_PASSWORD_SHOW_WARNING,
    LOGIN_FORGOT_PASSWORD_NO_WARNING
} from './forgotPasswordStateTypes';

const initialState = {
    forgotPasswordEmail: undefined,
    forgotPasswordEmailShowWarning : false,
}

const forgotPasswordStateReducer = ( state = initialState , action ) => {
    switch( action.type ){
        case LOGIN_FORGOT_PASSWORD_UPDATE_EMAIL :
            return { ...state,
                forgotPasswordEmail: action.email
            }
        case LOGIN_FORGOT_PASSWORD_SHOW_WARNING :
            return { ...state,
                forgotPasswordEmailShowWarning : true
            }
        case LOGIN_FORGOT_PASSWORD_NO_WARNING :
            return { ...state,
                forgotPasswordEmailShowWarning : false
            }
        default : 
            return state;
    
    }
}

export default forgotPasswordStateReducer;