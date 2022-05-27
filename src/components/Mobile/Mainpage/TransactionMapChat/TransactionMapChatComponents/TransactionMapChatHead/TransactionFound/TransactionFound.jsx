import React from 'react';
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
    background-color: green;
`

const TransactionFound = () => {
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

    const onClick = () =>
        socket.on('transaction-found', { email, currentTransaction } )

    return (
        <TransactionFoundStyle onClick={ onClick } >
            { 
                details.requestFrom === email ?
                    (requestFromFound ? 'Not founded' : 'Founded' ) :
                    (requestToFound   ? 'Not founded' : 'Founded' )
            }
            <TransactionTimer />
        </TransactionFoundStyle>
  );
}

export default TransactionFound;