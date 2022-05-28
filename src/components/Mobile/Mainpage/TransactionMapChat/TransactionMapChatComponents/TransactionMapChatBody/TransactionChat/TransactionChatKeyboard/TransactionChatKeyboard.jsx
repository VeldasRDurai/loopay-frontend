import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RiSendPlaneFill } from "react-icons/ri";

import { transactionChat } from '../../../../TransactionMapChatActions';

const TransactionChatKeyboardStyle = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    height: 8vh;
    width: 100vw;

    background-color: white;
`;
const TransactionChatSendInput = styled.input`
    height: 6vh;
    width: 80vw;
    border-radius: 15px;
    box-sizing: border-box;
    border: 1px solid black;
    padding: 0 15px;
    :focus{
        outline: none;
    }
    ::selection{
        background-color: black;
        color: white;
    }
`
const TransactionChatSendButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 6vh;
    width: 6vh;
    border-radius: 3vh;
    box-sizing: border-box;
    border: 1px solid black;
    background-color: green;
`

const TransactionChatKeyboard = () => {
    const inputRef = useRef();
    const dispatch = useDispatch()
    const [ message, setMessage ] = useState('');
    const { 
        email,
        currentTransaction,
        socket
    } = useSelector( state => state.mainpageReducer );
    const onChange = event =>
        setMessage( event.target.value );
    const onClick = () => {
        socket.emit('sent-message', { email, currentTransaction, message } );
        inputRef.current.value = ''
    }

    socket.on('sent-message-acknowledge', ({ acknowledge, chat }) => {
        console.log('sent-message-acknowledge', { acknowledge, chat });
        if(acknowledge){
            dispatch( transactionChat({ chat }) );
        } else {
            window.alert("Can't send message, Internal Server error" );
        }
    });

    return (
        <TransactionChatKeyboardStyle>
            <TransactionChatSendInput 
                ref={inputRef}
                onChange={onChange}
            />
            <TransactionChatSendButton onClick={onClick} >
                <RiSendPlaneFill />
            </TransactionChatSendButton>
        </TransactionChatKeyboardStyle>
    );
}

export default TransactionChatKeyboard;