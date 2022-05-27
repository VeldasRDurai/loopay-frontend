import {
    TRANSACTION_MAP_CHAT_DETAILS,
    TRANSACTION_MAP_CHAT_FROM_FOUNDED,
    TRANSACTION_MAP_CHAT_TO_FOUNDED,
    TRANSACTION_MAP_CHAT_FROM_LOCATION,
    TRANSACTION_MAP_CHAT_TO_LOCATION
} from './TransactionMapChatTypes';

const initialState = {
    details : undefined,

    requestFromFound : false,
    requestToFound : false,

    requestFromLocation : [],
    requestToLocation : [],
    chat : []
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
        default :
            return state;
    }
}
    
export default transactionMapChatReducer;