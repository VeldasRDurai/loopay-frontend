import {
    REDIRECT_TO_HISTORY,
    REDIRECT_TO_PROFILE,
    REDIRECT_TO_NOTIFICATION,
    REDIRECT_TO_TRANSACTION_SEARCH
} from './mainpageTypes';

const initialState = {
    mainpagePageState : undefined,
}
const mainpageReducer = ( state = initialState, action ) => {
    switch( action.type ){
        case REDIRECT_TO_TRANSACTION_SEARCH : 
        case REDIRECT_TO_PROFILE : 
        case REDIRECT_TO_HISTORY : 
        case REDIRECT_TO_NOTIFICATION : 
            return { ...state,
                mainpagePageState : action.type,
            }
        default :
            return {
                mainpagePageState : undefined
            }
    }
}

export default mainpageReducer ;