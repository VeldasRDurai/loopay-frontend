import React, { useEffect } from 'react';
import styled from 'styled-components';
import { io } from "socket.io-client";
import { useDispatch, useSelector } from 'react-redux';

import { 
    // redirectToProfile,  
    // redirectToHistory,
    // redirectToNotification,
    redirectToTransactionSearch,

    // mainpageUpdateDetails
    updateSocket
} from './mainpageActions';

import TransactionSearch from './TransactionSearch/TransactionSearch';
import TransactionMapChat from './TransactionMapChat/TransactionMapChat';
import TransactionScanQr from './TransactionScanQr/TransactionScanQr';
import TransactionFeedbackPage from './TransactionFeedbackPage/TransactionFeedbackPage';

import MainpageRange from './MainpageComponents/MainpageRange/MainpageRange';
// import MainpageCheckbox from './MainpageComponents/MainpageCheckbox/MainpageCheckbox';

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

const MainpageComponentStyle = styled.div`
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &> :first-child{
        align-self: flex-start;
    }
    &> :last-child{
        align-self: flex-end;
    }
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

const Mainpage = () => {
    const dispatch = useDispatch();
    const { 
        mainpagePageState,
        mainpageSearchDetails
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
                socket.emit('request-accepted',{requestFrom});
            } else {
                socket.emit('request-rejected',{requestFrom})
            }
        });

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

            <MainpageComponentStyle>
                <div>{`Enter the amount`}</div>
                    <MainpageRange min={500} max={5000} 
                            roundTo={500} 
                            value={'amount'} 
                            width={'75vw'} />
                <div>{mainpageSearchDetails && mainpageSearchDetails.amount 
                            && mainpageSearchDetails.amount}</div>
            </MainpageComponentStyle>

            <MainpageComponentStyle>
                <div>{ `Do you want soft cash ?` }</div>
                    <MainpageRange min={0} max={1} 
                            roundTo={1} 
                            value={'isSoftCash'} 
                            width={'30px'} />
                <div></div>
            </MainpageComponentStyle>

            <MainpageComponentStyle>
                <div>{`Radius ?`}</div>
                    <MainpageRange min={200} max={2000} 
                            roundTo={200} 
                            value={'radius'} 
                            width={'75vw'} />
                <div>{mainpageSearchDetails && mainpageSearchDetails.radius 
                            && mainpageSearchDetails.radius}</div>
            </MainpageComponentStyle>

            <input 
                type="button" 
                value="Search"
                onClick={ ()=>dispatch(redirectToTransactionSearch()) } 
            />

            { mainpageRender[mainpagePageState] }
        </MainpageStyle>
  );
}

export default Mainpage;

// REFERENCE 

// 1.https://medium.com/chrisburgin/rewriting-javascript-replacing-the-switch-statement-cfff707cf045