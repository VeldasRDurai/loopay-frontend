import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { redirectToTransactionFeedbackpage } from '../../../../mainpageActions';
import { AiOutlineCloseCircle } from "react-icons/ai";
const TransactionCancelStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const logoStyle = {
    height:'30px',
    width:'30px',
    // fill:'white',
    marginLeft:'10px'
};

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
           <AiOutlineCloseCircle style={logoStyle} />
        </TransactionCancelStyle>
  );
}

export default TransactionCancel;