import {
    REDIRECT_TO_HISTORY,
    REDIRECT_TO_PROFILE,
    REDIRECT_TO_NOTIFICATION,
    REDIRECT_TO_TRANSACTION_SEARCH,
    REDIRECT_TO_TRANSACTION_MAP_CHAT,
    REDIRECT_TO_TRANSACTION_SCAN_QR,
    REDIRECT_TO_TRANSACTION_FEEDBACK_PAGE,

    MAINPAGE_SEARCH_MODE,
    MAINPAGE_SAVED_MODE,
    MAINPAGE_TRANSACTION_MODE,
    MAINPAGE_SHARE_MODE,
    MAINPAGE_FEEDBACK_MODE,

    MAINPAGE_LAST_SEARCH,
    MAINPAGE_LAST_SEARCH_RESULTS,
    MAINPAGE_LAST_SEARCH_SAVED_UPTO,


    MAINPAGE_CURRENT_TRANSACTION,
    MAINPAGE_REQUEST_RECEIVED,

    MAINPAGE_UPDATE_CONSTANTS
} from './mainpageTypes';

const initialState = {
//  DATAS HAVING DISTINCT STRING VALUES;
    mainpagePageState : undefined,
    currentMode : MAINPAGE_SEARCH_MODE,

//  DATAS WHICH DOESN'T CHANGE THEIR VALUES FOR PARTICULAR USER
//  REQUIRE ONLY ONE FUNCTION TO CAHGE VALUES
    email: undefined,
    socket: undefined,


    lastSearch : {
        amount:500,
        isSoftCash:true,
        radius:100,
        timeStamp: undefined,
    },

    lastSearchResults : [],
    
    lastSearchSaved : false,
    lastSearchUpto : undefined,
    
    currentTransaction : undefined,
    
    requestFrom : undefined,
    requestFromUpto : undefined,
    
    // transactionEndTime: 

    // // searches
    // // transactions : [ mongoose.ObjectId ],
}

const mainpageReducer = ( state = initialState, action ) => {
    switch( action.type ){
        // mainpagePageState
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

        // currentMode
        case MAINPAGE_SEARCH_MODE :
        case MAINPAGE_SAVED_MODE :
        case MAINPAGE_TRANSACTION_MODE :
        case MAINPAGE_SHARE_MODE : 
        case MAINPAGE_FEEDBACK_MODE :
            return { ...state,
                mainpagePageState : undefined, 
                currentMode : action.type
            }
        
        // email, socket
        case MAINPAGE_UPDATE_CONSTANTS:
            return { ...state,
                socket: action.socket,
                email: action.email
            }
        
        // lastSearch
        case MAINPAGE_LAST_SEARCH:
            return { ...state,
                lastSearch : action.lastSearch
            }
        
        // lastSearchResults
        case MAINPAGE_LAST_SEARCH_RESULTS:
            return { ...state,
                lastSearchResults : action.lastSearchResults
            }

        // lastSearchSaved, lastSearchUpto
        case MAINPAGE_LAST_SEARCH_SAVED_UPTO:
            return { ...state,
                lastSearchSaved: action.lastSearchSaved,
                lastSearchUpto: action.lastSearchUpto
            }
        
        // currentTransaction 
        case MAINPAGE_CURRENT_TRANSACTION:
            return { ...state,
                currentTransaction : action.currentTransaction
            }
        
        // requestFrom, requestFromUpto
        case MAINPAGE_REQUEST_RECEIVED:
            return { ...state,
                requestFrom : action.requestFrom,
                requestFromUpto : action.requestFromUpto,
            }

        default :
            return state;
    }
}

export default mainpageReducer ;