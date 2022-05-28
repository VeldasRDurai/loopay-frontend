import React, { useState } from 'react';
import styled from 'styled-components';

import TransactionChat from './TransactionChat/TransactionChat';
import TransactionMap from './TransactionMap/TransactionMap';

const TransactionMapChatBodyStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 90vh;
    width: 100vw;

    background-color: #ffffff;
`

const TransactionMapChatBody = () => {
    const [ showMap, setShowMap ] = useState(true);
    return (
        <TransactionMapChatBodyStyle>
            { 
                showMap? 
                <TransactionMap  onClick={ () => setShowMap(false) } /> : 
                <TransactionChat onClick={ () => setShowMap(true ) }  /> 
            }
        </TransactionMapChatBodyStyle>
    );
}

export default TransactionMapChatBody;