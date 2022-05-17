import {
    REDIRECT_TO_HISTORY,
    REDIRECT_TO_PROFILE,
    REDIRECT_TO_NOTIFICATION,
    REDIRECT_TO_TRANSACTION_SEARCH,

    // REDIRECT_TO_TRANSACTION_USER_PROFILE,
    REDIRECT_TO_TRANSACTION_MAP_CHAT,
    REDIRECT_TO_TRANSACTION_SCAN_QR,
    REDIRECT_TO_TRANSACTION_FEEDBACK_PAGE,

    MAINPAGE_UPDATE_SEARCH_DETAILS,
    UPDATE_SOCKET
} from './mainpageTypes';

const typeSetter = type => ({type});
const redirectToProfile = () => typeSetter(REDIRECT_TO_PROFILE);
const redirectToHistory = () => typeSetter(REDIRECT_TO_HISTORY);
const redirectToNotification = () => typeSetter(REDIRECT_TO_NOTIFICATION);
const redirectToTransactionSearch = () => typeSetter(REDIRECT_TO_TRANSACTION_SEARCH); 
const redirectToTransactionMapChat = () => typeSetter(REDIRECT_TO_TRANSACTION_MAP_CHAT); 
const redirectToTransactionScanQr = () => typeSetter(REDIRECT_TO_TRANSACTION_SCAN_QR); 
const redirectToTransactionFeedbackpage = () => typeSetter(REDIRECT_TO_TRANSACTION_FEEDBACK_PAGE); 

const updateSocket = ({ socket }) => ({
    ...typeSetter(UPDATE_SOCKET),
    socket
});

const mainpageUpdateSearchDetails = ({ amount, isSoftCash, radius }) => ({
    ...typeSetter(MAINPAGE_UPDATE_SEARCH_DETAILS),
    details : {
        amount,
        isSoftCash,
        radius
    }
}); 

export {
    redirectToProfile,
    redirectToHistory,
    redirectToNotification,
    redirectToTransactionSearch,
    redirectToTransactionMapChat,
    redirectToTransactionScanQr,
    redirectToTransactionFeedbackpage,
    
    mainpageUpdateSearchDetails,
    updateSocket
};