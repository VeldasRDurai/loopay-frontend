import {
    REDIRECT_TO_HISTORY,
    REDIRECT_TO_PROFILE,
    REDIRECT_TO_NOTIFICATION,
    REDIRECT_TO_TRANSACTION_SEARCH,
    REDIRECT_TO_TRANSACTION_MAP_CHAT,
    REDIRECT_TO_TRANSACTION_SCAN_QR,
    REDIRECT_TO_TRANSACTION_FEEDBACK_PAGE,

    MAINPAGE_UPDATE_DETAILS,
} from './mainpageTypes';

const initialState = {
    mainpagePageState : undefined,
    mainpageDetails : undefined
    // mainpageAmount : undefined,
    // mainpageIsSoftCash: true,
    // mainpageRadius: undefined
}
const mainpageReducer = ( state = initialState, action ) => {
    switch( action.type ){
        case REDIRECT_TO_TRANSACTION_SEARCH : 
        case REDIRECT_TO_PROFILE : 
        case REDIRECT_TO_HISTORY : 
        case REDIRECT_TO_NOTIFICATION : 
        case REDIRECT_TO_TRANSACTION_MAP_CHAT :
        case REDIRECT_TO_TRANSACTION_SCAN_QR :
        case REDIRECT_TO_TRANSACTION_FEEDBACK_PAGE :
            return { ...state,
                mainpagePageState : action.type,
            }
        case MAINPAGE_UPDATE_DETAILS:
            return { ...state,
                mainpageDetails : action.details
                // mainpageAmount: action.amount,
                // mainpageIsSoftCash: action.isSoftCash,
                // mainpageRadius: action.radius
            }
        default :
            return state;
    }
}

export default mainpageReducer ;