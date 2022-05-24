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

const typeSetter = type => ({type});

// mainpagePageState actions
const editmainpagePageState             = typeSetter;
const redirectToProfile                 = () => typeSetter(REDIRECT_TO_PROFILE);
const redirectToHistory                 = () => typeSetter(REDIRECT_TO_HISTORY);
const redirectToNotification            = () => typeSetter(REDIRECT_TO_NOTIFICATION);
const redirectToTransactionSearch       = () => typeSetter(REDIRECT_TO_TRANSACTION_SEARCH); 
const redirectToTransactionMapChat      = () => typeSetter(REDIRECT_TO_TRANSACTION_MAP_CHAT); 
const redirectToTransactionScanQr       = () => typeSetter(REDIRECT_TO_TRANSACTION_SCAN_QR); 
const redirectToTransactionFeedbackpage = () => typeSetter(REDIRECT_TO_TRANSACTION_FEEDBACK_PAGE); 

// currentMode actions
const editCurrentMode           = typeSetter; 
const mainpageSearchMode        = () => typeSetter(MAINPAGE_SEARCH_MODE);
const mainpageSavedMode         = () => typeSetter(MAINPAGE_SAVED_MODE);
const mainpageTransactionMode   = () => typeSetter(MAINPAGE_TRANSACTION_MODE);
const mainpageShareMode         = () => typeSetter(MAINPAGE_SHARE_MODE);
const mainpageFeedbackMode      = () => typeSetter(MAINPAGE_FEEDBACK_MODE);

// email, socket action
const mainpageUpdateConstants = ({ socket, email }) => ({
    ...typeSetter(MAINPAGE_UPDATE_CONSTANTS),
    socket,
    email
});

// lastSearch
const mainpageLastSearch = ({lastSearch}) => ({
    ...typeSetter(MAINPAGE_LAST_SEARCH),
    lastSearch,
});

// lastSearchResults
const mainpageLastSearchResults = ({ lastSearchResults }) => ({
    ...typeSetter(MAINPAGE_LAST_SEARCH_RESULTS),
    lastSearchResults
});

// lastSearchSaved, lastSearchUpto
const mainpageLastSearchSavedUpto = ({ lastSearchSaved, lastSearchUpto }) => ({
    ...typeSetter(MAINPAGE_LAST_SEARCH_SAVED_UPTO),
    lastSearchSaved,
    lastSearchUpto
});

// currentTransaction
const mainpageCurrentTransaction = ({ currentTransaction }) => ({
    ...typeSetter(MAINPAGE_CURRENT_TRANSACTION),
    currentTransaction
});

// requestFrom, requestFromUpto
const mainpageRequestReceived = ({ requestFrom, requestFromUpto }) => ({
    ...typeSetter(MAINPAGE_REQUEST_RECEIVED),
    requestFrom,
    requestFromUpto
});

export {
    editmainpagePageState,
    // ---------- //
    redirectToProfile,
    redirectToHistory,
    redirectToNotification,
    redirectToTransactionSearch,
    redirectToTransactionMapChat,
    redirectToTransactionScanQr,
    redirectToTransactionFeedbackpage,
    
    editCurrentMode,
    // ------------ //
    mainpageSearchMode,
    mainpageSavedMode,
    mainpageTransactionMode,
    mainpageShareMode,
    mainpageFeedbackMode,
  
    mainpageUpdateConstants,

    mainpageLastSearch,
    mainpageLastSearchResults,
    mainpageLastSearchSavedUpto,
    
    mainpageCurrentTransaction,
    mainpageRequestReceived
};