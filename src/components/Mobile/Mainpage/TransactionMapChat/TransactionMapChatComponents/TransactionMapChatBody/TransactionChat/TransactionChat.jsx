import React from 'react';
import styled from 'styled-components';

const TransactionChatStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 90vh;
    width: 100vw;

    background-color: #ff0000;
`

const TransactionChat = ({ setShowMap }) => {
    return (
        <TransactionChatStyle onClick={ () => setShowMap(true) }>
            TransactionChat
        </TransactionChatStyle>
    );
}

export default TransactionChat;