import React from 'react';
import styled from 'styled-components';

const TransactionMapChatStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    background-color: purple;
`

const TransactionMapChat = () => {
    return (
        <TransactionMapChatStyle>
            TransactionMapChat
        </TransactionMapChatStyle>
  );
}

export default TransactionMapChat;