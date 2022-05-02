import {
    HISTORY, 
    HISTORY_TRANSACTION, 
    HISTORY_TRANSACTION_CHAT
} from '../pageTypes';


const redirectToHistory = () => ({ type : HISTORY });
const redirectToHistoryTransaction = () => ({ type : HISTORY_TRANSACTION });
const redirectToHistoryTransactionChat = () => ({ type : HISTORY_TRANSACTION_CHAT });

export {
    redirectToHistory,
    redirectToHistoryTransaction,
    redirectToHistoryTransactionChat
}