import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { redirectToMainpage } from '../../../../../../../reduxStore/page/authenticationPage/authenticationPageAction';

const TransactionBackStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const TransactionBack = () => {
    const dispatch = useDispatch();
    const onClick = () => 
        dispatch( redirectToMainpage() );
    return (
        <TransactionBackStyle
            onClick={onClick} >
            Back
        </TransactionBackStyle>
  );
}

export default TransactionBack;