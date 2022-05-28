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

const TransactionMap = ({ setShowMap }) => {
    return (
        <TransactionMapStyle onClick={ () => setShowMap(false) }>
            TransactionMap
        </TransactionMapStyle>
    );
}

export default TransactionMap;