import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

// import { TRANSACTION_LIVE_MODE } from './TransactionMapChatTypes';

import {
    redirectToTransactionFeedbackpage
} from '../mainpageActions';

import { 
    transactionMapChatDetails,
    transactionMapChatFromFound,
    transactionMapChatToFound,
    editTransactionResult
} from './TransactionMapChatActions';

import TransactionMapChatHead from './TransactionMapChatComponents/TransactionMapChatHead/TransactionMapChatHead';
import TransactionMapChatBody from './TransactionMapChatComponents/TransactionMapChatBody/TransactionMapChatBody';

const TransactionMapChatStyle = styled.div`
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
    align-items: flex-start;

    background-color: purple;
`

const TransactionMapChat = () => {
    const [ loading, setLoading ] = useState(true);
    const dispatch = useDispatch();
    const { 
        email,
        currentTransaction,
        socket
    } = useSelector( state => state.mainpageReducer );
    const {
        requestFromFound,
        requestToFound,
        // transactionResult,
    } = useSelector( state => state.transactionMapChatReducer );

    useEffect( () => {
        if( requestFromFound === true && requestToFound === true )
            // && transactionResult !== TRANSACTION_LIVE_MODE &&
            dispatch( redirectToTransactionFeedbackpage() )
    },[ requestFromFound, requestToFound ])

    useEffect( () => {
        socket.emit('transaction-details',{ currentTransaction, email });
    },[]);
    socket.on('transaction-details-acknowledge', ({ acknowledge, details }) => {
        console.log( 'transaction-details-acknowledge',{ acknowledge, details } );
        if( acknowledge ){
            dispatch( transactionMapChatDetails({ details }) );
            dispatch( transactionMapChatFromFound({ requestFromFound: details.requestFromFound }) );
            dispatch( transactionMapChatToFound({ requestToFound: details.requestToFound }) );
            dispatch( editTransactionResult(details.transactionResult) );
            setLoading(false);
        } else {
            window.alert('Internal server error');
        }
    });

    return (
        loading ? 'Loading' :
        <TransactionMapChatStyle>
            <TransactionMapChatHead />
            <TransactionMapChatBody />
        </TransactionMapChatStyle>
  );
}

export default TransactionMapChat;