import {
    NEW_PASSWORD_INITIAL,
    NEW_UPDATE_PASSWORD,
    NEW_SHOW_PASSWORD,
    NEW_NO_PASSWORD,
    NEW_PASSWORD_ZERO_LENGTH,
    NEW_PASSWORD_LESS_LENGTH,
    NEW_PASSWORD_WEAK,
    NEW_PASSWORD_MEDIUM,
    NEW_PASSWORD_STRONG
} from './newPasswordStateTypes';

const initialState = {
    password : undefined,
    showPassword : false,
    passwordShowWarning : false
}

const newPasswordStateReducer = ( state = initialState , action ) => {
    switch( action.type ){
        case NEW_PASSWORD_INITIAL :
            return initialState
        case NEW_UPDATE_PASSWORD:
            return { ...state,
                password : action.password
            }
        case NEW_SHOW_PASSWORD : 
            return { ...state,
                showPassword : true
            }
        case NEW_NO_PASSWORD : 
            return { ...state,
                showPassword : false
            }

// password warnings
        case NEW_PASSWORD_ZERO_LENGTH :
        case NEW_PASSWORD_LESS_LENGTH :
        case NEW_PASSWORD_WEAK :
        case NEW_PASSWORD_MEDIUM :
        case NEW_PASSWORD_STRONG :
            return { ...state,
                passwordShowWarning : action.type
            }
        default : 
            return state;
    
    }
}

export default newPasswordStateReducer;