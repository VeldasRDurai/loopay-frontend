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

    color: #000000;
    background-color: #ffffff;
    padding: 10px 10px;
    border-radius:${ ({yourMessage}) => yourMessage ? '20px 0px 20px 10px' : '0px 20px 10px 20px' };
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