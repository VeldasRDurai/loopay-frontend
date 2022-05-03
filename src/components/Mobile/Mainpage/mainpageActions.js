import {
    REDIRECT_TO_HISTORY,
    REDIRECT_TO_PROFILE,
    REDIRECT_TO_NOTIFICATION,
    REDIRECT_TO_TRANSACTION_SEARCH
} from './mainpageTypes';

const typeSetter = type => ({type});
const redirectToProfile = () => typeSetter(REDIRECT_TO_PROFILE);
const redirectToHistory = () => typeSetter(REDIRECT_TO_HISTORY);
const redirectToNotification = () => typeSetter(REDIRECT_TO_NOTIFICATION);
const redirectToTransactionSearch = () => typeSetter(REDIRECT_TO_TRANSACTION_SEARCH); 

export {
    redirectToProfile,
    redirectToHistory,
    redirectToNotification,
    redirectToTransactionSearch
};