import {
    REDIRECT_TO_TRANSACTION_USER_PROFILE
} from './TransactionSearchTypes';
const initialState = {
    transactionSearchPageState : undefined,
}
const transactionSearchReducer = ( state = initialState, action ) => {
    switch( action.type ){
        case REDIRECT_TO_TRANSACTION_USER_PROFILE :
            return { ...state,
                transactionSearchPageState: action.type
            };
        default : return state;
    }
}

export default transactionSearchReducer ;