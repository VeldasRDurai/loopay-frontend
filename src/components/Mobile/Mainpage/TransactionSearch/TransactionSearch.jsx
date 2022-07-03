import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { redirectToMainpage } from '../../../../reduxStore/page/authenticationPage/authenticationPageAction';
import { mainpageLastSearchResults } from '../mainpageActions';
import { redirectToTransactionUserProfile } from './TransactionSearchActions';

import UserProfile from './UserProfile/UserProfile';
import ResultTile from './TransactionSearchComponents/ResultTile/ResultTile';
import TransactionSearchSave from './TransactionSearchComponents/TransacionSearchSave/TransacionSearchSave';

import { IoChevronBackCircleOutline } from "react-icons/io5";

const TransactionSearchStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    
    background-color: black;
`

const logoStyle = {
    height:'20px',
    width:'30px',
    fill:'white',
    marginLeft:'10px'
};

const Heading = styled.div`
    margin-left: 10px;
    font-size: 20px;
    font-weight: 900;
`

const BackButton = styled.div`
    height: 10vh;
    width: 100vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: white;
`;

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
            <BackButton onClick={ () => dispatch( redirectToMainpage() ) } > 
                <IoChevronBackCircleOutline style={logoStyle} />
                <Heading> Search Result </Heading>
            </BackButton>
            {/* <div style={{ marginTop:'10px',marginBottom:'10px' }} 
                onClick={ ()=> dispatch( redirectToMainpage() ) } >
                back
            </div> */}
            <TransactionSearchSave />
            <div style={{
                height: '75vh',
                overflow: 'hidden scroll',
                margin: '10px 0px',
                // backgroundColor: 'aliceblue'
                color: 'white',
                textAlign: 'center'
            }} >
                { 
                    loading ? 'Loading': 
                    lastSearchResults.length === 0 ? 'No users for your search':
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
            {/* { lastSearch.amount } */}
            {TransactionSearchRender[transactionSearchPageState]}
        </TransactionSearchStyle>
  );
}

export default TransactionSearch;