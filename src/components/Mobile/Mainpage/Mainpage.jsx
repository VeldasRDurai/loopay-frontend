import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { 
    // redirectToProfile,  
    // redirectToHistory,
    // redirectToNotification,
    // redirectToTransactionSearch,

    mainpageUpdateDetails
} from './mainpageActions';

import TransactionSearch from './TransactionSearch/TransactionSearch';
import TransactionMapChat from './TransactionMapChat/TransactionMapChat';
import TransactionScanQr from './TransactionScanQr/TransactionScanQr';
import TransactionFeedbackPage from './TransactionFeedbackPage/TransactionFeedbackPage';

const MainpageStyle = styled.div`
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

const Mainpage = () => {
    const dispatch = useDispatch();
    const { 
        mainpagePageState,
        mainpageDetails
    } = useSelector( state => state.mainpageReducer );
    
    return (
        <MainpageStyle>
            mainpage
            <input 
                type="number"
                max='5000'
                min='100'
                placeholder='Enter the amount between 100 and 5000'
                onChange={ event => dispatch( 
                    mainpageUpdateDetails({ 
                        ...mainpageDetails,
                        amount: event.target.value
                    }) ) }
            />
            soft cash : 
            <input 
                type="checkbox" 
                onChange={ event => dispatch( 
                    mainpageUpdateDetails({ 
                        ...mainpageDetails,
                        isSoftCash: event.target.checked
                    }) ) } 
            />
            <input 
                type="number" 
                placeholder='radius in meters' 
                onChange={ event => dispatch( 
                    mainpageUpdateDetails({ 
                        ...mainpageDetails,
                        radius: event.target.value
                    }) ) }
            />

            <input type="button" value="Search" />

            { mainpageRender[mainpagePageState] }
        </MainpageStyle>
  );
}

export default Mainpage;

// REFERENCE 

// 1.https://medium.com/chrisburgin/rewriting-javascript-replacing-the-switch-statement-cfff707cf045