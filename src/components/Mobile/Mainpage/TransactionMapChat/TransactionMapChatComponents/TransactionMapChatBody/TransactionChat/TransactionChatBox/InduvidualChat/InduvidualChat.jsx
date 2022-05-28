import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const InduvidualChatStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    /* min-height: 50px; */
    max-width: 70vw;
    min-width: 30vw;
    align-items: ${ ({yourMessage}) => yourMessage ? 'flex-end' : 'flex-start' };;

    background-color: #77ff00;
    padding: 10px 10px;
    border-radius: 10px;
    margin: 5px;
    align-self: ${ ({yourMessage}) => yourMessage ? 'flex-end' : 'flex-start' };
    justify-content: center;
    word-break: break-all;
`


const InduvidualChat = ({ sender, message }) => {
    const { email } = useSelector( state => state.mainpageReducer );
    return (
        <InduvidualChatStyle yourMessage={ sender===email } >
            {/* { sender } :  */}
            { message }
        </InduvidualChatStyle>
    );
}

export default InduvidualChat;