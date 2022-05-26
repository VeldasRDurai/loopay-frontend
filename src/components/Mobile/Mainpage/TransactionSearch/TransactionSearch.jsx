import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { mainpageLastSearchResults } from '../mainpageActions';
import { redirectToTransactionUserProfile } from './TransactionSearchActions';

import UserProfile from './UserProfile/UserProfile';
import ResultTile from './TransactionSearchComponents/ResultTile/ResultTile';
import TransactionSearchSave from './TransactionSearchComponents/TransacionSearchSave/TransacionSearchSave';

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
        lastSearch,
        lastSearchResults,
        socket
    } = useSelector( state => state.mainpageReducer );
    const { 
        transactionSearchPageState,
        rejectedUsers 
    } = useSelector( state => state.transactionSearchReducer );
    const { email } = useSelector( state => state.profile );

    const [ loading, setLoading ] = useState(true);
    useEffect( () => {
        socket.emit('transaction-search', { ...lastSearch, email });
        socket.on('transaction-search-result', ({ lastSearchResults }) => {
            dispatch( mainpageLastSearchResults({ lastSearchResults }) );
            setLoading(false);
        });
    },[]);

    return (
        <TransactionSearchStyle>
            <TransactionSearchSave />
            <div style={{
                maxHeight: '80vh',
                overflow: 'hidden scroll',
                margin: '10px 0px',
                backgroundColor: 'aliceblue'
            }} >
                { 
                    loading ? 'Loading': 
                    lastSearchResults.map( item => {
                        const isRejected = !rejectedUsers.includes(item.email);
                        return <ResultTile key={item.email} 
                            isRejected={isRejected}
                            onClick={ () => 
                                isRejected &&
                                dispatch( redirectToTransactionUserProfile({details:item}) ) }
                            item={ item } /> 
                    })
                }
            </div>
            { lastSearch.amount }
            {TransactionSearchRender[transactionSearchPageState]}
        </TransactionSearchStyle>
  );
}

export default TransactionSearch;