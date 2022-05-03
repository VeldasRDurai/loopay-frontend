import {
    REDIRECT_TO_TRANSACTION_USER_PROFILE
} from './TransactionSearchTypes';

const typeSetter = type => ({type});
const redirectToTransactionUserProfile = () => typeSetter(REDIRECT_TO_TRANSACTION_USER_PROFILE);

export {
    redirectToTransactionUserProfile
}