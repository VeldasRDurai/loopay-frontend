import {
    MAINPAGE_SEARCH_MODE,
    MAINPAGE_SAVED_MODE,
    MAINPAGE_TRANSACTION_MODE,
    // MAINPAGE_SHARE_MODE,
    // MAINPAGE_FEEDBACK_MODE
} from '../mainpageTypes';

const addUserAcknowledge = ({
    dispatch,
    // 1
    currentMode,
    editCurrentMode,
    // 2
    lastSearch,
    mainpageLastSearch,
    // 3
    lastSearchSaved,
    lastSearchUpto,
    mainpageLastSearchSavedUpto,
    // 4
    requestFrom,
    requestFromUpto,
    mainpageRequestReceived,
    // 5
    currentTransaction,
    transactionActivated,
    transactionEndTime,
    mainpageTransactionEndTime,
    
    socket
}) => {
    dispatch( editCurrentMode(currentMode) );

    if(currentMode === MAINPAGE_SAVED_MODE) {
        if( lastSearchSaved &&  new Date(lastSearchUpto) < new Date() )
                dispatch( editCurrentMode(MAINPAGE_SEARCH_MODE) );
    } else if ( currentMode === MAINPAGE_TRANSACTION_MODE ){
        if( new Date(transactionEndTime) < new Date() ) 
            // false if transactionEndTime is undefined
            dispatch( editCurrentMode(MAINPAGE_SEARCH_MODE) );
    }
    
    lastSearch ? 
        dispatch( mainpageLastSearch({ lastSearch }) ) :
        dispatch( mainpageLastSearch({
            lastSearch : {
                amount:500,
                isSoftCash:true,
                radius:100,
                timeStamp: undefined,
            }
        }) )
    
    dispatch( mainpageLastSearchSavedUpto({
        lastSearchSaved,
        lastSearchUpto
    }));
    dispatch( mainpageRequestReceived({
        requestFrom,
        requestFromUpto,
    }));
    dispatch( mainpageTransactionEndTime({
        currentTransaction,
        transactionActivated,
        transactionEndTime
    }) )
};

module.exports = addUserAcknowledge;