import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { redirectToLogin } from '../../../../../reduxStore/page/authenticationPage/authenticationPageAction';

const AlreadyAccountStyled = styled.div`
    color:#a2a1b0;
    font-size: 10px;
    font-family: 'Montserrat Alternates', sans-serif;
    width: 100vw;
    font-weight: 900;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color:#111;  */
    height:7vh;
`;
const Bold = styled.span`
    color: white;
    font-weight: 900;
`;
const AlreadyAccount = () => {
    const dispatch = useDispatch();
    return <AlreadyAccountStyled>
        Already have an account 
        <Bold onClick={() => dispatch( redirectToLogin() )} > 
            Login
        </Bold> 
    </AlreadyAccountStyled> ;
}

export default AlreadyAccount;