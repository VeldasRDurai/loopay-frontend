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
    mobilePageStat : LOADING
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
                mobilePageStat : LOGIN   
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