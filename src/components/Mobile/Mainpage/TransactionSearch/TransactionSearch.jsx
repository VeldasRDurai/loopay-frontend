import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { redirectToTransactionUserProfile } from './TransactionSearchActions'

import UserProfile from './UserProfile/UserProfile';

const TransactionSearchStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    
    background-color: yellow;
`
const TransactionSearchRender = {
    REDIRECT_TO_TRANSACTION_USER_PROFILE: <UserProfile />
}
const TransactionSearch = () => {
    const dispatch = useDispatch();
    const { transactionSearchPageState } = useSelector( state => state.transactionSearchReducer );
    return (
        <TransactionSearchStyle  
            onClick={ () => dispatch( redirectToTransactionUserProfile() ) } >
                TransactionSearch
                {TransactionSearchRender[transactionSearchPageState]}
        </TransactionSearchStyle>
  );
}

export default TransactionSearch;