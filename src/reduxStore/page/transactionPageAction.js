import {
    REDIRECT_TO_TRANSACTION,

    REDIRECT_TO_TRANSACTION_SEARCH,
    REDIRECT_TO_TRANSACTION_USER_PROFILE,
    REDIRECT_TO_TRANSACTION_MAP_CHAT,
    REDIRECT_TO_TRANSACTION_SCAN_QR,
    REDIRECT_TO_TRANSACTION_FEEDBACK_PAGE,
    
    REDIRECT_TO_PROFILE,
    REDIRECT_TO_PROFILE_EDIT_DETAILS,
    REDIRECT_TO_PROFILE_EDIT_PASSWORD,
    REDIRECT_TO_PROFILE_ADD_NEW_PASSWORD,
    REDIRECT_TO_PROFILE_USER_SETTINGS,
    REDIRECT_TO_PROFILE_APPLICATION_SUPPORT,
    REDIRECT_TO_PROFILE_APPLICATION_FEEDBACK,
    
    REDIRECT_TO_HISTORY,
    REDIRECT_TO_HISTORY_TRANSACTION,
    REDIRECT_TO_HISTORY_TRANSACTION_CHAT,

    REDIRECT_TO_NOTIFICATION
} from './transactionpageTypes';

const typeSetter = type => ({ type });

const redirectToTransaction = () => typeSetter(REDIRECT_TO_TRANSACTION);

const redirectToTransactionSearch  = () => typeSetter(REDIRECT_TO_TRANSACTION_SEARCH);
const redirectToTransactionUserProfile  = () => typeSetter(REDIRECT_TO_TRANSACTION_USER_PROFILE);
const redirectToTransactionMapChat  = () => typeSetter(REDIRECT_TO_TRANSACTION_MAP_CHAT);
const redirectToTransactionScanQr = () => typeSetter(REDIRECT_TO_TRANSACTION_SCAN_QR);
const redirectToTransactionFeedbackPage  = () => typeSetter(REDIRECT_TO_TRANSACTION_FEEDBACK_PAGE);

const redirectToProfile = () => typeSetter(REDIRECT_TO_PROFILE);
const redirectToProfileEditDetails = () => typeSetter(REDIRECT_TO_PROFILE_EDIT_DETAILS);
const redirectToProfileEditPassword = () => typeSetter(REDIRECT_TO_PROFILE_EDIT_PASSWORD);
const redirectToProfileAddNewPassword = () => typeSetter(REDIRECT_TO_PROFILE_ADD_NEW_PASSWORD);
const redirectToProfileUserSettings = () => typeSetter(REDIRECT_TO_PROFILE_USER_SETTINGS);
const redirectToProfileApplicationSupport = () => typeSetter(REDIRECT_TO_PROFILE_APPLICATION_SUPPORT);
const redirectToProfileApplicationFeedback = () => typeSetter(REDIRECT_TO_PROFILE_APPLICATION_FEEDBACK);

const redirectToHistory = () => typeSetter(REDIRECT_TO_HISTORY);
const redirectToHistoryTransaction = () => typeSetter(REDIRECT_TO_HISTORY_TRANSACTION);
const redirectToHistoryTransactionChat = () => typeSetter(REDIRECT_TO_HISTORY_TRANSACTION_CHAT);

const redirectToNotification = () => typeSetter(REDIRECT_TO_NOTIFICATION);

export {
    redirectToTransaction,

    redirectToTransactionSearch,
    redirectToTransactionUserProfile,
    redirectToTransactionMapChat,
    redirectToTransactionScanQr,
    redirectToTransactionFeedbackPage,

    redirectToProfile,
    redirectToProfileEditDetails,
    redirectToProfileEditPassword,
    redirectToProfileAddNewPassword,
    redirectToProfileUserSettings,
    redirectToProfileApplicationSupport,
    redirectToProfileApplicationFeedback,

    redirectToHistory,
    redirectToHistoryTransaction,
    redirectToHistoryTransactionChat,
    
    redirectToNotification
}