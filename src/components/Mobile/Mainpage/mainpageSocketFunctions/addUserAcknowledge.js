import {
    MAINPAGE_SEARCH_MODE,
    // MAINPAGE_SAVED_MODE,
    // MAINPAGE_TRANSACTION_MODE,
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
    mainpageCurrentTransaction,

    // transactions : [ mongoose.ObjectId ],
    // searches : [{
    //     amount : Number,
    //     isSoftCash : Boolean,
    //     radius : Number,
    //     timeStamp: Date
    // }],
}) => {
    dispatch( editCurrentMode(currentMode) );

    currentMode !== MAINPAGE_SEARCH_MODE &&
        lastSearchSaved && new Date(lastSearchUpto) < new Date() &&
            dispatch( editCurrentMode(MAINPAGE_SEARCH_MODE) );
    
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
    dispatch( mainpageCurrentTransaction({
        currentTransaction
    }));
};

module.exports = addUserAcknowledge;