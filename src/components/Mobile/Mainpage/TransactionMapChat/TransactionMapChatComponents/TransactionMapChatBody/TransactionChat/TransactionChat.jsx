import React from 'react';
import styled from 'styled-components';

import TransactionChatBox from './TransactionChatBox/TransactionChatBox';
import TransactionChatKeyboard from './TransactionChatKeyboard/TransactionChatKeyboard';
import TransactionSwitch from './TransactionSwitch/TransactionSwitch';

import slideInRight from '../../../../../../../animation/slideInRight';

const TransactionChatStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    
    height: 90vh;
    width: 100vw;

    background-color: #ff0000;
    animation: ${slideInRight} 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
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