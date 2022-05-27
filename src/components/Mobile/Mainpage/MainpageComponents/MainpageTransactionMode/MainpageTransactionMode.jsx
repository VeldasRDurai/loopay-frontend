import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { redirectToTransactionMapChat } from '../../mainpageActions';
import MainpageTransactionModeTimer from './MainpageTransactionModeTimer./MainpageTransactionModeTimer';
const MainpageTransactionModeStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MainpageTransactionMode = () => {
    const dispatch = useDispatch();
    const { transactionEndTime } = useSelector( state => state.mainpageReducer );
    
    return <MainpageTransactionModeStyle>
        <div> Time remaining : { Math.floor((new Date(transactionEndTime) - new Date())/1000) } </div>
        <MainpageTransactionModeTimer />
        <button onClick={ () => dispatch( redirectToTransactionMapChat() ) } > 
            Transaction Map Chat
        </button>
    </MainpageTransactionModeStyle>;
}

export default MainpageTransactionMode;