import React from 'react';
import styled from 'styled-components';
// import { io } from "socket.io-client";
import { useDispatch, useSelector } from 'react-redux';

import { 
    // redirectToProfile,  
    // redirectToHistory,
    // redirectToNotification,
    redirectToTransactionSearch,

    // mainpageUpdateDetails
} from './mainpageActions';

import TransactionSearch from './TransactionSearch/TransactionSearch';
import TransactionMapChat from './TransactionMapChat/TransactionMapChat';
import TransactionScanQr from './TransactionScanQr/TransactionScanQr';
import TransactionFeedbackPage from './TransactionFeedbackPage/TransactionFeedbackPage';

import MainpageRange from './MainpageComponents/MainpageRange/MainpageRange';
// import MainpageCheckbox from './MainpageComponents/MainpageCheckbox/MainpageCheckbox';

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
        mainpageDetails
    } = useSelector( state => state.mainpageReducer );
    return (
        <MainpageStyle>
            <div>mainpage</div>
            <MainpageComponentStyle>
                <div>{`Enter the amount`}</div>
                    <MainpageRange min={500} max={5000} 
                            roundTo={500} 
                            value={'amount'} 
                            width={'75vw'} />
                <div>{mainpageDetails && mainpageDetails.amount 
                            && mainpageDetails.amount}</div>
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
                <div>{mainpageDetails && mainpageDetails.radius && mainpageDetails.radius}</div>
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