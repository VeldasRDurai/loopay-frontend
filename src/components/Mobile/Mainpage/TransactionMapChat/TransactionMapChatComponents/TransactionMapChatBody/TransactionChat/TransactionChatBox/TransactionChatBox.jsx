import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useSelector, } from 'react-redux';

import InduvidualChat from './InduvidualChat/InduvidualChat';
import OnlineOfflineIndicator from './OnlineOfflineIndicator';

const TransactionChatBoxStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    height: 82vh;
    width: 100vw;

    overflow-x: hidden;
    overflow-y: scroll;
    background-color: #000000;
`


const TransactionChatBox = () => {
    const divRef = useRef(null);
    const { chat } = useSelector( state => state.transactionMapChatReducer );
    useEffect(()=> {
        divRef.current.scrollTop = divRef.current.scrollHeight;
    });
    return (
        <TransactionChatBoxStyle ref={divRef} >
            <OnlineOfflineIndicator />
            { chat.map( item => 
                    <InduvidualChat key={item.message} 
                        sender={item.sender}
                        message={item.message} /> ) }
        </TransactionChatBoxStyle>
    );
}

export default TransactionChatBox;