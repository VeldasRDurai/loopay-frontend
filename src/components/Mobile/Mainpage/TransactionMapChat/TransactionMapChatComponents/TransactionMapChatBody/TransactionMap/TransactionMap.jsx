import React from 'react';
import styled from 'styled-components';

import TransactionSwitch from './TransactionSwitch/TransactionSwitch';

import slideInLeft from '../../../../../../../animation/slideInLeft';

const TransactionMapStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 90vh;
    width: 100vw;

    background-color: #00ff00;
    animation: ${slideInLeft} 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`

const TransactionMap = ({onClick}) => {
    return (
        <TransactionMapStyle>
            TransactionMap
            <TransactionSwitch onClick={onClick} />
        </TransactionMapStyle>
    );
}

export default TransactionMap;