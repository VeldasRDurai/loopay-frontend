import React from 'react';
import styled from 'styled-components';

import SignupFormPasswordTagStyled from './SignupFormPasswordTag/SignupFormPasswordTag';

const SignupFormPasswordStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;
const SignupFormPasswordLabelStyled = styled.label`
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 11px;
    font-weight: 900;
    margin-bottom: 5px;
`;
const SignupFormPassword = () => {

    return <SignupFormPasswordStyled>
        <SignupFormPasswordLabelStyled>
            Password
        </SignupFormPasswordLabelStyled>
        <SignupFormPasswordTagStyled />
    </SignupFormPasswordStyled>
}

export default SignupFormPassword;