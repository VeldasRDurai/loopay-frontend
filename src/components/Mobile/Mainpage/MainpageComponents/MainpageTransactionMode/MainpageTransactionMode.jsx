import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { redirectToTransactionMapChat } from '../../mainpageActions';
import MainpageTransactionModeTimer from './MainpageTransactionModeTimer./MainpageTransactionModeTimer';
const MainpageTransactionModeStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &> { margin-top: 10px; }
`;

const MainpageTransactionMode = () => {
    const dispatch = useDispatch();
    
    return <MainpageTransactionModeStyle>
        <div> Time remaining </div>
        <MainpageTransactionModeTimer />
        <button onClick={ () => dispatch( redirectToTransactionMapChat() ) } > 
            Transaction Map Chat
        </button>
    </MainpageTransactionModeStyle>;
}

export default MainpageTransactionMode;