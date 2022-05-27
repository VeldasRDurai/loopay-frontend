import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { 
    transactionMapChatDetails,
    transactionMapChatFromFound,
    transactionMapChatToFound
} from './TransactionMapChatActions';

import TransactionMapChatHead from './TransactionMapChatComponents/TransactionMapChatHead/TransactionMapChatHead';

const TransactionMapChatStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    display: flex;
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
    // const { 
    //     details
    // } = useSelector( state => state.transactionMapChatReducer );

    useEffect( () => {
        socket.emit('transaction-details',{ currentTransaction, email });
    });
    socket.on('transaction-details-acknowledge', ({ acknowledge, details }) => {
        console.log( 'transaction-details-acknowledge',{ acknowledge, details } );
        if( acknowledge ){
            dispatch( transactionMapChatDetails({ details }) );
            dispatch( transactionMapChatFromFound({ requestFromFound: details.requestFromFound }) );
            dispatch( transactionMapChatToFound({ requestToFound: details.requestToFound }) );
            setLoading(false);
        } else {
            window.alert('Internal server error');
        }
    });

    return (
        loading ? 'Loading' :
        <TransactionMapChatStyle>
            <TransactionMapChatHead />
        </TransactionMapChatStyle>
  );
}

export default TransactionMapChat;