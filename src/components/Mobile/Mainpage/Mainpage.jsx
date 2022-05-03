import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { 
    // redirectToProfile,  
    // redirectToHistory,
    // redirectToNotification,
    redirectToTransactionSearch,
} from './mainpageActions';
import {
    REDIRECT_TO_PROFILE,
    REDIRECT_TO_HISTORY,
    REDIRECT_TO_NOTIFICATION,
    REDIRECT_TO_TRANSACTION_SEARCH
} from './mainpageTypes';

import TransactionSearch from './TransactionSearch/TransactionSearch';

const MainpageStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    
    background-color: aqua;
`

const Mainpage = () => {
    const dispatch = useDispatch();
    const { mainpagePageState } = useSelector( state => state.mainpageReducer )
    return (
        <MainpageStyle  onClick={ () => dispatch( redirectToTransactionSearch() ) } >
            mainpage
            {
                mainpagePageState === REDIRECT_TO_PROFILE ?
                    'profile':
                mainpagePageState === REDIRECT_TO_HISTORY ?
                    'history':
                mainpagePageState === REDIRECT_TO_NOTIFICATION ?
                    '3':
                mainpagePageState === REDIRECT_TO_TRANSACTION_SEARCH ?
                    <TransactionSearch />: undefined
            }
        </MainpageStyle>
  );
}

export default Mainpage;