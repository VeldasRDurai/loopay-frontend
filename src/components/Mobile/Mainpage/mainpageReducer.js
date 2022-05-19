import {
    REDIRECT_TO_HISTORY,
    REDIRECT_TO_PROFILE,
    REDIRECT_TO_NOTIFICATION,
    REDIRECT_TO_TRANSACTION_SEARCH,
    REDIRECT_TO_TRANSACTION_MAP_CHAT,
    REDIRECT_TO_TRANSACTION_SCAN_QR,
    REDIRECT_TO_TRANSACTION_FEEDBACK_PAGE,

    MAINPAGE_UPDATE_SEARCH_DETAILS,
    MAINPAGE_UPDATE_SEARCH_RESULTS,
    UPDATE_SOCKET
} from './mainpageTypes';

const initialState = {
    mainpagePageState : undefined,
    mainpageSearchDetails : {
        amount:500,
        isSoftCash:true,
        radius:100
    },
    mainpageSearchResults : [],
    socket: undefined
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
        case MAINPAGE_UPDATE_SEARCH_DETAILS:
            return { ...state,
                mainpageSearchDetails : action.details
            }
        case MAINPAGE_UPDATE_SEARCH_RESULTS:
            return { ...state,
                mainpageSearchResults : action.results
            }
        case UPDATE_SOCKET:
            return { ...state,
                socket: action.socket
            }
        default :
            return state;
    }
}

export default mainpageReducer ;