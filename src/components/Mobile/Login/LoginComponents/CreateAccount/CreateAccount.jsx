import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { redirectToSignup } from '../../../../../reduxStore/page/authenticationPage/authenticationPageAction';

const CreateAccountStyled = styled.div`
    color:#a2a1b0;
    font-size: 10px;
    font-family: 'Montserrat Alternates', sans-serif;
    width: 100vw;
    font-weight: 900;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:#EEE; 
    height:7vh;
`;
const Bold = styled.span`
    color: black;
    font-weight: 900;
`;
const CreateAccount = () => {
    const dispatch = useDispatch();
    return <CreateAccountStyled>
        New ? Create an account 
        <Bold onClick={() => dispatch( redirectToSignup() )} > 
            Sign Up 
        </Bold> 
    </CreateAccountStyled> ;
}

export default CreateAccount;