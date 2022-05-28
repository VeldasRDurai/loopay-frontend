import {
    TRANSACTION_MAP_CHAT_DETAILS,
    TRANSACTION_MAP_CHAT_FROM_FOUNDED,
    TRANSACTION_MAP_CHAT_TO_FOUNDED,
    TRANSACTION_MAP_CHAT_FROM_LOCATION,
    TRANSACTION_MAP_CHAT_TO_LOCATION,
    TRANSACTION_CHAT,

    TRANSACTION_LIVE_MODE,
    TRANSACTION_SUCCESS_MODE,
    TRANSACTION_CANCEL_MODE,
    TRANSACTION_TIME_EXPIRED_MODE
} from './TransactionMapChatTypes';

const initialState = {
    details : undefined,

    requestFromFound : false,
    requestToFound : false,

    requestFromLocation : [],
    requestToLocation : [],
    chat : [],
    
    transactionResult : TRANSACTION_LIVE_MODE
}
    
const transactionMapChatReducer = ( state = initialState, action ) => {
    switch( action.type ){
        case TRANSACTION_MAP_CHAT_DETAILS :
            return { ...state,
                details : action.details
            }
        case TRANSACTION_MAP_CHAT_FROM_FOUNDED :
            return { ...state,
                requestFromFound : action.requestFromFound
            }
        case TRANSACTION_MAP_CHAT_TO_FOUNDED :
            return { ...state,
                requestToFound : action.requestToFound
            }
        case TRANSACTION_MAP_CHAT_FROM_LOCATION :
            return { ...state,
                requestFromLocation : action.coordinates
            }
        case TRANSACTION_MAP_CHAT_TO_LOCATION :
            return { ...state,
                requestToLocation : action.coordinates   
            }
        case TRANSACTION_CHAT :
            return { ...state,
                chat : action.chat
            }
        
        case TRANSACTION_LIVE_MODE :
        case TRANSACTION_SUCCESS_MODE :
        case TRANSACTION_CANCEL_MODE :
        case TRANSACTION_TIME_EXPIRED_MODE :
            return { ...state,
                transactionResult: action.type
            }
        default :
            return state;
    }
}
    
export default transactionMapChatReducer;