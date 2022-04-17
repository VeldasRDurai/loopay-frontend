import {
    PROFILE_LOG_IN,
    PROFILE_LOG_OUT, 
    PROFILE_SIGN_UP, 
    PROFILE_SIGN_UP_VERIFIED 
} from './profileTypes';

const initialState = {
    authenterisedUser : false,
    email : undefined,
    verificationCode : undefined
}

const profileReducer = ( state = initialState , action ) => {
    switch( action.type ){
        case PROFILE_LOG_IN : 
            return { ...state, 
                authenterisedUser : true,
                email   : action.email
            }
        case PROFILE_LOG_OUT :
            return { ...state,
                authenterisedUser : false,
                email   : undefined
            }
        case PROFILE_SIGN_UP :
            return { ...state,
                email : action.email
            }
        case PROFILE_SIGN_UP_VERIFIED :
            return { ...state,
                authenterisedUser:true
            }
        default : 
            return state;
    }
}

export default profileReducer;