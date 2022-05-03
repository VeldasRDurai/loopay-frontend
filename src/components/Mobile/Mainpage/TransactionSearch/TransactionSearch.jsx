import React from 'react';
import styled from 'styled-components';
// import { useDispatch, useSelector } from 'react-redux';

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

const TransactionSearch = () => {
    // const dispatch = useDispatch();
    // const { mainpagePageState } = useSelector( state => state.mainpageReducer )
    return (
        <TransactionSearchStyle  
            // onClick={ () => dispatch( redirectToTransactionSearch() ) } >
            >
                TransactionSearch
        </TransactionSearchStyle>
  );
}

export default TransactionSearch;