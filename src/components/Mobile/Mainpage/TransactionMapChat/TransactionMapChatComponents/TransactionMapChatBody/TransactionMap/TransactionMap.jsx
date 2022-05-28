import React from 'react';
import styled from 'styled-components';

const TransactionMapStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 90vh;
    width: 100vw;

    background-color: #00ff00;
`

const TransactionMap = ({onClick}) => {
    return (
        <TransactionMapStyle onClick={onClick}>
            TransactionMap
        </TransactionMapStyle>
    );
}

export default TransactionMap;