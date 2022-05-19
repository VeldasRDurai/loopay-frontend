import {
    REDIRECT_TO_TRANSACTION_USER_PROFILE,
    
    USER_PROFILE_REQUEST_SEND,
    USER_PROFILE_REQUEST_CANCEL,
    USER_PROFILE_REQUEST_TIMER_EXPIRED,
    USER_PROFILE_REQUEST_ACCEPTED,
    USER_PROFILE_REQUEST_REJECTED
} from './TransactionSearchTypes';

const typeSetter = type => ({type});
const redirectToTransactionUserProfile = ({ details }) => ({
    ...typeSetter(REDIRECT_TO_TRANSACTION_USER_PROFILE),
    details
});

const userProfileRequestSend = ({requestTimerExpiesOn}) => ({
    ...typeSetter(USER_PROFILE_REQUEST_SEND),
    requestTimerExpiesOn
});
const userProfileRequestCancel = () => typeSetter(USER_PROFILE_REQUEST_CANCEL);
const userProfileRequestAccepted = () => typeSetter(USER_PROFILE_REQUEST_ACCEPTED);
const userProfileRequestRejected = () => typeSetter(USER_PROFILE_REQUEST_REJECTED);
const userProfileRequestTimerExpired = () => typeSetter(USER_PROFILE_REQUEST_TIMER_EXPIRED);

export {
    redirectToTransactionUserProfile,

    userProfileRequestSend,
    userProfileRequestCancel,
    userProfileRequestAccepted,
    userProfileRequestRejected,
    userProfileRequestTimerExpired
}