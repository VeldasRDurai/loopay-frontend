import React from 'react';
import styled from 'styled-components';

const TransactionSwitchStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 40px;
    width: 40px;
    border-radius: 20px;
    position: absolute;
    right: 10px;
    top: 50vh;
    background-color: white;
    box-sizing: border-box;
    border: 1px solid black;
    box-shadow: 0 0 20px 1px #000000;
`

const TransactionSwitch = ({onClick}) => {
    return (
        <TransactionSwitchStyle onClick={onClick}>
            Chat
        </TransactionSwitchStyle>
    );
}

export default TransactionSwitch;