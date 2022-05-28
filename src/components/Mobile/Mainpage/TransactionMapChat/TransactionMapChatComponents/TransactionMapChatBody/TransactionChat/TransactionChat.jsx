import React from 'react';
import styled from 'styled-components';

import TransactionChatBox from './TransactionChatBox/TransactionChatBox';
import TransactionChatKeyboard from './TransactionChatKeyboard/TransactionChatKeyboard';
import TransactionSwitch from './TransactionSwitch/TransactionSwitch';

const TransactionChatStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    
    height: 90vh;
    width: 100vw;

    background-color: #ff0000;
`

const TransactionChat = ({onClick}) => {
    return (
        <TransactionChatStyle>
            <TransactionChatBox />
            <TransactionSwitch  onClick={onClick} />
            <TransactionChatKeyboard />
        </TransactionChatStyle>
    );
}

export default TransactionChat;