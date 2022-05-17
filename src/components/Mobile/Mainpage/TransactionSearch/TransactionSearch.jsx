import React, { useEffect, useState } from 'react';
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
    const { 
        mainpageSearchDetails,
        socket
    } = useSelector( state => state.mainpageReducer );
    const { email } = useSelector( state => state.profile );

    const [ loading, setLoading ] = useState(false);
    useEffect( () => {
        socket.emit('transaction-search', { ...mainpageSearchDetails, email });
    },[]);

    return (
        <TransactionSearchStyle  
            onClick={ () => dispatch( redirectToTransactionUserProfile() ) } >
                {
                    loading ? 'Loading':'TransactionSearch'
                }
                { mainpageSearchDetails.amount }
                {TransactionSearchRender[transactionSearchPageState]}
        </TransactionSearchStyle>
  );
}

export default TransactionSearch;