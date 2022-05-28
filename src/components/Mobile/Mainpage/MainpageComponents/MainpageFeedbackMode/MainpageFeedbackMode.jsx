import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { redirectToTransactionFeedbackpage } from '../../mainpageActions';

const MainpageFeedbackModeStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MainpageFeedbackMode = () => {
    const dispatch = useDispatch();
    const onClick = () => dispatch( redirectToTransactionFeedbackpage() );
    return <MainpageFeedbackModeStyle 
        onClick={ onClick } >
           Enter the feedback
    </MainpageFeedbackModeStyle>;
}

export default MainpageFeedbackMode;