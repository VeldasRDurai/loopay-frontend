import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const TransactionOtherFoundStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const TransactionOtherFound = () => {
    const [ found, setFound ] = useState(false);
    const { email } = useSelector( state => state.mainpageReducer );
    const { 
        details,
        requestFromFound,
        requestToFound
    } = useSelector( state => state.transactionMapChatReducer );

    useEffect( () => 
        details.requestFrom === email ? 
            setFound(requestToFound)  :
            setFound(requestFromFound) ,[
        requestFromFound, requestToFound
    ])

    return (
        <TransactionOtherFoundStyle>
            { found ? 'Founded you': 'Not founded you' }
        </TransactionOtherFoundStyle>
  );
}

export default TransactionOtherFound;