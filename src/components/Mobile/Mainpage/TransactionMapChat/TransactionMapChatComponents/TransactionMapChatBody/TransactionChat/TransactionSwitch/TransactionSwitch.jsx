import React from 'react';
import styled, { keyframes } from 'styled-components';

const blinker = keyframes`
    0% {
        box-shadow: 0 0 5px 10px #00ff00;
    }
    100% {
        box-shadow: 0 0 0px 0px #00ff00;
    }`;
const TransactionSwitchStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 40px;
    width: 40px;
    border-radius: 20px;
    position: absolute;
    left: 15px;
    top: 35vh;
    background-color: white;
    box-sizing: border-box;
    border: 1px solid black;
    
    animation: ${blinker} 1s infinite cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`

const TransactionSwitch = ({onClick}) => {
    return (
        <TransactionSwitchStyle onClick={onClick}>
            map
        </TransactionSwitchStyle>
    );
}

export default TransactionSwitch;