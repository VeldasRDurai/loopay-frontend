import React from 'react';
import styled from 'styled-components';

const TransactionFeedbackPageStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    background-color: orange;
`
const TransactionFeedbackPage = () => {
    return (
        <TransactionFeedbackPageStyle>
            TransactionFeedbackPageStyle
        </TransactionFeedbackPageStyle>
  );
}

export default TransactionFeedbackPage;