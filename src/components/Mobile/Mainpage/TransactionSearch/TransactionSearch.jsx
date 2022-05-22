import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { mainpageUpdateSearchResults } from '../mainpageActions';
import { redirectToTransactionUserProfile } from './TransactionSearchActions';

import UserProfile from './UserProfile/UserProfile';
import ResultTile from './TransactionSearchComponents/ResultTile/ResultTile';
import TransactionSearchSave from './TransactionSearchComponents/TransacionSearchSave';

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
    const { 
        transactionSearchPageState,
        rejectedUsers 
    } = useSelector( state => state.transactionSearchReducer );
    const { 
        mainpageSearchDetails,
        mainpageSearchResults,
        socket
    } = useSelector( state => state.mainpageReducer );
    const { email } = useSelector( state => state.profile );

    const [ loading, setLoading ] = useState(true);
    useEffect( () => {
        socket.emit('transaction-search', { ...mainpageSearchDetails, email });
        socket.on('transaction-search-result', results => {
            console.log(results);
            dispatch( mainpageUpdateSearchResults({ results }) );
            setLoading(false);
        });
    },[]);

    return (
        <TransactionSearchStyle>
            <TransactionSearchSave />
            { 
                loading ? 'Loading': 
                mainpageSearchResults.map( item => {
                    const isRejected = !rejectedUsers.includes(item.email);
                    return <ResultTile key={item.email} 
                        isRejected={isRejected}
                        onClick={ () => 
                            isRejected &&
                            dispatch( redirectToTransactionUserProfile({details:item}) ) }
                        item={ item } /> 
                })
            }
            { mainpageSearchDetails.amount }
            {TransactionSearchRender[transactionSearchPageState]}
        </TransactionSearchStyle>
  );
}

export default TransactionSearch;