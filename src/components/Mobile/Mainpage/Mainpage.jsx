import React, { useEffect } from 'react';
import styled from 'styled-components';
import { io } from "socket.io-client";
import { useDispatch, useSelector } from 'react-redux';

import { 
    // redirectToProfile,  
    // redirectToHistory,
    // redirectToNotification,
    // redirectToTransactionSearch,
    redirectToTransactionMapChat,

    // mainpageUpdateDetails
    updateSocket
} from './mainpageActions';

import TransactionSearch from './TransactionSearch/TransactionSearch';
import TransactionMapChat from './TransactionMapChat/TransactionMapChat';
import TransactionScanQr from './TransactionScanQr/TransactionScanQr';
import TransactionFeedbackPage from './TransactionFeedbackPage/TransactionFeedbackPage';

// import MainpageRange from './MainpageComponents/MainpageRange/MainpageRange';
// import MainpageCheckbox from './MainpageComponents/MainpageCheckbox/MainpageCheckbox';

import MainpageSearchMode from './MainpageComponents/MainpageSearchMode/MainpageSearchMode';

import { 
    watchPosition,
    // getCurrentPosition,
    getPositionErrorMessage
} from '../../../functions/map';

const MainpageStyle = styled.div`
    &> :first-child{
    }
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: aqua;
`

const mainpageRender = {
    REDIRECT_TO_PROFILE: 'profile',
    REDIRECT_TO_HISTORY: 'history',
    REDIRECT_TO_NOTIFICATION: 'notification',
    REDIRECT_TO_TRANSACTION_SEARCH  : <TransactionSearch />,
    REDIRECT_TO_TRANSACTION_MAP_CHAT: <TransactionMapChat />,
    REDIRECT_TO_TRANSACTION_SCAN_QR : <TransactionScanQr />,
    REDIRECT_TO_TRANSACTION_FEEDBACK_PAGE: <TransactionFeedbackPage />
};
const mainpageModeRender = {
    MAINPAGE_SEARCH_MODE : <MainpageSearchMode />,
    MAINPAGE_SAVED_MODE : 'save mode',
    MAINPAGE_TRANSACTION_MODE : 'Transaction mode',
    MAINPAGE_SHARE_MODE : 'Share mode',
    MAINPAGE_FEEDBACK_MODE : 'Feedback mode'

}

const Mainpage = () => {
    const dispatch = useDispatch();
    const { 
        mainpagePageState,
        mainpageMode,
        // mainpageSearchDetails
    } = useSelector( state => state.mainpageReducer );
    const { email } = useSelector( state => state.profile );
    useEffect( () => {
        const socket = io(process.env.REACT_APP_BACKEND_DEVELOPMENT_URL);
        dispatch( updateSocket({socket}) );
        socket.on('connected' , async () => {
            socket.emit('add-user', { email });
        });
        socket.on("connect_error", (err) => {
            console.log(`connect_error due to ${err.message}`);
        });
        socket.on('receive-request', ({requestFrom}) => {
            if( window.confirm(`${requestFrom} send you a request...!!!`)){
                console.log('Accepted...!!!');
                socket.emit('receive-request-accepted',{ requestTo:email, requestFrom});
            } else {
                socket.emit('receive-request-rejected',{ requestTo:email, requestFrom})
            }
        });
        socket.on('receive-request-accepted-acknowledge', ({acknowledge}) => 
            acknowledge ? dispatch(redirectToTransactionMapChat()) :
                window.alert('Another one went offline or cancelled the request'));

        // Updating loaction
        const onSuccess = ({ coords : {latitude, longitude}, timestamp }) => {
            console.log( {latitude, longitude} );
            socket.emit('update-location', 
                { latitude, longitude, timestamp, email } );
        }
        const onError = error => 
            alert(`Error: ${getPositionErrorMessage(error.code) || error.message}`)
        watchPosition({ onSuccess, onError });
    },[])
    return (
        <MainpageStyle>
            <div>mainpage</div>
            { mainpageModeRender[mainpageMode] }
            { mainpageRender[mainpagePageState] }
        </MainpageStyle>
  );
}

export default Mainpage;

// REFERENCE 

// 1.https://medium.com/chrisburgin/rewriting-javascript-replacing-the-switch-statement-cfff707cf045