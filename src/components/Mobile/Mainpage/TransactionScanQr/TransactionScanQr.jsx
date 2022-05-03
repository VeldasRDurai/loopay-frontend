import React from 'react';
import styled from 'styled-components';

const TransactionScanQrStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    background-color: magenta;
`
const TransactionScanQr = () => {
    return (
        <TransactionScanQrStyle>
            TransactionFeedbackPageStyle
        </TransactionScanQrStyle>
  );
}

export default TransactionScanQr;