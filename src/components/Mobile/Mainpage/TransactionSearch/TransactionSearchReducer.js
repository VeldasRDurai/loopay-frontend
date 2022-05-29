import {
    REDIRECT_TO_TRANSACTION_USER_PROFILE,

    // USER_PROFILE_REQUEST_NOT,
    USER_PROFILE_REQUEST_SEND,
    USER_PROFILE_REQUEST_CANCEL,
    USER_PROFILE_REQUEST_TIMER_EXPIRED,
    USER_PROFILE_REQUEST_ACCEPTED,
    USER_PROFILE_REQUEST_REJECTED
} from './TransactionSearchTypes';

import {
    REDIRECT_TO_TRANSACTION_SEARCH
} from '../mainpageTypes';

const initialState = {
    transactionSearchPageState : undefined,
    selectedUserDetails : undefined,
    userProfileRequestState : USER_PROFILE_REQUEST_CANCEL,
    rejectedUsers : [],
    requestTimerExpiesOn : undefined
}
const transactionSearchReducer = ( state = initialState, action ) => {
    switch( action.type ){
        case REDIRECT_TO_TRANSACTION_SEARCH:
            return {...state,
                transactionSearchPageState : undefined,
                selectedUserDetails : undefined,
                userProfileRequestState : USER_PROFILE_REQUEST_CANCEL,
                // rejectedUsers : [],
                requestTimerExpiesOn : undefined
            }
        case REDIRECT_TO_TRANSACTION_USER_PROFILE :
            return { ...state,
                transactionSearchPageState: action.type,
                selectedUserDetails : action.details
            };
        
        case USER_PROFILE_REQUEST_SEND :
            return { ...state,
                userProfileRequestState: USER_PROFILE_REQUEST_SEND,
                requestTimerExpiesOn: action.requestTimerExpiesOn
            }
        case USER_PROFILE_REQUEST_CANCEL :
            return { ...state,
                userProfileRequestState: action.type
            }
        case USER_PROFILE_REQUEST_TIMER_EXPIRED :
        case USER_PROFILE_REQUEST_ACCEPTED :
        case USER_PROFILE_REQUEST_REJECTED : 
            return { ...state,
                userProfileRequestState: action.type,
                rejectedUsers : [
                    ...state.rejectedUsers,
                    action.email
                ]
            }      
        default : return state;
    }
}

export default transactionSearchReducer ;