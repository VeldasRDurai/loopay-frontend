import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, 
    // useDispatch 
} from 'react-redux';

import TransactionTimer from './TransactionTimer/TransactionTimer';

// import { redirectToTransactionFeedbackpage } from '../../../../mainpageActions';

const TransactionFoundStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    background-color: black;
    color: white;
    border-radius: 30px;
    padding-left: 15px;
`

const TransactionFound = () => {
    const [ found, setFound ] = useState(false);
    const { 
        email,
        currentTransaction,
        socket
    } = useSelector( state => state.mainpageReducer );
    const { 
        details,
        requestFromFound,
        requestToFound
    } = useSelector( state => state.transactionMapChatReducer );

    useEffect( () => 
        details.requestFrom === email ? 
            setFound(requestFromFound) :
            setFound(requestToFound),[
        requestFromFound, requestToFound
    ])

    const onClick = () =>{
        console.log('Clicked')
        console.log('found on click : ', !found );
        socket.emit('transaction-found', { email, currentTransaction, found:!found } )
        setFound(!found);
    }

    return (
        <TransactionFoundStyle onClick={ onClick } >
            { found ? 'Not founded' : 'Founded' }
            <TransactionTimer />
        </TransactionFoundStyle>
  );
}

export default TransactionFound;