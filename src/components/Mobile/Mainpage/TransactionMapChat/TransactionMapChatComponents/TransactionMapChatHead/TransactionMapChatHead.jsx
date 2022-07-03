import React from 'react';
import styled from 'styled-components';

import TransactionBack   from './TransactionBack/TransactionBack';
import TransactionOtherFound from './TransactionOtherFound/TransactionOtherFound';
import TransactionFound  from './TransactionFound/TransactionFound';
import TransactionCancel from './TransactionCancel/TransactionCancel';

const TransactionMapChatHeadStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 10vh;
    width: 100vw;

    background-color: white;
`

const TransactionMapChatHead = () => {

    return (
        <TransactionMapChatHeadStyle>
            <TransactionBack />
            <TransactionOtherFound />
            
            <TransactionFound />
            <TransactionCancel />
        </TransactionMapChatHeadStyle>
    );
}

export default TransactionMapChatHead;