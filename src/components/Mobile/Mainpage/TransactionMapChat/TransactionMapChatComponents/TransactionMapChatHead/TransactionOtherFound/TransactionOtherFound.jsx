import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const TransactionOtherFoundStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const TransactionOtherFound = () => {
    const { email } = useSelector( state => state.mainpageReducer );
    const { 
        details,
        requestFromFound,
        requestToFound
    } = useSelector( state => state.transactionMapChatReducer );

    return (
        <TransactionOtherFoundStyle>
            { 
                details.requestFrom === email ?
                    (requestFromFound ? 'Founded you' : 'Not founded you' ) :
                    (requestToFound   ? 'Founded you' : 'Not founded you' )
            }
        </TransactionOtherFoundStyle>
  );
}

export default TransactionOtherFound;