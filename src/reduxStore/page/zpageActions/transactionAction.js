import {
    SEARCH, 
    USER_PROFILE, 
    MAP_CHAT, 
    SCAN_QR, 
    FEEDBACK
} from '../pageTypes';

const redirectToSearch = () => ({ type : SEARCH });
const redirectToUserProfile = () => ({ type : USER_PROFILE });
const redirectToMapChat = () => ({ type : MAP_CHAT });
const redirectToScanQr = () => ({ type : SCAN_QR });
const redirectToFeedback = () => ({ type : FEEDBACK });

export {
    redirectToSearch,
    redirectToUserProfile,
    redirectToMapChat,
    redirectToScanQr,
    redirectToFeedback
}