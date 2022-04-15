import {
    LOGIN_INITIAL,

    LOGIN_RAISE_CURTAIN,
    LOGIN_UPDATE_EMAIL,
    LOGIN_UPDATE_PASSWORD,
    LOGIN_EMAIL_SHOW_WARNING,
    LOGIN_EMAIL_NO_WARNING,
    LOGIN_SHOW_PASSWORD,
    LOGIN_NO_PASSWORD,
    LOGIN_PASSWORD_ZERO_LENGTH,
    LOGIN_PASSWORD_LESS_LENGTH,
    LOGIN_PASSWORD_WEAK,
    LOGIN_PASSWORD_MEDIUM,
    LOGIN_PASSWORD_STRONG
} from './loginStateTypes';

const initialState = {
    raiseCurtain : false,

    email: undefined,
    emailShowWarning : false,

    password : undefined,
    passwordShowWarning : false,
    showPassword : false
}

const loginStateReducer = ( state = initialState , action ) => {
    switch( action.type ){
        case LOGIN_INITIAL:
            return initialState
        case LOGIN_RAISE_CURTAIN :
            return { ...state,
                raiseCurtain : true
            }
        case LOGIN_UPDATE_EMAIL :
            return { ...state,
                email: action.email
            }
        case LOGIN_UPDATE_PASSWORD :
            return { ...state,
                password: action.password
            }
        case LOGIN_EMAIL_SHOW_WARNING :
            return { ...state,
                emailShowWarning : true
            }
        case LOGIN_EMAIL_NO_WARNING :
            return { ...state,
                emailShowWarning : false
            }
        case LOGIN_SHOW_PASSWORD : 
            return { ...state,
                showPassword : true
            }
        case LOGIN_NO_PASSWORD : 
            return { ...state,
                showPassword : false
            }

// password warnings
        case LOGIN_PASSWORD_ZERO_LENGTH :
        case LOGIN_PASSWORD_LESS_LENGTH :
        case LOGIN_PASSWORD_WEAK :
        case LOGIN_PASSWORD_MEDIUM :
        case LOGIN_PASSWORD_STRONG :
            return { ...state,
                passwordShowWarning : action.type
            }
        default : 
            return state;
    
    }
}

export default loginStateReducer;