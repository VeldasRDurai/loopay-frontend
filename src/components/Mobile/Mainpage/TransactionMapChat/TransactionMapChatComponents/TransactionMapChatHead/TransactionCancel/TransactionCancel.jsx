import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { redirectToTransactionFeedbackpage } from '../../../../mainpageActions';

const TransactionCancelStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const TransactionCancel = () => {
    const dispatch = useDispatch();
    const { 
        email,
        currentTransaction,
        socket
    } = useSelector( state => state.mainpageReducer );

    
    const onClick = () =>
        socket.emit('transaction-cancel', { email, currentTransaction });

    socket.on('transaction-cancel-acknowledge', ({ acknowledge }) => {
        console.log( acknowledge );
        if(acknowledge){
            dispatch( redirectToTransactionFeedbackpage() );
        } else {
            window.alert('Not able to cancel');
        }
    });
    return (
        <TransactionCancelStyle onClick={onClick} >
            Cancel
        </TransactionCancelStyle>
  );
}

export default TransactionCancel;