import {
    REDIRECT_TO_TRANSACTION_USER_PROFILE,

    // USER_PROFILE_REQUEST_NOT,
    USER_PROFILE_REQUEST_SEND,
    USER_PROFILE_REQUEST_CANCEL,
    USER_PROFILE_REQUEST_TIMER_EXPIRED,
    USER_PROFILE_REQUEST_ACCEPTED,
    USER_PROFILE_REQUEST_REJECTED
} from './TransactionSearchTypes';
const initialState = {
    transactionSearchPageState : undefined,
    selectedUserDetails : undefined,
    userProfileRequestState : USER_PROFILE_REQUEST_CANCEL,
    requestTimerExpiesOn : undefined
}
const transactionSearchReducer = ( state = initialState, action ) => {
    switch( action.type ){
        case REDIRECT_TO_TRANSACTION_USER_PROFILE :
            return { ...state,
                transactionSearchPageState: action.type,
                selectedUserDetails : action.details
            };
        
        case USER_PROFILE_REQUEST_SEND :
            action.timerExpiesOn
            return { ...state,
                userProfileRequestState: USER_PROFILE_REQUEST_SEND,
                requestTimerExpiesOn: action.requestTimerExpiesOn
            }
        case USER_PROFILE_REQUEST_CANCEL :
        case USER_PROFILE_REQUEST_TIMER_EXPIRED :
        case USER_PROFILE_REQUEST_ACCEPTED :
        case USER_PROFILE_REQUEST_REJECTED : 
            return { ...state,
                userProfileRequestState: action.type
            }      
        default : return state;
    }
}

export default transactionSearchReducer ;