import {
    TRANSACTION_MAP_CHAT_DETAILS,
    TRANSACTION_MAP_CHAT_FROM_FOUNDED,
    TRANSACTION_MAP_CHAT_TO_FOUNDED,
    TRANSACTION_MAP_CHAT_FROM_LOCATION,
    TRANSACTION_MAP_CHAT_TO_LOCATION
} from './TransactionMapChatTypes';

const typeSetter = type => ({type});

const transactionMapChatDetails = ({ details }) => ({
    ...typeSetter(TRANSACTION_MAP_CHAT_DETAILS),
    details
});
const transactionMapChatFromFound = ({ requestFromFound }) => ({
    ...typeSetter(TRANSACTION_MAP_CHAT_FROM_FOUNDED),
    requestFromFound
});
const transactionMapChatToFound = ({ requestToFound }) => ({
    ...typeSetter(TRANSACTION_MAP_CHAT_TO_FOUNDED),
    requestToFound
});
const transactionMapChatFromLocation = ({ coordinates }) => ({
    ...typeSetter(TRANSACTION_MAP_CHAT_FROM_LOCATION),
    coordinates
})
const transactionMapChatToLocation = ({ coordinates }) => ({
    ...typeSetter(TRANSACTION_MAP_CHAT_TO_LOCATION),
    coordinates
})

export {
    transactionMapChatDetails,
    transactionMapChatFromFound,
    transactionMapChatToFound,
    transactionMapChatToLocation,
    transactionMapChatFromLocation
}